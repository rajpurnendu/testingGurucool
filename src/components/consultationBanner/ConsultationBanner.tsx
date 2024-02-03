"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./consult.css";
// import "" from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import img1 from "../../../public/images/banner/First Free Banner.svg";
import img2 from "../../../public/images/banner/Web Consult Page Banner.svg";
import Link from "next/link";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const ConsultationBanner = ({ loginToken }: { loginToken: any }) => {
  return (
    <div className="w-full" id="common-banner">
      <OwlCarousel
        margin={50}
        loop
        autoplay
        autoplayHoverPause
        autoplayTimeout={3000}
        dots={true}
        className="owl-theme w-full h-[40%] flex items-start justify-start"
        items={1}
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.google.com/store/apps/details?id=com.gurucool&pcampaignid=web_share"
          id="1"
          className="w-full lg:h-[300px] flex items-center justify-center"
          onClick={() => {
            if (loginToken) {
              sendGTMEvent({
                event: "buttonClicked",
                value: "Consult_Banner1",
              });
              sendGAEvent({
                event: "buttonClicked",
                value: "Consult_Banner1",
              });
            } else {
              sendGTMEvent({
                event: "buttonClicked",
                value: "Unlogin_ConsultBanner1_Click",
              });
              sendGAEvent({
                event: "buttonClicked",
                value: "Unlogin_ConsultBanner1_Click",
              });
            }
          }}
        >
          <Image src={img1} alt="offer" className="w-fit h-full" />
        </Link>
        <div
          id="2"
          className="w-full lg:h-[300px] flex items-center overflow-hidden justify-center"
          onClick={() => {
            if (loginToken) {
              sendGTMEvent({
                event: "buttonClicked",
                value: "Consult_Banner2",
              });
              sendGAEvent({
                event: "buttonClicked",
                value: "Consult_Banner2",
              });
            } else {
              sendGTMEvent({
                event: "buttonClicked",
                value: "Unlogin_ConsultBanner2_Click",
              });
              sendGAEvent({
                event: "buttonClicked",
                value: "Unlogin_ConsultBanner2_Click",
              });
            }
          }}
        >
          <Image src={img2} alt="oneOffer" className="w-fit h-full" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ConsultationBanner;
