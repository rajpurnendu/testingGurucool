"use client";
import "./style.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TrendingBogCard from "../blogs/TrendingBogCard";

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
      margin={50}
      dots={false}
      nav
      navClass={["owl-prev", "owl-next"]}
      navText={["<--", "-->"]}
      className="owl-theme w-full h-[40%] flex items-start justify-start"
      items={2}
      responsive={{
        0: {
          items: 1,
          // margin: -10
        },
        1024: {
          items: 2,
        },
      }}
    >
      {data1
        // .splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
        .map((blog: any, index: number) => (
          <TrendingBogCard id={index} key={index} blog={blog} />
        ))}
    </OwlCarousel>
  );
};

export default TrendingGod;
