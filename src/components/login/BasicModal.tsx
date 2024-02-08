"use client";
import clsx from "clsx";
import phone from "../../../public/images/login/phone.png";
import downbanner from "../../../public/images/banner/loginBanner.svg";
import topbanner from "../../../public/images/login/topbanner.png";
import topbanner2 from "../../../public/images/login/topbanner2.png";
import topbanner3 from "../../../public/images/login/topbanner3.png";
import leftbanner2 from "../../../public/images/login/left banner2.png";
import leftbanner3 from "../../../public/images/login/leftbanner3.png";
import leftbanner from "../../../public/images/login/left banner.png";
import icon from "../../../public/images/login/icon.png";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import "./login.css";
import Carousel1 from "../Crousels/Crousel1";
import Image from "next/image";
import "react-phone-number-input/style.css";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput, {
  formatPhoneNumber,
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

  const mobileSlide = [
    {
      src: topbanner,
      alt: "Image 3 for carousel",
    },
    {
      src: topbanner2,
      alt: "Image 3 for carousel",
    },
    {
      src: topbanner3,
      alt: "Image 3 for carousel",
    },
  ];
  const WebSlide = [
    {
      src: leftbanner,
      alt: "Image 3 for carousel",
    },
    {
      src: leftbanner2,
      alt: "Image 3 for carousel",
    },
    {
      src: leftbanner3,
      alt: "Image 3 for carousel",
    },
  ];

  const handleSendotp = async () => {
    if (value && isValidPhoneNumber(value)) {
      toast.promise(
        testAction({
          code: "+91",
          phone: removeLeadingZero(formatPhoneNumber(value)),
          isInternational: false,
        })
          .then((result) => {
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
          success: <b>OTP Sent!!</b>,
          error: <b>Could not send OTP.</b>,
        }
      );
    } else {
      //Not Valid Phone Number
      setErrormsg("Please Enter a Valid Phone Number!");
    }
  };

  const verifyOtphandler = async () => {
    // toast.promise(
    //   verifyOtp({
    //     phone: removeLeadingZero(formatPhoneNumber(value)),
    //     userOTP: otp,
    //   })
    //     .then((result) => {
    //       console.log(result);
    //       if (result?.success) {
    //         //TODO: New User Logic and OLd use Logic here
    //         console.log(result)
    //         if (result.newUser) {
    //           console.log(result)
    //           //TODO: New User Logic
    //           router.push("/registration");
    //           setLogin(false);
    //         } else {
    //           console.log(result)
    //           toast.success("Successfully Login!");
    //           setLogin(false);
    //           router.push("/");
    //         }
    //       } else {
    //         setErrormsg(result?.message);
    //       }
    //     })
    //     .catch((err) => {
    //       // console.log(err);
    //     }),
    //   {
    //     loading: "Verifying...",
    //     success: <b>Verified Succesfully!</b>,
    //     error: <b>Could Not Verified!</b>,
    //   }
    // );
    verifyOtp({
      phone: removeLeadingZero(formatPhoneNumber(value)),
      userOTP: otp,
    })
      .then((result) => {
        console.log(result);
        if (result?.success) {
          //TODO: New User Logic and OLd use Logic here
          // console.log(result)
          if (result.newUser) {
            // console.log(result)
            //TODO: New User Logic
            toast.success(
              result?.message ? result.message : "You're logged in"
            );
            router.push("/registration");
            setLogin(false);
          } else {
            // console.log(result)
            toast.success(
              result?.message ? result.message : "You're logged in"
            );
            setLogin(false);
            router.push("/");
          }
        } else {
          toast.error(result?.message);
          setErrormsg(result?.message);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleOtpChange = (e: any) => {
    setOtp(e);
  };
  useEffect(() => {
    console.log(otp, otp.length);
    if (otp.length === 6) {
      verifyOtphandler();
    }
  }, [otp]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 top-0 w-full h-full backdrop-blur-sm  bg-[rgba(0,0,0,0.7)] ">
      <div className="fixed md:top-0  left-0 w-full h-full bg-[rgba(0, 0, 0, 0.7)] flex items-center justify-center z-[21]">
        <div
          className={clsx(
            "relative bg-white md:rounded-[20px] rounded-[10px]  z-0 shadow-[0_2px_4px_rgba(0,0,0,0.2)]max-h-[600px] w-[330px] md:w-fit flex justify-between",
            {
              "animate__animated animate__zoomIn animate__faster": issOpen,
            },
            {
              "animate__animated animate__zoomOutDown animate__faster":
                !issOpen,
            }
          )}
        >
          <button
            className="flex justify-center items-center md:w-8 md:h-8 w-7 h-7 top-[-33px]  border-[2px] right-2 absolute md:top-3 md:right-3 p-1 border-black md:border-[#707070] rounded-full cursor-pointer z-1 transition-all duration-300 ease-in-out hover:bg-opacity-25 hover:bg-blue-50 focus:outline-none"
            onClick={() => {
              setLogin(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="200"
              className="md:fill-[#707070] fill-black"
              height="200"
              viewBox="0 0 50 50"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          </button>

          <div className="flex flex-col md:rounded-[20px] rounded-[10px] overflow-hidden md:flex-row gap-3 md:gap-0">
            <div
              id="login-banner"
              className="md:flex md:rounded-[20px] rounded-[10px] hidden justify-center items-center w-[350px]"
            >
              <Carousel1
                slides={WebSlide}
                bottom={"bottom-[10px]"}
                dot={true}
                icon={false}
              />
              {/* <Image
                src={leftbanner}
                className="w-full h-full md:rounded-l-[20px] rounded-l-[10px]"
                alt="Login Banner"
              /> */}
            </div>
            <div
              id="login-banner"
              className="md:hidden rounded-t-[10px] overflow-hidden flex justify-start items-start w-full  "
            >
              <div className="w-full overflow-hidden">
                <Carousel1
                  slides={mobileSlide}
                  bottom={"bottom-[10px]"}
                  dot={true}
                  icon={false}
                />
              </div>
            </div>
            {/* <div className="w-full py-[60px] flex flex-col justify-center items-center"> */}
            <div className="flex items-center justify-center md:m-6">
              <div className="flex  mt-0">
                {otpSend ? (
                  <div className="flex flex-col md:gap-6 items-center">
                    <div>
                      <Image
                        src={icon}
                        width={252}
                        height={95}
                        alt="Gurucool Logo"
                        className="w-[252px] md:block hidden h-[95px]"
                      />
                    </div>
                    <div className="flex flex-col md:gap-3 px-[24px] md:pt-[30px] ">
                      <h2 className="text-[16px] font-semibold">Enter OTP</h2>

                      <div className="flex md:gap-[9px] w-max">
                        <div className="flex font-[400] w-full leading-[20px] items-center justify-center gap-[4px] text-[12px] md:text-[18px] tracking-tighter">
                          An OTP has been sent to
                          <span className="font-[500] w-max text-[12px] md:text-[18px]">
                            {value}
                          </span>
                          <span
                            onClick={() => setOtpsend(false)}
                            className="text-[#965EFB] w-max font-[500] cursor-pointer text-[12px] md:text-[18px] leading-[20px]"
                          >
                            Edit Number
                          </span>
                        </div>
                      </div>
                    </div>

                    <form className="w-[100%] mt-3 px-[24px] md:gap-[20px] relative">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col gap-[6px] w-full items-center">
                          <div className="flex w-full items-center">
                            <OTPInput
                              value={otp}
                              // className="border rounded-lg px-2"
                              onChange={(e: any) => handleOtpChange(e)}
                              numInputs={6}
                              renderSeparator={<span></span>}
                              renderInput={(props: any) => (
                                <input
                                  {...props}
                                  inputMode="numeric"
                                  style={{ border: "1px solid #965EFB" }}
                                />
                              )}
                              containerStyle="login-otp-container"
                              inputStyle="login-otp-input"
                            />
                          </div>
                          <div className="flex items-center justify-center leading-[125%]  text-[red] text-[16px] font-[500]">
                            {errorMsg}
                          </div>
                          <div className="w-full text-[16px] font-[500] leading-[125%]  text-[#26C884] ">
                            {otpsendMsg}
                          </div>
                          <div className="flex  flex-col items-end justify-end w-[100%]">
                            <div className="flex justify-start items-start w-full">
                              {isTimerActive ? (
                                <p className="w-[100%] text[#222222] text-[16px] cursor-no-drop">
                                  Resend OTP in {countdown} sec
                                </p>
                              ) : (
                                <p
                                  className="w-[100%] font-medium text-[#222222] 
                                  text-[14px] md:text-[16px] cursor-pointer"
                                  onClick={handleResendOTP}
                                >
                                  Resend OTP?
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="flex my-5 gap-6">
                      <button
                        className=" py-[11px] px-[20px] bg-[#26C884] md:px-[25.5px] md:py-[10.5px] text-[16px] md:text-[20px] font-[600] text-white rounded-[12.09px]"
                        onClick={verifyOtphandler}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[252px] md:block hidden  h-[95px]">
                      <Image
                        src={icon}
                        width={252}
                        height={95}
                        alt="Gurucool Logo"
                        // className="w-[252px] md:block hidden  h-[95px]"
                      />
                    </div>
                    <div className="w-full flex flex-col items-center px-[24px] gap-[10px] md:gap-[20px] md:pt-[30px] md:pb-[24px]">
                      <div className="flex justify-center w-full  gap-2.5 items-start">
                        <p className="md:text-[22px] text-[#22222] text-[14px]  font-semibold  pb-[10px] leading-[125%]">
                          Log in with phone number
                        </p>
                        <Image
                          src={phone}
                          className="md:w-[18px] w-[11.62px] h-[16.56px] md:h-[26px]"
                          alt="phone"
                        />
                      </div>
                      <div>
                        <h2 className="md:font-[600] font-[400] text-neutral-500  leading-[125%] text-[12px] md:text-[16px]">
                          Otp will be sent on your mobile number
                        </h2>
                      </div>
                      <form className="w-[100%] relative pb-[12px]">
                        <div className="text-[14px] text-[red] md:text-[16px]">
                          {errorMsg}
                        </div>
                        {/* <div> */}
                          <div className="flex w-[100%]">
                            <PhoneInput
                              className="border border-[#965EFB] rounded-lg text-xs md:px-2.5 px-2.5 py-[px] md:py-[6px] md:text-[18px] w-full"
                              placeholder="Enter phone number"
                              value={value}
                              onChange={setValue}
                              defaultCountry="IN"
                            />
                          </div>
                        {/* </div> */}

                        <div className="pt-6 flex items-center justify-center">
                          <button
                            className="flex items-center md:text-[20px] text-[14px] md:font-semibold md:px-[25.5px] py-[6.11px] px-[8.7px] font-[500] md:py-[10.5px] justify-center bg-[#965EFB] opacity-70 rounded-[5px] md:rounded-[10px] text-white cursor-pointer"
                            type="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSendotp();
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                handleResendOTP();
                              }
                            }}
                          >
                            GET OTP
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="w-full rounded-lg overflow-hidden">
                      <Image
                        src={downbanner}
                        className="w-full hidden md:block h-[130px] "
                        alt="down"
                      />
                    </div>
                  </div>
                )}
                {/* </div> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
