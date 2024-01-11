"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import "./login.css";
import Image from "next/image";
import gurucoolLogo from "../../../public/assets/footericons/New Logo 1.svg";
// import PhoneCodeSelect from "./PhoneCodeSelect";
import loginBanner1 from "../../../public/assets/banners/loginBanner1.png";
import loginBanner2 from "../../../public/assets/banners/loginBannerDesktop.jpeg";
import loginBanner3 from "../../../public/assets/banners/loginBanner3.png";
import Link from "next/link";
import "react-phone-number-input/style.css";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { testAction, verifyOtp } from "@/lib/actions";
import { useRouter } from "next/navigation";

const removeLeadingZero = (phoneNumber: string) => {
  if (typeof phoneNumber !== "string") {
    throw new Error("Input must be a string");
  }
  let number = phoneNumber.slice(1);
  return number.replace(/\s/g, "");
};

const issOpen = true;
export function BasicModal({ setLogin }: { setLogin: Function }) {
  const [otp, setOtp] = useState("");
  const [value, setValue] = useState<any | undefined>();
  const [otpSend, setOtpsend] = useState(false);
  const [errorMsg, setErrormsg] = useState("");
  const [otpsendMsg, setOtpsendmsg] = useState("");
  const router = useRouter();
  //Timer Setup for resend otp
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [countdown, setCountdown] = useState(40);

  useEffect(() => {
    let intervalId: any;
    if (isTimerActive) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerActive]);

  useEffect(() => {
    if (countdown === 0) {
      setIsTimerActive(false);
    }
  }, [countdown]);

  function handleResendOTP() {
    setIsTimerActive(true);
    setCountdown(30);
    handleSendotp();
  }

  const handleSendotp = async () => {
    if (value && isValidPhoneNumber(value)) {
      toast.promise(
        testAction({
          code: "+91",
          phone: removeLeadingZero(formatPhoneNumber(value)),
          isInternational: false,
        })
          .then((result) => {
            // Handle the result here
            // console.log("Test Action Result:", result);
            if (result?.success) {
              setOtpsendmsg(result?.message);
              setOtpsend(true);
              setIsTimerActive(true);
              setErrormsg("");
            } else {
              setErrormsg("Please Try Again after some time!");
            }

            // Perform additional actions based on the result
          })
          .catch((error) => {
            // Handle errors here
            console.error("Error:", error.message);
          }),
        {
          loading: "Sending...",
          success: <b>Succesfully Send OTP!</b>,
          error: <b>Could not send OTP.</b>,
        }
      );
    } else {
      //Not Valid Phone Number
      setErrormsg("Please Enter a Valid Phone Number!");
    }
  };

  const verifyOtphandler = async () => {
    toast.promise(
      verifyOtp({
        phone: removeLeadingZero(formatPhoneNumber(value)),
        userOTP: otp,
      })
        .then((result) => {
          // console.log(result);
          if (result?.success) {
            // console.log("Success Fully Login!");
            //TODO: New User Logic and OLd use Logic here
            if (result.newUser) {
              //TODO: New User Logic
              router.push("/register");
              // console.log(result?.newUser);
              setLogin(false);
            } else {
              toast.success("Successfully Login!");
              setLogin(false);
              router.push("/");
            }
          } else {
            setErrormsg(result?.message);
          }
        })
        .catch((err) => {
          console.log(err);
        }),
      {
        loading: "Verifying...",
        success: <b>Verified Succesfully!</b>,
        error: <b>Could Not Verified!</b>,
      }
    );
  };

  return (
    <div className="fixed top-0 w-full h-full  bg-[rgba(0,0,0,0.7)] z-[21]">
      {/* {true && ( */}
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0, 0, 0, 0.7)] flex items-center justify-center z-[21]">
        <div
          className={clsx(
            "relative bg-[#965efb] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.2)] w-[20rem] md:w-[56rem]",
            {
              "animate__animated animate__zoomIn animate__faster": issOpen,
            },
            {
              "animate__animated animate__zoomOutDown animate__faster":
                !issOpen,
            }
          )}
        >
          {/* <Link href={"/login"}> */}
          <button
            className="flex justify-center items-center w-6 h-6 absolute top-3 right-3 p-1 rounded-[25%] bg-[#f0f8ff76] border-none cursor-pointer z-[1000] transition-all duration-300 ease-in-out hover:bg-opacity-25 hover:bg-blue-50 focus:outline-none "
            onClick={() => {
              setLogin(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>
          {/* </Link> */}
          {/* login Main Container  */}
          <div className="flex justify-between flex-col rounded-lg bg-[#965efb] md:flex-row">
            {/* LOgin Box  */}
            <div className="w-[100%] overflow-hidden flex flex-col justify-center items-center md:w-[50%]">
              <div className="flex items-center justify-start">
                {/* New User :LOginstack */}
                <div className="flex pt-[23px] pb-[23px] w-[100%] mt-0">
                  {/* Otp Sent Successfully  */}
                  {otpSend ? (
                    <div className="flex flex-col items-start">
                      <h2 className="text-[#fff] text-[20px] font-semibold tracking-[-0.837063px] md:text-[46px] md:tracking-[-1.27971px]">
                        Login
                      </h2>
                      <p className="text-[12px] font-medium md:font-[20px] tracking-[-0.206143px] md:tracking-[-0.33px]">
                        Enter OTP
                      </p>
                      <div className="flex items-center justify-center text-[red] text-[14px] md:text-[16px]">
                        {errorMsg}
                      </div>
                      <div className="flex items-center justify-center text-green-600 text-[14px] md:text-[16px]">
                        {otpsendMsg}
                      </div>
                      <form className="w-[100%] relative pb-[12px]">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center">
                            <div className="flex items-center gap-[5px]">
                              {/* OTP Input Component  */}
                              <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span></span>}
                                renderInput={(props) => <input {...props} />}
                                containerStyle="login-otp-container"
                                inputStyle="login-otp-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* 2  */}
                      <div className="flex gap-[9px]">
                        <div className="flex items-center justify-center gap-[9px] text-[10px] text-[#fff] md:text-[14px]">
                          We have sent code to your Mobile
                        </div>
                        <div className="flex items-center justify-center gap-[9px] text-[10px] text-[#fff] md:text-[14px]">
                          {value}
                        </div>
                      </div>
                      {/* 3  */}
                      <div className="flex pb-[5px] pl-[2px] pr-0 flex-col items-end justify-end w-[100%]">
                        <div className="flex justify-end">
                          {/* is Timer Active  */}
                          {isTimerActive ? (
                            <p className="w-[100%] text-[#fff] text-center cursor-no-drop">
                              Resend OTP in {countdown} sec
                            </p>
                          ) : (
                            <p
                              className="w-[100%] font-medium text-[#fff] text-center text-[16px] cursor-pointer"
                              onClick={handleResendOTP}
                            >
                              Resend OTP?
                            </p>
                          )}
                        </div>
                      </div>
                      {/* 4  */}
                      <div className="flex gap-6">
                        <button
                          className="border-none rounded-md bg-purple-600 text-white cursor-pointer p-2 md:py-2 md:px-4 text-base md:text-lg transition duration-300 ease-in-out mb-3 md:mb-4 hover:bg-purple-700 focus:outline-none"
                          onClick={verifyOtphandler}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start">
                      <div>
                        <Image
                          src={gurucoolLogo}
                          width={150}
                          height={100}
                          alt="Gurucool Logo"
                          className="md:hidden"
                        />
                      </div>
                      <div className="text-[16px] font-medium text-[#fff] pb-[10px] tracking-[-0.399792px] leading-[27px] md:text-[28px] md:tracking-[-0.611207px] md:leading-[42px]">
                        Welcome to Gurucool
                      </div>
                      <div>
                        <h2 className="text-[#fff] font-semibold text-[20px] tracking-[-0.837063px] md:text-[56px] md:tracking-[-1.27971px]">
                          Login
                        </h2>
                      </div>
                      <div className="text-[#fff] font-medium text-[12px] leading-[21px] tracking-[-0.206143px] md:text-[20px] md:leading-[32px] md:tracking-[-0.315153px]">
                        Enter Mobile Number
                      </div>
                      <form className="w-[100%] relative pb-[12px]">
                        <div className="text-[14px] text-[red] md:text-[16px]">
                          {errorMsg}
                        </div>
                        <div>
                          <div className="flex flex-col w-[100%]">
                            <PhoneInput
                              placeholder="Enter 10 digit phone number"
                              value={value}
                              onChange={setValue}
                              defaultCountry="IN"
                            />
                          </div>
                        </div>

                        <div className="text-[10px] p-2 text-center mt-1 text-white md:text-[12px]">
                          We will send you a one-time verification code through
                          SMS
                        </div>
                        <div className="flex gap-6 pt-6 w-[100%]">
                          <button
                            className="flex items-center justify-center h-10 w-full bg-green-600 rounded-md text-white cursor-pointer transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none"
                            // onClick={handleSendotp}
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault(); // Add this line to prevent form submission
                              handleSendotp();
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault(); // Add this line to prevent form submission
                                handleResendOTP();
                              }
                            }}
                          >
                            Get OTP
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* LoginBanner  */}
            <div
              id="login-banner"
              className="w-[100%] h-[100%] hidden md:block md:w-[50%] md:h-[100%] relative"
              // style={{ border: "1px solid black" }}
            >
              <Image
                src={loginBanner1}
                className="w-[100%] h-[100%]"
                alt="Login Banner"
              />
              {/* <div className="relative">
                <Image
                    src={loginBanner1}
                    fill
                    alt="Login Banner"
                  />
                </div> */}
              {/* <div className="w-[600px] h-[500px]"></div> */}
              {/* <OwlCarousel {...options} className="owl-theme">
                  

                  <Image
                    src={loginBanner2}
                    className="w-full h-full object-cover rounded-8"
                    alt="Login Banner"
                  />

                  <Image
                    src={loginBanner3}
                    className="w-full h-full object-cover rounded-8"
                    alt="Login Banner"
                  />
                </OwlCarousel> */}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
      <Toaster />
    </div>
  );
}
