"use client";
import clsx from "clsx";
import React, { useState } from "react";
import couponIcon from "../../../public/images/wallet/couponicon.svg";
import Image from "next/image";
import Discounticon from "../../../public/images/wallet/Frame 427319095.svg";
import background from "../../../public/images/wallet/rectangle-34624880.svg";

const Coupons = () => {
  const [selectedtab, setSelectedtab] = useState("Available");
  return (
    <div
      className="max-w-6xl mx-auto px-4 md:px-0 box-border"
      style={{ marginTop: "80px", marginBottom: "50px" }}
    >
      {/* Tab Section  */}
      <div className="flex justify-between w-[90%] m-auto">
        <button
          className={clsx("text-[16px] font-semibold text-[#707070]", {
            "border-b-[6px] border-[#965EFB] pb-1": selectedtab === "Available",
          })}
          onClick={() => {
            setSelectedtab("Available");
          }}
        >
          Available
        </button>
        <div className=" border-r-[2px]" />
        <button
          className={clsx("text-[16px] font-semibold text-[#707070]", {
            "border-b-[6px] border-[#965EFB] pb-1":
              selectedtab === "Used/Expire",
          })}
          onClick={() => {
            setSelectedtab("Used/Expire");
          }}
        >
          Used/Expire
        </button>
      </div>

      {/* Coupon Code Input Section  */}
      <div className="mt-[20px] w-[95%] m-auto">
        <h5 className="text-[16px] font-semibold mb-5">Have a Code?</h5>
        <div
          className="w-full h-[55px] p-2 flex justify-between items-center rounded-lg bg-white"
          style={{
            boxShadow:
              "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
          }}
        >
          <div className="flex">
            <Image
              src={couponIcon}
              width={30}
              height={30}
              className="mr-2"
              alt="Coupon Icon"
            />
            <input
              type="text"
              className="w-[75%] border px-2 py-2 rounded-md outline-none focus:ring-1"
              placeholder="Enter Your Coupon Code"
            />
          </div>
          <button className="w-[71px] py-[6px] px-4 bg-[#26C884] rounded text-white">
            Apply
          </button>
        </div>
      </div>
      {/* Coupons Section  */}
      <div className="mt-[20px] w-[95%] m-auto">
        {/* 1  */}
        <div className="flex border border-red-500">
          <div className="h-[100px] bg-cover relative border w-[15%]">
            <Image
              src={Discounticon}
              height={50}
              width={50}
              alt="Discount Icon"
              className="h-[95px] w-[100%]"
            />
          </div>
          <div className="h-[100px] bg-cover relative border w-[85%]">
            <Image
              src={background}
              alt="Background Image"
              width={300}
              height={100}
              className="h-[100px] w-[100%]"
              objectFit="cover"
            />
            <div className="absolute top-2 left-5 flex flex-col justify-between">
              <p className=" text-[14px] font-semibold">For ₹200 and above</p>
              <div>hh</div>
              <p className="text-[12px] font-normal">
                Valid up to 12th dec 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
