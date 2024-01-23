"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./consult.css";
// import "" from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import img1 from "../../../public/images/banner/First Free Banner.png";
import img2 from "../../../public/images/banner/Web Consult Page Banner.svg";

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
const ConsultationBanner = () => {
  return (
    <OwlCarousel
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=com.gurucool&pcampaignid=web_share"
        id="1"
        className="w-full h-[300px] flex items-center justify-center"
      >
        <Image src={img1} alt="offer" className="w-full h-full" />
      </a>
      <div
        id="2"
        className="w-full h-[300px] flex items-center overflow-hidden justify-center"
      >
        <Image src={img2} alt="oneOffer" className="w-fit h-full" />
      </div>
    </OwlCarousel>
  );
};

export default ConsultationBanner;
