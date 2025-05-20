import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiUserLocationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
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
                            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/logo-2024-new.webp"
                            width={150}
                            height={54}
                            alt="GTCFX"
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
                                <RiUserLocationLine className="absolute top-3 left-3 text-gray-400 h-4 w-4" />
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
                                <RiUserLocationLine className="absolute top-3 left-3 text-gray-400 h-4 w-4" />
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
                                    <CiMail className="absolute top-3 left-3 text-gray-400 h-4 w-4" />
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
                            <GiWorld className="absolute top-3 left-3 text-gray-400 h-4 w-4" />
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