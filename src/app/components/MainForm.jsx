import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../context/useCountriesDetails";
import { useLocationDetail } from "../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";


const CommonMainForm = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("")
    const [isDisable, setIsDisable] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find((item) => item?.alpha_2_code == countryData.country);
            formik.setFieldValue("country", filterData ? filterData?.en_short_name : "");
        }
    }, [countryData?.country, countryList]);



    const sendVerificationCode = () => {
        setOtpLoading(true)
        axios.post(`/api/otp-smtp`, {
            email: formik?.values?.email,
            type: "0"
        }).then(res => {
            if (res?.data?.message) {
                setShowOtp(true)
                setStoredOtp(res?.data?.message?.slice(4, -3))
                toast.success("Otp send successfully!")
            }
            else {
                toast.error(res?.data?.message)
                setShowOtp(false)
            }
        }).catch(err => {
            setShowOtp(false)
        }).finally(() => {
            setOtpLoading(false)
        })
    }

    const generatePassword = (length = 12) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    };

    const sendDataToDb = async (data) => {
        const emailData = axios.post(
            `/api/email`,
            JSON.stringify(data)
        ).then(res => {
            toast.success('Data inserted successfully');
            formik.resetForm();
            setLoading(false)
            localStorage.setItem('user', JSON.stringify(data));
            router.push("/thank-you",);
            formik.resetForm()
            setShowOtp(false)
        }).catch(err => {
            toast.error('Error inserting data: ' + result.error);
            setLoading(false)
        }).finally(() => {
            setLoading(false);
        })
    }

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            last_name: "",
            phone: "",
            password: generatePassword(),
            country: "",
            otp: "",
            terms: false,
        },
        validationSchema: Yup.object({
            nickname: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters.")
                .required("First name is required"),
            last_name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters.")
                .required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            country: Yup.string().required("Country is required"),
            otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
            terms: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post("https://hooks.zapier.com/hooks/catch/16420445/2nppxqi/", JSON.stringify(values));
            } catch (error) {
            } finally {
                sendDataToDb(values, formik, setLoading)
            }
        },
    });

    const verifyOtpCode = async () => {
        if (formik.values.otp == storedOtp) {
            toast.success("Otp Verified Successfully!")
            setShowOtp(false)
            setIsDisable(false)
        }
        else {
            toast.error("Otp Verification Failed try again!")
        }
    }

    return (
        <section className="demo-account">
            <div className="max-w-6xl mx-auto p-5 bg-white shadow-2xl rounded-2xl">
                <div className=" ">
                    <div className="flex justify-center items-center pb-5 ">
                        <Image
                            src="/logo-2024.webp"
                            width={150}
                            height={54}
                            alt="GTCFX"
                            priority
                            className="lg:w-[150px] lg:h-[54px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
                            onClick={() => {
                                router.push("/");
                            }}
                        />


                    </div>
                </div>
                <div className="relative">
                    <form onSubmit={formik.handleSubmit} className="bg-white relative text-xs rounded-3xl md:p-0 mx-auto form-setting text-left">
                        {/* Full Name & Email */}
                        <div className="grid grid-cols-1 gap-3 mb-3">
                            <div className="relative">
                                <svg className="absolute top-3 left-3 text-gray-400 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                <input
                                    type="text"
                                    className={`w-full px-4 bg-white py-3 pl-9 border-b ${formik.touched.nickname && formik.errors.nickname ? "border-b-red-500" : "border-b-gray-300"} focus:outline-none`}
                                    placeholder="First Name"
                                    {...formik.getFieldProps("nickname")}
                                />
                                {formik.touched.nickname && formik.errors.nickname && (
                                    <p className="text-red-500 text-left pt-1">{formik.errors.nickname}</p>
                                )}
                            </div>
                            <div className="relative">
                                <svg className="absolute top-3 left-3 text-gray-400 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                <input
                                    type="text"
                                    className={`w-full px-4 bg-white py-3 pl-9 border-b ${formik.touched.last_name && formik.errors.last_name ? "border-b-red-500" : "border-b-gray-300"} focus:outline-none`}
                                    placeholder="Last Name"
                                    {...formik.getFieldProps("last_name")}
                                />
                                {formik.touched.last_name && formik.errors.last_name && (
                                    <p className="text-red-500  pt-1 text-left">{formik.errors.last_name}</p>
                                )}
                            </div>

                        </div>


                        <div className="grid grid-cols-1 gap-3 mb-3">
                            <div className="relative">
                                <div className="relative">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="absolute top-3 left-3 w-4 h-4 text-gray-400 fill-current"
                                    >
                                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                    </svg>
                                                                        <input
                                        type="email"
                                        className={`w-full bg-white px-4 py-3 pl-9 border-b ${formik.touched.email && formik.errors.email ? "border-b-red-500" : "border-b-gray-300"} focus:outline-none focus:bg-none`}
                                        placeholder="Email"
                                        {...formik.getFieldProps("email")}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 pt-1 text-left">{formik.errors.email}</p>
                                    )}
                                    <div className="absolute top-2 bg-primary right-0 rounded-md cursor-pointer text-white  py-1.5 px-2"
                                        onClick={() => {
                                            sendVerificationCode()
                                        }}
                                    >
                                        {otpLoading ? "Sending.." : "Get Code"}
                                    </div>
                                </div>
                                {showOtp &&
                                    <div className="grid grid-cols-1 gap-2">
                                        <div>
                                            <p className="my-2 text-left pt-1">OTP has been sent to given Email</p>
                                            <OtpInput
                                                value={formik.values.otp}
                                                onChange={(otp) => formik.setFieldValue("otp", otp)}
                                                numInputs={6}
                                                containerStyle={{
                                                    justifyContent: 'space-around',
                                                    alignItems: "center",
                                                    gap: "5px"
                                                }}
                                                renderInput={(props) => <input {...props} />}
                                                isInputNum
                                                inputStyle={{
                                                    borderRadius: '5px',
                                                    paddingBottom: '8px',
                                                    paddingTop: "8px",
                                                    width: "20%",
                                                    backgroundColor: "#fff",
                                                    color: "#000",
                                                    fontWeight: "700",
                                                    outlineColor: '#f9c617',
                                                    border: formik.touched.otp && formik.errors.otp ? "1px solid red" : "1px solid #ccc",
                                                }}

                                            />
                                            {formik.touched.otp && formik.errors.otp && (
                                                <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                                            )}

                                        </div>
                                        <div className=" bg-primary right-0 rounded-md cursor-pointer text-white  py-2 px-2 text-center"
                                            onClick={() => {
                                                verifyOtpCode()
                                            }}
                                        >
                                            Verify Code
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="relative">

                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="AE"
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                                    className={`w-full px-4 py-3 border-b ${formik.touched.phone && formik.errors.phone ? "border-b-red-500" : "border-b-gray-300"} focus:outline-none`}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-sm text-left">{formik.errors.phone}</p>
                                )}
                            </div>

                        </div>

                        <div className="relative mb-3">
                            <svg
                                className="absolute top-3 left-3 w-4 h-4 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22M2.50002 9H21.5M2.5 15H21.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>
                            <select
                                className={`w-full bg-white px-4 py-3 pl-9 border-b ${formik.touched.country && formik.errors.country ? "border-b-red-500" : "border-gray-300"} text-gray-700`}
                                {...formik.getFieldProps("country")}
                            >
                                <option value="">Select Country</option>
                                {countryList?.map((item) => (
                                    <option key={`${item?.alpha_2_code}-${item?.alpha_3_code}`} value={item?.en_short_name}>
                                        {item?.en_short_name}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.country && formik.errors.country && (
                                <p className="text-red-500 text-sm text-left">{formik.errors.country}</p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                className={`block text-xs pb-2 ${formik.touched.terms && formik.errors.terms
                                    ? "text-red-500"
                                    : ""
                                    }`}
                                htmlFor="terms"
                            >
                                {formik.touched.terms && formik.errors.terms
                                    ? formik.errors.terms
                                    : "Please accept the terms and conditions"}
                            </label>
                            <div className="flex items-start gap-1">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value="checked"
                                    className="h-5 w-5"
                                />
                                <p className="inline  text-[10px] text-primary">
                                    By clicking Submit, I confirm that: (1) I have read and agree to the <a className="text-secondary underline" href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf">Client Agreements</a>; (2) I consent to GTCFX contacting me at reasonable times; and (3) my number is not on the Do Not Call Register (DNCR).
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button disabled={isDisable} type="submit" className="bg-primary text-white w-full font-medium py-2 px-8 rounded-lg text-lg">
                                {loading ? "Submitting.." : "Get Started Now"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CommonMainForm;