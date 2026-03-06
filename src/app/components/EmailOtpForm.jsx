'use client'
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


const EmailOtpForm = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("")
    const [isDisable, setIsDisable] = useState(true)
    const router = useRouter()




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

 

    const formik = useFormik({
        initialValues: {
         
            email: "",
           
            otp: "",
        },
        validationSchema: Yup.object({
           
            email: Yup.string().email("Invalid email address").required("Email is required"),
           
            otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
            
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post("https://hooks.zapier.com/hooks/catch/16420445/2npssssi/", JSON.stringify(values));
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
        <section className="demo-account mt-10">
            <div className="max-w-xl mx-auto p-5 bg-white shadow-2xl rounded-2xl">
           
                <div className="relative">
                    <form onSubmit={formik.handleSubmit} className="bg-white relative text-sm rounded-3xl md:p-0 mx-auto form-setting text-left">
                    

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
                          

                        </div>

               

                        {/* Submit Button */}
                        <div className="text-center">
                            <button disabled={isDisable} type="submit" className="bg-primary text-white w-full py-2 px-8 rounded-lg">
                                {loading ? "Submitting.." : "Get Started Now"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailOtpForm;
