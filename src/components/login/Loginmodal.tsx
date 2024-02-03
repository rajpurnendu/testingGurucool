"use client";
import React, { useState } from "react";
import Mobileicon from "../../../public/images/login/circum-mobile.svg";
import Chatbanner from "../../../public/images/login/first-chat-2.svg";
import banner1 from "../../../public/images/login/banner1.svg";
import banner2 from "../../../public/images/login/banner2.svg";
import banner3 from "../../../public/images/login/banner3.svg";
import banner4 from "../../../public/images/login/banner4.svg";
import banner5 from "../../../public/images/login/banner5.svg";
import banner6 from "../../../public/images/login/banner6.svg";
import Image from "next/image";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "./Loginmodal.css";
import Carousel from "../Crousels/Crousel";
// import dynamic from "next/dynamic";

// declare global {
//   interface Window {
//     $: JQueryStatic;
//     jQuery: JQueryStatic;
//   }
// }
// var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

export default function Loginmodal() {
  const [showModal, setShowModal] = React.useState(true);
  const [value, setValue] = useState<any | undefined>();
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open small modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}

                <div className="w-[100%] m-auto pt-0">
                  {/* <Carousel
                    slides={[
                      [banner1, banner2],
                      [banner3, banner4],
                      [banner5, banner6],
                      [banner5, banner6],
                      [banner5, banner6],
                      [banner5, banner6],
                      [banner5, banner6],
                    ]}
                  /> */}
                </div>
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <OwlCarousel
                    // margin={50}
                    loop
                    autoplay
                    autoplayHoverPause
                    autoplayTimeout={3000}
                    dots={true}
                    className="owl-theme w-full h-[10%] flex items-start justify-start"
                    items={1}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      1024: {
                        items: 2,
                      },
                    }}
                  >
                    <div
                      id="1"
                      className="w-full lg:h-[300px] flex items-center overflow-hidden justify-center"
                    >
                      <Image
                        src={banner1}
                        alt="oneOffer"
                        className="w-fit h-full"
                      />
                    </div>
                    <div
                      id="2"
                      className="w-full lg:h-[300px] flex items-center overflow-hidden justify-center"
                    >
                      <Image
                        src={banner2}
                        alt="oneOffer"
                        className="w-fit h-full"
                      />
                    </div>

                  </OwlCarousel>
                </div> */}
                {/*body*/}
                <div className="relative px-4 py-2 flex-auto">
                  {/* Heading  */}
                  <h3 className="text-center text-[14px] font-semibold flex justify-center items-center">
                    <span>Log in with phone number</span>
                    <Image
                      src={Mobileicon}
                      height={16}
                      width={16}
                      alt="Mobile Icon"
                    />
                  </h3>

                  {/* Mobile Number Input Section  */}
                  <div className="mt-[23px]">
                    <p className="text-[12px] font-normal text-[#707070] text-center mb-3">
                      Otp will be sent on your mobile number
                    </p>
                    <PhoneInput
                      placeholder="Enter 10 digit phone number"
                      value={value}
                      onChange={setValue}
                      defaultCountry="IN"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="w-[72.5px] h-[29px] p-[5px] flex justify-center items-center rounded-[5px] bg-[#965EFBB2] text-white text-[14px] mt-3">
                      GET OTP
                    </button>
                  </div>
                  <Image
                    src={Chatbanner}
                    alt="Chat Banner"
                    height={66}
                    width={295}
                    className="mt-5 mb-3"
                  />

                  {/* <p className="my-0 text-blueGray-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    omnis vel minima? Cum animi repudiandae quam laudantium ea
                    similique fugiat reiciendis inventore dolorum magni? Ipsa
                    nihil reiciendis natus asperiores repudiandae quisquam
                    ducimus vitae architecto ratione. Repudiandae voluptatem
                    veritatis exercitationem distinctio eaque pariatur
                    laudantium incidunt hic ut dicta repellendus maxime rerum
                    quo inventore libero, quis maiores asperiores sint.
                  </p> */}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
