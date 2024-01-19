"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import couponIcon from "../../../public/images/wallet/couponicon.svg";
import Image from "next/image";
import Discounticon from "../../../public/images/wallet/Frame 427319095.svg";
import Cashbackicon from "../../../public/images/wallet/Cashbackcoupon.svg";
import Discounticonexpired from "../../../public/images/wallet/Discountexpiredicon.svg";
import Cashbackiconexpired from "../../../public/images/wallet/Cashbackexpiredicon.svg";
import background from "../../../public/images/wallet/rectangle-34624880.svg";
import backgroundExpired from "../../../public/images/wallet/Couponbgexpiredicon.svg";
import Iconapplycoupon from "../../../public/images/wallet/discount-solid-svgrepo-com-2.svg";
import Iconapplycouponexpired from "../../../public/images/wallet/dicounticonforexpired.svg";
import {
  convertToIstDateTime,
  getAllCoupons,
  getAllExpiredCoupons,
} from "@/lib/data";
import Link from "next/link";

const Coupons = ({
  forAmount,
  loginToken,
}: {
  forAmount: string | undefined;
  loginToken: string | undefined;
}) => {
  const [selectedtab, setSelectedtab] = useState("Available");
  const [data, setData] = useState<any[]>([]);
  const [expiredCoupon, setExpiredcoupon] = useState<any[]>([]);
  // console.log("====================================");
  // console.log(loginToken, forAmount);
  // console.log("====================================");

  useEffect(() => {
    if (loginToken) {
      const fetchAllCoupons = async () => {
        const data = await getAllCoupons(loginToken, forAmount);
        setData(data?.data?.coupons);
      };
      fetchAllCoupons();
    }
  }, [loginToken, forAmount]);

  useEffect(() => {
    if (loginToken) {
      const fetchAllExpiresCoupons = async () => {
        const data = await getAllExpiredCoupons(loginToken);
        // console.log("====================================");
        // console.log(data?.data?.response?.docs);
        // console.log("====================================");
        // setData(data?.data?.coupons);
        setExpiredcoupon(
          data?.data?.response?.docs ? data?.data?.response?.docs : []
        );
      };
      fetchAllExpiresCoupons();
    }
  }, [loginToken]);

  // console.log("====================================");
  // console.log(data);
  // console.log("====================================");
  return (
    <div
      className="max-w-6xl mx-auto px-4 md:px-0 box-border"
      style={{ marginTop: "80px", marginBottom: "50px" }}
    >
      <div className="md:w-[614px] m-auto">
        {/* Tab Section  */}
        <div className="flex justify-between w-[90%] m-auto">
          <button
            className={clsx("text-[16px] font-semibold text-[#707070]", {
              "border-b-[6px] border-[#965EFB] pb-1":
                selectedtab === "Available",
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
          <h5 className="text-[16px] font-semibold mb-5 md:text-[26px]">
            Have a Code?
          </h5>
          <div
            className="w-full h-[55px] p-2 flex justify-between items-center rounded-lg bg-white md:h-[98px]"
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
                className="mr-2 md:w-[59px] md:h-[59px]"
                alt="Coupon Icon"
              />
              <input
                type="text"
                className="w-[75%] border px-2 py-2 rounded-md outline-none focus:ring-1 md:px-4 md:py-2 md:w-[318px]"
                placeholder="Enter Your Coupon Code"
              />
            </div>
            <button className="w-[71px] py-[6px] px-4 bg-[#26C884] rounded text-white md:w-[139px] md:h-[51px] md:rounded-lg">
              Apply
            </button>
          </div>
        </div>
        {/* Coupons Section  */}
        <div className="mt-[20px] w-[95%] m-auto flex flex-col gap-2 md:gap-6">
          {/* 1  */}
          {selectedtab === "Available" ? (
            <>
              {data?.map((coupon: any, i: number) => (
                <div key={i} className="flex h-[100px] md:h-[168px]">
                  <div className="h-[100%] bg-cover w-[15%]">
                    <Image
                      src={
                        coupon?.couponType === "Cashback"
                          ? Cashbackicon
                          : Discounticon
                      }
                      height={50}
                      width={50}
                      alt="Discount Icon"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div
                    className="h-[100%] bg-no-repeat bg-cover w-[85%] border-r rounded-2xl md:border-r-2 md:rounded-[27px]"
                    style={{
                      backgroundImage: `url(${background.src})`,
                    }}
                  >
                    <div className="h-[100%] w-[100%] flex flex-col justify-between px-5 py-2 md:px-8 md:py-4">
                      <p className=" text-[14px] font-semibold md:text-[26px]">
                        {coupon?.offerText1}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[16px] font-semibold text-[#26C884] flex items-center md:text-[26px]">
                          {coupon?.offerText2}
                          <Image
                            src={Iconapplycoupon}
                            height={22}
                            width={22}
                            alt="Discount Icon"
                            className="ml-1 md:h-[45px] md:w-[45px]"
                          />
                        </p>
                        <Link
                          href={
                            forAmount
                              ? `/wallet/paymentdetails?pmt=${forAmount}&coupon=${coupon?.couponCode}`
                              : `/wallet/pricelist?coupon=${coupon?.couponCode}`
                          }
                        >
                          <button className="h-[30px] w-[65px] text-white bg-[#26C884] py-[11px] px-[13.5px] flex justify-center items-center rounded md:h-[51px] md:w-[139px] md:rounded-lg">
                            Apply
                          </button>
                        </Link>
                      </div>
                      <p className="text-[12px] font-normal md:text-[20px]">
                        Valid up to {convertToIstDateTime(coupon?.expireAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {expiredCoupon?.map((coupon: any, i: number) => (
                <div key={i} className="flex h-[100px] md:h-[168px]">
                  <div className="h-[100%] bg-cover w-[15%]">
                    <Image
                      src={
                        coupon?.couponType === "Cashback"
                          ? Cashbackiconexpired
                          : Discounticonexpired
                        // Discounticonexpired
                        //Cashbackiconexpired
                      }
                      height={50}
                      width={50}
                      alt="Discount Icon"
                      className="h-[100%] w-[100%]"
                    />
                  </div>
                  <div
                    className="h-[100%] bg-no-repeat bg-cover w-[85%] border-r rounded-2xl md:border-r-2 md:rounded-[27px]"
                    style={{
                      backgroundImage: `url(${backgroundExpired.src})`,
                    }}
                  >
                    <div className="h-[100%] w-[100%] flex flex-col justify-between px-5 py-2 md:px-8 md:py-4">
                      <p className=" text-[14px] font-semibold md:text-[26px] text-[#707070]">
                        {coupon?.offerText1}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[16px] font-semibold text-[#26C884] flex items-center md:text-[26px]">
                          {coupon?.offerText2}
                          <Image
                            src={Iconapplycouponexpired}
                            height={22}
                            width={22}
                            alt="Discount Icon"
                            className="ml-1 md:h-[45px] md:w-[45px]"
                          />
                        </p>

                        <button className="h-[30px] w-[65px] text-[#707070] bg-[#D9D9D9] py-[11px] px-[13.5px] flex justify-center items-center rounded md:h-[51px] md:w-[139px] md:rounded-lg border-[#707070] border">
                          Apply
                        </button>
                      </div>
                      <p className="text-[12px] font-normal md:text-[20px] text-[#707070]">
                        Valid up to {convertToIstDateTime(coupon?.expireAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coupons;

{
  /* 2  */
}
{
  /* <div className="flex">
          <div className="h-[100px] bg-cover relative w-[15%]">
            <Image
              src={Discounticon}
              height={50}
              width={50}
              alt="Discount Icon"
              className="h-[95px] w-[100%]"
            />
          </div>
          <div className="h-[100px] bg-cover relative w-[85%]">
            <Image
              src={background}
              alt="Background Image"
              width={300}
              height={100}
              className="h-[100px] w-[100%]"
              objectFit="cover"
            />
            <div className="absolute top-2 left-5 h-[85%] w-[89%] flex flex-col justify-between">
              <p className=" text-[14px] font-semibold">For ₹200 and above</p>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#26C884] flex items-center">
                  60% Off{" "}
                  <Image
                    src={Iconapplycoupon}
                    height={22}
                    width={22}
                    alt="Discount Icon"
                    className="ml-1"
                  />
                </p>
                <button className="h-[30px] w-[65px] text-white bg-[#26C884] py-[11px] px-[13.5px] flex justify-center items-center rounded">
                  Apply
                </button>
              </div>
              <p className="text-[12px] font-normal">
                Valid up to 12th dec 2024
              </p>
            </div>
          </div>
        </div> */
}
{
  /* 3  */
}
{
  /* <div className="flex">
          <div className="h-[100px] bg-cover relative w-[15%]">
            <Image
              src={Discounticon}
              height={50}
              width={50}
              alt="Discount Icon"
              className="h-[95px] w-[100%]"
            />
          </div>
          <div className="h-[100px] bg-cover relative w-[85%]">
            <Image
              src={background}
              alt="Background Image"
              width={300}
              height={100}
              className="h-[100px] w-[100%]"
              objectFit="cover"
            />
            <div className="absolute top-2 left-5 h-[85%] w-[89%] flex flex-col justify-between">
              <p className=" text-[14px] font-semibold">For ₹200 and above</p>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#26C884] flex items-center">
                  60% Off{" "}
                  <Image
                    src={Iconapplycoupon}
                    height={22}
                    width={22}
                    alt="Discount Icon"
                    className="ml-1"
                  />
                </p>
                <button className="h-[30px] w-[65px] text-white bg-[#26C884] py-[11px] px-[13.5px] flex justify-center items-center rounded">
                  Apply
                </button>
              </div>
              <p className="text-[12px] font-normal">
                Valid up to 12th dec 2024
              </p>
            </div>
          </div>
        </div> */
}
{
  /* 4  */
}
{
  /* <div className="flex">
          <div className="h-[100px] bg-cover relative w-[15%]">
            <Image
              src={Discounticon}
              height={50}
              width={50}
              alt="Discount Icon"
              className="h-[95px] w-[100%]"
            />
          </div>
          <div className="h-[100px] bg-cover relative w-[85%]">
            <Image
              src={background}
              alt="Background Image"
              width={300}
              height={100}
              className="h-[100px] w-[100%]"
              objectFit="cover"
            />
            <div className="absolute top-2 left-5 h-[85%] w-[89%] flex flex-col justify-between">
              <p className=" text-[14px] font-semibold">For ₹200 and above</p>
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold text-[#26C884] flex items-center">
                  60% Off{" "}
                  <Image
                    src={Iconapplycoupon}
                    height={22}
                    width={22}
                    alt="Discount Icon"
                    className="ml-1"
                  />
                </p>
                <button className="h-[30px] w-[65px] text-white bg-[#26C884] py-[11px] px-[13.5px] flex justify-center items-center rounded">
                  Apply
                </button>
              </div>
              <p className="text-[12px] font-normal">
                Valid up to 12th dec 2024
              </p>
            </div>
          </div>
        </div> */
}
