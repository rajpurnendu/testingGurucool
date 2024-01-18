"use client";
import Image from "next/image";
import Logo from "../../../../public/assets/footericons/New Logo 1.svg";
import Arrowdropdown from "../../../../public/assets/footericons/Arrowdropdown.svg";
import { clsx } from "clsx";
import razorpay from "../../../../public/assets/footericons/Group 51457.svg";
import paytm from "../../../../public/assets/footericons/Group 51458.svg";
import stripe from "../../../../public/assets/footericons/Group 51459.svg";
import youtube from "../../../../public/assets/footericons/Youtube.svg";
import instagram from "../../../../public/assets/footericons/Instagram.svg";
import facebook from "../../../../public/assets/footericons/Facebook.svg";
import Whatsapp from "../../../../public/assets/footericons/Whatsapp.svg";
import { useState } from "react";
import Link from "next/link";

const FooterMobile = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="main-tool-bar h-auto w-[100%] bg-[#965efb] m-auto hidden justify-center items-center md:hidden">
      <div className="h-[90%] w-[85%]">
        <Image src={Logo} alt="Gurucool Logo" className="m-auto mt-[15px]" />
        <p className="text-[white] text-center">
          GuruCool.life connects users with specialized astrologers, providing
          personalized guidance in astrological practices for a better life.
        </p>
        <h6 className="mb-[10px] text-[14px] font-semibold text-white text-center">
          Company / Support{" "}
          <Image
            src={Arrowdropdown}
            alt="Arrow Drop Down Icon"
            height={32}
            width={32}
            className={clsx(
              "cursor-pointer inline transition-all duration-200 ease-in-out",
              { "transform rotate-[-90deg]": !expand }
            )}
            onClick={() => {
              setExpand(!expand);
            }}
          />
        </h6>
        {expand ? (
          <>
            <div className="w-[100%] flex justify-between text-white mb-[10px]">
              <div>
                <h5 className="text-[16px] font-semibold m-[7px] mb-3">
                  Company
                </h5>
                <div>
                  <p className="text-[14px] font-normal m-[7px] p-0">Home</p>
                  <Link href="/privacy">
                    <p className="text-[14px] font-normal m-[7px] p-0">
                      Privacy Policy
                    </p>
                  </Link>
                  <Link href="/termandconditions">
                    <p className="text-[14px] font-normal m-[7px] p-0">
                      Terms and Conditions
                    </p>
                  </Link>
                </div>
              </div>
              <div>
                <h5 className="text-[16px] font-semibold m-[7px] mb-3">
                  Support
                </h5>
                <div>
                  <Link href="/contactUs">
                    <p className="text-[14px] font-normal m-[7px] p-0">
                      Contact Us
                    </p>
                  </Link>
                  <Link href="/refund-policy">
                    <p className="text-[14px] font-normal m-[7px] p-0">
                      Refund Policy
                    </p>
                  </Link>
                  <Link href="/desclaimer">
                    <p className="text-[14px] font-normal m-[7px] p-0">
                      Disclaimer
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div>
          <h6 className="text-[14px] font-semibold text-white text-center">
            Connect with Us
          </h6>
          <div className="flex justify-center mt-[-10px]">
            <Link href="https://www.youtube.com/@GuruCool-life" target="_blank">
              <Image
                src={youtube}
                alt="Youtube Logo"
                height={40}
                width={40}
                className="bg-white p-[7px] m-[15px] rounded-[100%]"
              />
            </Link>

            <Link
              href="https://www.instagram.com/gurucool_life/"
              target="_blank"
            >
              <Image
                src={instagram}
                alt="Instagram Logo"
                height={40}
                width={40}
                className="bg-white p-[7px] m-[15px] rounded-[100%]"
              />
            </Link>
            <Link
              href="https://www.facebook.com/GuruCool.life/"
              target="_blank"
            >
              <Image
                src={facebook}
                alt="Instagram Logo"
                height={40}
                width={40}
                className="bg-white p-[7px] m-[15px] rounded-[100%]"
              />
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VaDvTMr002TFloVt030J"
              target="_blank"
            >
              <Image
                src={Whatsapp}
                alt="Instagram Logo"
                height={40}
                width={40}
                className="bg-white p-[7px] m-[15px] rounded-[100%]"
              />
            </Link>
          </div>
        </div>
        <div>
          <h6 className="text-[14px] font-semibold text-white text-center">
            Trusted & Seals
          </h6>
          <div className="flex justify-center mt-[-5.5px]">
            <Image
              src={razorpay}
              alt="Razorpay Logo"
              height={37}
              width={96}
              style={{ width: "auto", height: "auto" }}
              className="m-[5.5px]"
            />
            <Image
              src={paytm}
              alt="Paytm Logo"
              height={37}
              width={96}
              style={{ width: "auto", height: "auto" }}
              className="m-[5.5px]"
            />
            <Image
              src={stripe}
              alt="Stripe Logo"
              height={37}
              width={96}
              style={{ width: "auto", height: "auto" }}
              className="m-[5.5px]"
            />
          </div>
        </div>
        <p className="mt-[80px] text-[10px] font-normal text-center text-white mb-5">
          © 2023 GuruCool.life. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
