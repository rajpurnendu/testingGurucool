"use client";
import Image from "next/image";
import Link from "next/link";

import offer from "@/../public/assets/banners/offer.webp";
import bannerImg from "../../../public/assets/background.gif";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const Banner = ({
  loginToken,
  rechargerCount,
}: {
  loginToken: any;
  rechargerCount: number;
}) => {
  return (
    <div
      className={`w-full xl:h-[511px] md:h-[242px]  relative overflow-hidden flex justify-center gap-[5.25rem] items-center`}
    >
      <Image
        priority
        className="h-full w-full"
        src={bannerImg}
        alt="astrobanner"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className={`absolute  z-[2] gap-[2px] md:w-full md:mx-auto xl:py-[8px]   xl:w-[72rem] md:gap-4  xl:m-auto flex ${
          !loginToken || rechargerCount === 0
            ? `xl:justify-between`
            : `xl:justify-start`
        } justify-center items-center
        ${
          !loginToken || rechargerCount === 0
            ? `xl:items-end`
            : `xl:items-start`
        }
         `}
      >
        <div className="flex flex-col  xl:gap-[3.19rem] gap-[10px]">
          <div className="flex flex-col gap-0  md:w-full xl:w-auto xl:gap-6">
            <h1 className="m-0 text-white text-base xl:text-[2.5rem] font-[500]">
              Unlock Astrology
            </h1>
            <h2 className="m-0 text-[#26C884] text-base xl:text-[2.5rem] font-[600]">
              Secrets with GuruCool
            </h2>
          </div>
          <p className="text-white md:w-[400px] tracking-tighter  w-[290px] xl:w-[600px] text-[12px] xl:text-[1.125rem] leading-[15px] xl:leading-normal font-normal xl:font-[500] text-justify">
            {`Explore astrology secrets solutions with GuruCool astrologers: Your one-stop destination for personalized love, career, and marriage predictions. Find solutions to life's challenges through tarot cards, numerology, and zodiac insights.`}
          </p>
          <Link
            href="/call-to-astrologers"
            className=" w-fit xl:w-[285px] xl:h-[71px] rounded-lg font-[500] md:text-base text-sm xl:text-[1.25rem] hover:scale-105 transiton duration-500 bg-[#26c884] text-white px-[10px] py-[10px]  xl:px-[1.62rem] xl:py-[0.94rem]  border-black flex items-center justify-center"
            onClick={() => {
              if (loginToken) {
                sendGTMEvent({
                  event: "buttonClicked",
                  value: "Get_Consultation",
                });
                sendGAEvent({
                  event: "buttonClicked",
                  value: "Get_Consultation",
                });
              } else {
                sendGTMEvent({
                  event: "buttonClicked",
                  value: "Get_Consultation_Nologin",
                });
                sendGAEvent({
                  event: "buttonClicked",
                  value: "Get_Consultation_Nologin",
                });
              }
            }}
          >
            <p>Get consultation</p>
          </Link>
        </div>
        {(!loginToken || rechargerCount === 0) && (
          <Link
            href="/wallet/pricelist"
            className="md:flex items-center hover:scale-105 transiton duration-500 ease-out justify-center hidden overflow-hidden xl:w-[430px] w-[200px] h-[200px] xl:h-[441px]"
          >
            <Image src={offer} className="w-full h-full" alt="offer" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
