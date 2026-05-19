"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import OtpInput from "react-otp-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useLocationDetail } from "../../context/useLocationDetail";

function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstname: "", lastname: "" };
  if (parts.length === 1) return { firstname: parts[0], lastname: parts[0] };
  return { firstname: parts[0], lastname: parts.slice(1).join(" ") };
}

function FieldIcon({ children }) {
  return (
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
      {children}
    </span>
  );
}

function FieldError({ touched, error }) {
  if (!touched || !error) return null;
  return <p className="text-red-500 text-xs mt-1">{error}</p>;
}

function inputClass(touched, error) {
  const base =
    "w-full pl-12 py-3.5 border rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2";
  return touched && error
    ? `${base} border-red-500 focus:ring-red-500/30 focus:border-red-500`
    : `${base} border-gray-200 focus:ring-[#1e3a6e]/30 focus:border-[#1e3a6e]`;
}

export default function RegFormPanel() {
  const { countryData } = useLocationDetail();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [codeSent, setCodeSent] = useState(false);
  const [gtcCountries, setGtcCountries] = useState([]);
  const gtcCountriesRef = useRef([]);

  useEffect(() => {
    gtcCountriesRef.current = gtcCountries;
  }, [gtcCountries]);

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      phone: "",
      password: "",
      country: "",
      area: "",
      otp: "",
      terms: false,
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters.")
        .required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      country: Yup.string().required("Country is required"),
      phone: Yup.string().matches(/^\d{6,15}$/, "Enter a valid phone number (digits only)"),
      password: Yup.string()
        .min(8, "At least 8 characters")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)/, "Must contain letters and numbers")
        .required("Password is required"),
      otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
      terms: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
    }),
    onSubmit: async (values) => {
      const selectedCountry = gtcCountriesRef.current.find((c) => c.name === values.country);
      if (!selectedCountry) {
        toast.error("Please select a valid country");
        return;
      }

      const { firstname, lastname } = splitName(values.nickname);
      const regPayload = {
        code: values.otp,
        is_company: 0,
        area: selectedCountry.phone_code || values.area,
        country: selectedCountry.name,
        email: values.email,
        phone: values.phone || "",
        password: values.password,
        lastname,
        firstname,
      };

      setLoading(true);
      try {
        const res = await axios.post("/api/gtc/reg", regPayload);
        if (res?.data?.code === 200) {
          toast.success(res?.data?.message || "Registration successful!");
          localStorage.setItem(
            "user",
            JSON.stringify({ ...values, firstname, lastname })
          );
          formik.resetForm();
          setShowOtp(false);
          setIsDisable(true);
          toast.success(res?.data?.message || "Registration successful!");
          // router.push("/thank-you");
        } else {
          toast.error(res?.data?.message || "Registration failed");
        }
      } catch (err) {
        toast.error(err?.response?.data?.message || "Registration failed");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    axios
      .post("/api/gtc/get-country")
      .then((res) => {
        if (res?.data?.code === 200 && Array.isArray(res.data.data)) {
          setGtcCountries(res.data.data);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (countryData?.country && gtcCountries.length > 0) {
      const match = gtcCountries.find((c) => c.code === countryData.country);
      if (match) {
        formik.setFieldValue("country", match.name);
        formik.setFieldValue("area", match.phone_code || "");
      }
    }
  }, [countryData?.country, gtcCountries]);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    formik.setFieldValue("country", countryName);
    const match = gtcCountries.find((c) => c.name === countryName);
    formik.setFieldValue("area", match?.phone_code || "");
  };

  const sortedCountries = [...gtcCountries].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const isEmailAvailable = (data) =>
    data?.code === 200 && /available/i.test(data?.message || "");

  const sendVerificationCode = async () => {
    await formik.setFieldTouched("email", true);
    const emailError = await formik.validateField("email");
    if (emailError || !formik.values.email) {
      toast.error(emailError || "Email is required");
      return;
    }

    setOtpLoading(true);
    setShowOtp(false);

    try {
      await axios.post(`/api/gtc/get-country`);

      const checkRes = await axios.post(`/api/gtc/check-email`, {
        email: formik.values.email,
      });

      if (!isEmailAvailable(checkRes?.data)) {
        toast.error(checkRes?.data?.message || "This email is already registered");
        return;
      }

      const codeRes = await axios.post(`/api/gtc/get-code`, {
        email: formik.values.email,
        type: "0",
      });

      if (codeRes?.data?.code === 200) {
        setShowOtp(true);
        setCodeSent(true);
        toast.success(codeRes?.data?.message || "Otp send successfully!");
        setIsDisable(false);
      } else {
        toast.error(codeRes?.data?.message || "Failed to send OTP");
        setIsDisable(true);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send OTP");
      setIsDisable(true);
    } finally {
      setOtpLoading(false);
    }
  };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const canRegisterMobile =
    codeSent && formik.values.otp.length === 6 && formik.values.terms;
  const registerDisabled = loading || (isDesktop ? isDisable : !canRegisterMobile);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center text-center mb-6 lg:hidden">
        <Image
          src="/logo-2024.webp"
          alt="GTC"
          width={160}
          height={64}
          className="h-12 w-auto object-contain"
          priority
        />
      </div>

      <h1 className="text-base sm:text-2xl font-bold text-gray-900 text-center">
        Sign up for a live account
      </h1>
      <p className="text-gray-500 text-sm mt-2 mb-6 lg:mb-8 text-center ">
        Fill in the details below to get started
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-3.5 lg:space-y-4">
        <div>
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </FieldIcon>
            <input
              type="text"
              placeholder="Name"
              className={`${inputClass(formik.touched.nickname, formik.errors.nickname)} pr-4`}
              {...formik.getFieldProps("nickname")}
            />
          </div>
          <FieldError touched={formik.touched.nickname} error={formik.errors.nickname} />
        </div>



        <div>
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </FieldIcon>
            <input
              type="email"
              placeholder="Email"
              className={`${inputClass(formik.touched.email, formik.errors.email)} pr-4`}
              {...formik.getFieldProps("email")}
            />
          </div>
          <FieldError touched={formik.touched.email} error={formik.errors.email} />
        </div>

        <div>
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </FieldIcon>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Verification Code"
              className={`${inputClass(formik.touched.otp, formik.errors.otp)} pr-[6.5rem]`}
              {...formik.getFieldProps("otp")}
            />
            <button
              type="button"
              onClick={sendVerificationCode}
              disabled={otpLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 pl-3 border-l border-gray-200 text-[#1e3a6e] text-sm font-medium hover:underline disabled:opacity-60"
            >
              {otpLoading ? "Sending.." : "Send Code"}
            </button>
          </div>
          <FieldError touched={formik.touched.otp} error={formik.errors.otp} />
        </div>

        <div>
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </FieldIcon>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${inputClass(formik.touched.password, formik.errors.password)} pr-12`}
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <FieldError touched={formik.touched.password} error={formik.errors.password} />
          <p className="text-xs text-gray-400 mt-1">At least 8 characters with letters and numbers</p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </FieldIcon>
            <input
              type="tel"
              inputMode="numeric"
              placeholder={formik.values.area ? `Phone (+${formik.values.area})` : "Phone"}
              className={`${inputClass(formik.touched.phone, formik.errors.phone)} pr-4`}
              {...formik.getFieldProps("phone")}
            />
          </div>
          <FieldError touched={formik.touched.phone} error={formik.errors.phone} />
        </div>

        <div>
          <div className="relative">
            <FieldIcon>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.138-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </FieldIcon>
            <select
              name="country"
              value={formik.values.country}
              onChange={handleCountryChange}
              onBlur={formik.handleBlur}
              disabled={sortedCountries.length === 0}
              className={`${inputClass(formik.touched.country, formik.errors.country)} pr-10 appearance-none bg-white invalid:text-gray-400 disabled:bg-gray-50`}
            >
              <option value="" disabled>
                {sortedCountries.length === 0 ? "Loading countries..." : "Country Selection"}
              </option>
              {sortedCountries.map((item) => (
                <option key={item.code} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <FieldError touched={formik.touched.country} error={formik.errors.country} />
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0a2540] focus:ring-[#1e3a6e]"
            />
            <span
              className={`text-sm leading-snug ${formik.touched.terms && formik.errors.terms ? "text-red-500" : "text-gray-600"}`}
            >
              I agree to the{" "}
              <a
                href="https://www.gtcfx.com/terms"
                className="text-[#1e3a6e] hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://www.gtcfx.com/privacy"
                className="text-[#1e3a6e] hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </span>
          </label>
          <FieldError touched={formik.touched.terms} error={formik.errors.terms} />
        </div>

        <button
          type="submit"
          disabled={registerDisabled}
          className="w-full py-3.5 rounded-full bg-[#1e3a6e] text-white font-semibold text-base hover:bg-[#0d2f52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2 lg:rounded-lg"
        >
          {loading ? "Submitting.." : "Register"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link
          href="https://mygtcportal.com/login"
          className="text-[#1e3a6e] underline font-medium hover:text-[#0d2f52]"
        >
          Click here to login
        </Link>
      </p>
    </div>
  );
}
