"use client";
import "./style.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TrendingBlogCard from "../blogs/TrendingBlogCard";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const TrendingGod = ({ data1 }: any) => {
  return (
    <OwlCarousel
      loop
      margin={30}
      center
      dotsEach
      nav={true}
      navClass={["owl-prev", "owl-next"]}
      navText={["<--", "-->"]}
      className="owl-theme w-full h-[40%] flex items-start justify-start"
      items={2}
      responsive={{
        0: {
          items: 1.1,
          nav: false,
          center: false,
          margin: 8,
        },
        600: {
          items: 1,
          nav: false,
          center: true,
        },
        1000: {
          nav: true,
          items: 2,
          center: false,
        },
      }}
    >
      {data1
        // .splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
        .map((blog: any, index: number) => (
          <TrendingBlogCard id={index} key={index} blog={blog} />
        ))}
    </OwlCarousel>
  );
};

export default TrendingGod;
