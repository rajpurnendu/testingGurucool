"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import threedot from "../../../public/images/wallet/more.svg";
import walletIcon from "../.../../../../public/images/wallet/solar-wallet-outline.svg";
import Iconapplycoupon from "../../../public/images/wallet/discount-solid-svgrepo-com-2.svg";
import { getAllWalletPackages, getUserprofile } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";

const Walletpackages = ({
  loginToken,
  coupon,
}: {
  loginToken: string | undefined;
  coupon: string | undefined;
}) => {
  console.log("====================================");
  console.log(coupon);
  console.log("====================================");
  const [walletBal, setWalletbal] = useState<number>(0);

  const [packages, setPackages] = useState<any>([]);

  //Set Wallet Balance
  useEffect(() => {
    if (loginToken) {
      const getUserDetails = async () => {
        const userDetails = await getUserprofile(loginToken);
        setWalletbal(userDetails.wallet_balance);
      };
      getUserDetails();
    }
  }, [loginToken]);

  // Get All Wallet Packages
  useEffect(() => {
    if (loginToken) {
      const getAllPackages = async () => {
        const allPackages = await getAllWalletPackages(loginToken, coupon);
        console.log("====================================");
        console.log(allPackages);
        console.log("====================================");
        setPackages(allPackages?.package1);
      };
      getAllPackages();
    }
  }, [loginToken, coupon]);

  console.log(packages);

  return (
    <div
      className="max-w-6xl mx-auto px-4 md:px-0 box-border"
      style={{ marginTop: "80px", marginBottom: "50px" }}
    >
      <div className=" md:w-[80%] md:m-auto">
        {/* Wallet Ballance  */}
        <div className="w-[95%] h-[12vh] m-auto bg-[#965efbb2] rounded-3xl md:w-[597px] md:h-[176px] flex justify-between">
          {/* 1  */}
          <div className="p-4 flex flex-col justify-between h-[100%] w-[50%] md:w-[70%] md:justify-evenly md:pl-8">
            <p className="w-[100%] text-white text-[14px] font-medium md:text-[34px]">
              Available Balance
            </p>
            <p className="w-[100%] text-white text-[22px] font-semibold md:text-[34px]">
              ₹ {walletBal}
            </p>
          </div>
          {/* 2 */}
          <div className="px-4 flex flex-col justify-center items-end h-[100%] w-[50%]">
            <Image
              src={threedot}
              height={40}
              width={40}
              alt="Threedoticon"
              className="md:w-[48px] md:h-[48px]"
            />
            <Image
              src={walletIcon}
              height={40}
              width={40}
              alt="WalletIcon"
              className="md:w-[78px] md:h-[78px]"
            />
          </div>
        </div>
        {/* Note  */}
        <p className="w-[95%] m-auto text-center text-[12px] font-medium text-gray-500 mt-4 mb-8 md:text-[20px] md:font-normal">
          <strong>NOTE:</strong>Minimum wallet balance 5 minute required to
          start chat please recharge your wallet
        </p>
        {/* All Coupons Section  */}
        <div
          className="w-full h-[50px] border m-auto py-2 px-3 rounded-lg border-[#965efbb2] flex justify-between items-center mb-4 md:h-[104px] md:px-[23.62px] md:py-[15.75px] md:border-[1.5px] md:shadow-[0px_0px_7.873px_0px_rgba(0,0,0,0.3)] md:border-white md:rounded-2xl"
          style={{ marginBottom: "20px" }}
        >
          <div className="flex items-center gap-[16px] md:gap-[39px]">
            <Image
              src={Iconapplycoupon}
              height={30}
              width={30}
              alt="See All Coupon"
              className=" md:h-[59px] md:w-[59px]"
            />
            <p className="text-[14px] font-medium md:text-[22px] md:font-semibold">
              Apply Coupons
            </p>
          </div>
          <Link href={`/wallet/coupons`}>
            <button className="border-[#965efbb2] py-[6px] px-2 flex justify-center items-center border-[0.5px] rounded text-[#965efbb2] text-[12px] font-normal md:py-2 md:px-4 md:text-[20px] md:font-semibold md:text-[#965EFB] md:border md:rounded-[8px]">
              See All
            </button>
          </Link>
        </div>
        {/* One Time Offer  */}
        <div className="w-[95%] m-auto">
          <h4 className="text-[18px] font-semibold mb-2 md:text-center md:mb-3">
            {packages?.[0]?.[0]}
          </h4>
          <div
            className="w-[100%] h-[110px] rounded-xl flex items-center justify-evenly md:h-[209px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(150, 94, 251, 0.05) 0%, rgba(150, 94, 251, 0.02) 100%)",
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)",
            }}
          >
            {packages[0]?.slice(1).map((packagew: any, index: number) => (
              <Link
                href={
                  packagew.active
                    ? coupon
                      ? `/wallet/paymentdetails?pmt=${packagew?.amount}&coupon=${coupon}`
                      : `/wallet/paymentdetails?pmt=${packagew?.amount}`
                    : ""
                }
                key={index}
                className={!packagew?.active ? "pointer-events-none" : ""}
                aria-disabled={!packagew?.active}
                tabIndex={!packagew?.active ? -1 : undefined}
              >
                <div
                  key={index}
                  className={clsx(
                    "w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg md:w-[179px] md:h-[171px]",
                    {
                      "bg-[#965efbb2]": packagew?.active && packagew?.highlight,
                      "bg-white": packagew?.active && !packagew?.highlight,
                      "bg-[#BFCDDB]": !packagew?.active,
                    }
                  )}
                  style={{
                    boxShadow:
                      "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
                  }}
                >
                  <p
                    className={clsx("text-[14px] md:text-[18px]", {
                      "text-white": packagew?.highlight,
                    })}
                  >
                    {packagew?.currency}
                    {packagew?.amount}
                  </p>
                  <p
                    className={clsx("text-[14px] md:text-[18px]", {
                      "bg-white p-1 rounded": packagew?.highlight,
                    })}
                  >
                    {packagew?.highlight}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Regular Offers  */}
        <div className="w-[95%] m-auto mt-6">
          <h4 className="text-[18px] font-semibold mb-2">
            {packages?.[1]?.[0]}
          </h4>
          <div
            className="w-[100%] h-[220px] rounded-xl flex items-center justify-evenly flex-wrap md:h-auto md:gap-[0.5rem] md:py-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(150, 94, 251, 0.05) 0%, rgba(150, 94, 251, 0.02) 100%)",
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)",
            }}
          >
            {packages[1]?.slice(1).map((packagew: any, index: number) => (
              <Link
                href={
                  packagew.active
                    ? coupon
                      ? `/wallet/paymentdetails?pmt=${packagew?.amount}&coupon=${coupon}`
                      : `/wallet/paymentdetails?pmt=${packagew?.amount}`
                    : ""
                }
                key={index}
                className={!packagew?.active ? "pointer-events-none" : ""}
                aria-disabled={!packagew?.active}
                tabIndex={!packagew?.active ? -1 : undefined}
              >
                <div
                  key={index}
                  className={clsx(
                    "w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg md:w-[179px] md:h-[171px]",
                    {
                      "bg-[#965efbb2]": packagew?.active && packagew?.highlight,
                      "bg-white": packagew?.active && !packagew?.highlight,
                      "bg-[#BFCDDB]": !packagew?.active,
                    }
                  )}
                  style={{
                    boxShadow:
                      "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
                  }}
                >
                  <p
                    className={clsx("text-[14px] md:text-[18px]", {
                      "text-white": packagew?.highlight,
                    })}
                  >
                    {packagew?.currency}
                    {packagew?.amount}
                  </p>
                  <p
                    className={clsx("text-[14px] md:text-[18px]", {
                      "bg-white p-1 rounded": packagew?.highlight,
                    })}
                  >
                    {packagew?.highlight}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walletpackages;

//One Time Offer
{
  /* <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ X</p>
            <p className="text-[14px]">Get Y</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-[#965efbb2]"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px] text-white">₹ 200</p>
            <p className="text-[14px] bg-white p-1 rounded">Get 230</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 800</p>
            <p className="text-[14px]">Get 200</p>
          </div> */
}

// Regular Offer
{
  /* <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white md:w-[179px] md:h-[171px]"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 100</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-[#965efbb2]"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px] text-white">₹ 500</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 100</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 100</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 100</p>
          </div>
          <div
            className="w-[100px] h-[91px] p-3 flex flex-col justify-center items-center gap-[3px] border-[1.25px] border-solid border-[#965efbb2] rounded-lg bg-white"
            style={{
              boxShadow:
                "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 3px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <p className="text-[14px]">₹ 100</p>
          </div> */
}
