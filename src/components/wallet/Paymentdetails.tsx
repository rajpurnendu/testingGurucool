"use client";
import React, { useCallback, useEffect, useState } from "react";
import Iconapplycoupon from "../../../public/images/wallet/discount-solid-svgrepo-com-2.svg";
import Removeiocn from "../../../public/images/wallet/clarity-remove-line.svg";
import Cashbackicon from "../../../public/images/wallet/cashback.svg";
import BankIcon from "../../../public/images/wallet/bankIcon.svg";
import UpiIcon from "../../../public/images/wallet/upi-icon-1.svg";
import Walleticon from "../../../public/images/wallet/wallet-1.png";
import AtmcardIcon from "../../../public/images/wallet/atm-card-1.svg";
import Loading from "../../../public/images/wallet/Pulse-1s-200px.svg";
import logo from "../../../public/favicon-32x32.png";
import Image from "next/image";
import {
  convertToIstDateTime,
  getPaymentdetails,
  getUserprofile,
} from "@/lib/data";
import Link from "next/link";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { razorpayCheckoutHandler } from "@/lib/actions";

const Paymentdetailscomponent = ({
  searchParams,
  loginToken,
}: {
  searchParams?: { pmt?: string; coupon?: string };
  loginToken: string | undefined;
}) => {
  const [userDetails, setUserdetails] = useState<any>();
  // console.log(searchParams);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>();
  const [amount, setAmount] = useState<string | undefined>();
  const [coupon, setCoupon] = useState<string | undefined>();
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [Razorpay] = useRazorpay();
  useEffect(() => {
    if (loginToken && amount) {
      const payementData = async () => {
        const data = await getPaymentdetails(loginToken, amount, coupon);
        setData(data?.paymentDetails);
        setLoading(false);
      };
      payementData();
    }
  }, [loginToken, amount, coupon]);
  useEffect(() => {
    if (loginToken) {
      const getUserDetails = async () => {
        const data = await getUserprofile(loginToken);
        // console.log("====================================");
        // console.log(data);
        // console.log("====================================");
        setUserdetails(data?.user);
      };
      getUserDetails();
    }
  }, [loginToken]);

  useEffect(() => {
    setAmount(searchParams?.pmt);
    setCoupon(searchParams?.coupon);
  }, [searchParams]);

  const handleRemoveCoupon = async () => {
    setLoading(true);
    if (loginToken && amount) {
      const data = await getPaymentdetails(loginToken, amount, undefined, true);
      setData(data?.paymentDetails);
      setLoading(false);
    }
  };

  const handleChangePaymentMethod = (e: any) => {
    // console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

  // const handlePayment = async (
  //   loginToken: string,
  //   amount: string | number,
  //   gst: string | number,
  //   totalAmount: string | number,
  //   couponCode: string,
  //   couponType: string
  // ) => {
  //   const data = await razorpayCheckoutHandler(
  //     loginToken,
  //     amount,
  //     gst,
  //     totalAmount,
  //     couponCode,
  //     couponType
  //   );

  //   console.log("====================================");
  //   console.log(data);
  //   console.log("====================================");
  // };

  // const razorpayCheckoutHandler = async (
  //   loginToken: string,
  //   amount: string | number,
  //   gst: string | number,
  //   totalAmount: string | number,
  //   couponCode: string,
  //   couponType: string,
  //   email: string,
  //   phone: string | number,
  //   userName: string
  // ) => {
  //   try {
  //     // Fetch key from the server
  //     const keyResponse = await fetch(
  //       "https://prod.gurucool.life/api/v1/payments/key"
  //     );
  //     const { key } = await keyResponse.json();

  //     // Fetch checkout details from the server
  //     const checkoutResponse = await fetch(
  //       "https://prod.gurucool.life/api/v1/payments/checkout",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${loginToken}`,
  //         },
  //         body: JSON.stringify({
  //           amount: amount,
  //           gst: gst,
  //           offerPrice: totalAmount,
  //           couponCode: couponCode,
  //           couponType: couponType,
  //         }),
  //       }
  //     );
  //     const { checkout } = await checkoutResponse.json();

  //     const options = {
  //       description: "Recharge Wallet",
  //       // image: { logo },
  //       currency: "INR",
  //       key: key,
  //       amount: checkout.amount,
  //       name: "Gurucool.life",
  //       order_id: checkout.orderId,
  //       callback_url:
  //         "https://prod.gurucool.life/api/v1/payments/payment-verification",
  //       prefill: {
  //         email: email,
  //         contact: phone,
  //         name: userName,
  //       },
  //       notes: {
  //         address: "Razorpay Corporate Office",
  //       },
  //       theme: { color: "#53a20e" },
  //       method: {
  //         netbanking: false,
  //         card: false,
  //         wallet: false,
  //         upi: true,
  //       },
  //     };

  //     // Create Razorpay instance and open checkout
  //     const razor = new window.Razorpay(options);
  //     razor.open();
  //   } catch (error) {}
  // };

  // console.log("====================================");
  // console.log(userDetails);
  // console.log("====================================");

  const handlePayment = useCallback(
    async (
      loginToken: string,
      amount: string | number,
      gst: string | number,
      totalAmount: string | number,
      couponCode: string,
      couponType: string
    ) => {
      const data = await razorpayCheckoutHandler(
        loginToken,
        amount,
        gst,
        totalAmount,
        couponCode,
        couponType
      );

      const options: RazorpayOptions = {
        key: data?.key,
        amount: data?.checkout?.amount,
        currency: "INR",
        name: "Gurucool Life",
        description: "Test Transaction",
        // image: { logo },
        callback_url:
          "https://prod.gurucool.life/api/v1/payments/payment-verification",
        order_id: data?.checkout?.orderId,
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: userDetails?.firstName + " " + userDetails?.lastName,
          email: userDetails?.email ? userDetails?.email : "",
          contact: userDetails?.phone,
          // method: "card" | "netbanking" | "wallet" | "emi" | "upi",
          method:
            paymentMethod === "netbanking"
              ? "netbanking"
              : paymentMethod === "upi"
              ? "upi"
              : paymentMethod === "wallet"
              ? "wallet"
              : paymentMethod === "card"
              ? "card"
              : "emi",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#965efb",
          // backdrop_color: "red",
        },
        // modal: {
        //   // backdropclose?: boolean;
        //   // escape?: boolean;
        //   // handleback?: boolean;
        //   // confirm_close?: boolean;
        //   // ondismiss?: () => void;
        //   animation: true,
        // },
      };

      const rzpay = new Razorpay(options);
      rzpay.on("payment.failed", function (response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzpay.open();
    },
    [Razorpay, paymentMethod, userDetails]
  );

  return (
    <>
      {loading ? (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <Image src={Loading} height={100} width={100} alt="Loading..." />
        </div>
      ) : (
        <div
          className="max-w-6xl mx-auto px-4 md:px-0 box-border"
          style={{ marginTop: "80px", marginBottom: "50px" }}
        >
          <div className="md:w-[70%] md:m-auto">
            {/* Coupon Section  */}
            {data?.[0]?.couponApplied ? (
              <div
                className="w-full h-[59px] border m-auto p-2 rounded-lg bg-[#FEFEFE] flex justify-between items-center px-3 md:h-[107px]"
                style={{
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
                  marginBottom: "20px",
                }}
              >
                <div className="flex flex-col justify-center">
                  <div className="flex items-center">
                    <Image
                      src={
                        data?.[0]?.couponType === "Cashback"
                          ? Cashbackicon
                          : Iconapplycoupon
                      }
                      height={20}
                      width={20}
                      alt="See All Coupon"
                      className="md:h-[59px] md:w-[59px]"
                    />
                    <h2 className="text-[14px] font-medium ml-1 md:text-[22px] md:font-semibold">
                      {data?.[0]?.title}
                    </h2>
                  </div>
                  <p className="text-[12px] font-normal text-[#222222] md:text-[18px]">
                    Valid up to {convertToIstDateTime(data?.[0]?.expireAt)}
                  </p>
                </div>
                <div className="cursor-pointer" onClick={handleRemoveCoupon}>
                  <Image
                    src={Removeiocn}
                    height={16}
                    width={16}
                    alt="Remove Icon"
                    className="m-auto md:h-[30px] md:w-[30px]"
                  />
                  <p className="text-[#707070] text-center text-[12px] font-normal md:text-[18px]">
                    Remove
                  </p>
                </div>
              </div>
            ) : (
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
                <Link href={`/wallet/coupons?forAmount=${amount}`}>
                  <button className="border-[#965efbb2] py-[6px] px-2 flex justify-center items-center border-[0.5px] rounded text-[#965efbb2] text-[12px] font-normal md:py-2 md:px-4 md:text-[20px] md:font-semibold md:text-[#965EFB] md:border md:rounded-[8px]">
                    See All
                  </button>
                </Link>
              </div>
            )}
            {/* Order Summary  */}
            <div
              className="w-full h-auto p-[10px] flex flex-col items-start gap-4 rounded-lg bg-[#FEFEFE]"
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
                marginBottom: "20px",
              }}
            >
              <h2 className="text-[16px] font-medium text-[#222] md:text-[26px] md:font-semibold">
                Order Summary
              </h2>
              <div className="w-full flex flex-col gap-[14px]">
                <div className="flex justify-between">
                  <p className="text-[14px] font-normal pl-3 md:text-[18px]">
                    Recharge Amount
                  </p>
                  <p className="text-[14px] font-medium pr-3 md:text-[18px] md:font-semibold">
                    ₹{data?.[1]?.amount?.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] font-normal pl-3 md:text-[18px]">
                    GST (18%)
                  </p>
                  <p className="text-[14px] font-medium pr-3 md:text-[18px] md:font-semibold">
                    ₹{data?.[1]?.gst?.toFixed(2)}
                  </p>
                </div>
                {data?.[0]?.couponApplied && (
                  <div className="flex justify-between">
                    <p className="text-[14px] font-normal pl-3 text-green-500 flex gap-3 md:text-[18px]">
                      {data[1]?.offerText}
                      <Image
                        src={Iconapplycoupon}
                        height={20}
                        width={20}
                        alt="Discount Icon"
                      />
                    </p>
                    <p className="text-[14px] font-medium pr-3 text-green-500 md:text-[18px] md:font-semibold">
                      {data[1]?.offerAmount?.toFixed(2)}
                    </p>
                  </div>
                )}
                <div className="border w-full" />
                <div className="flex justify-between">
                  <p className="text-[14px] font-normal pl-3 md:text-[18px]">
                    Total Amount
                  </p>
                  <p className="text-[14px] font-medium pr-3 md:text-[18px] md:font-semibold">
                    ₹{data?.[1]?.totalAmount?.toFixed(2)}
                  </p>
                </div>
              </div>
              {data?.[0]?.couponApplied && (
                <div className="h-[50px] w-full border py-[10px] px-3 rounded-lg bg-[#E9F9F2] text-[14px] font-normal leading-[110%] text-center md:text-[18px] flex justify-center items-center">
                  <span>
                    {data[1]?.offerText1}{" "}
                    <span className=" text-green-500">
                      {" "}
                      {data[1]?.offerText2}
                    </span>{" "}
                    {data[1]?.offerText3}
                  </span>
                </div>
              )}
            </div>
            {/* Payment Method  */}
            <div
              className="py-4 px-6 w-full h-auto border border-[#D9D9D9] rounded-xl bg-white flex flex-col justify-center items-start gap-[17px]"
              style={{ marginBottom: "10px" }}
            >
              <h4 className="text-[18px] font-semibold md:text-[26px]">
                Pay Via
              </h4>
              <div className="py-[6px] px-1 flex justify-between w-full items-center">
                <label htmlFor="Netbanking" className="flex items-center">
                  <Image
                    src={BankIcon}
                    alt="Bank Icon"
                    height={30}
                    width={30}
                    className="md:h-[40px] md:w-[40px]"
                  />
                  <p className="pl-[15px] text-[14px] text-[#222] md:text-[18px]">
                    Net Banking
                  </p>
                </label>
                <input
                  id="Netbanking"
                  type="radio"
                  value="netbanking"
                  checked={paymentMethod === "netbanking"}
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 md:h-[30px] md:w-[30px]"
                  onChange={handleChangePaymentMethod}
                />
              </div>
              <div className=" w-full border-dashed border-[1px] border-black" />
              <div className="py-[6px] px-1 flex justify-between w-full items-center">
                <label htmlFor="Upi" className="flex items-center">
                  <Image
                    src={UpiIcon}
                    alt="UPI Icon"
                    height={30}
                    width={30}
                    className="md:h-[40px] md:w-[40px]"
                  />
                  <p className="pl-[15px] text-[14px] text-[#222] md:text-[18px]">
                    UPI
                  </p>
                </label>
                <input
                  id="Upi"
                  type="radio"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 md:h-[30px] md:w-[30px]"
                  onChange={handleChangePaymentMethod}
                />
              </div>
              <div className=" w-full border-dashed border-[1px] border-black" />
              <div className="py-[6px] px-1 flex justify-between w-full items-center">
                <label htmlFor="Wallet" className="flex items-center">
                  <Image
                    src={Walleticon}
                    alt="Wallet Icon"
                    height={30}
                    width={30}
                    className="md:h-[40px] md:w-[40px]"
                  />
                  <p className="pl-[15px] text-[14px] text-[#222] md:text-[18px]">
                    Wallet
                  </p>
                </label>
                <input
                  id="Wallet"
                  type="radio"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 md:h-[30px] md:w-[30px]"
                  onChange={handleChangePaymentMethod}
                />
              </div>
              <div className=" w-full border-dashed border-[1px] border-black" />
              <div className="py-[6px] px-1 flex justify-between w-full items-center">
                <label htmlFor="Card" className="flex items-center">
                  <Image
                    src={AtmcardIcon}
                    alt="Debit/Card Icon"
                    height={30}
                    width={30}
                    className="md:h-[40px] md:w-[40px]"
                  />
                  <p className="pl-[15px] text-[14px] text-[#222] md:text-[18px]">
                    Debit/Credit Card
                  </p>
                </label>
                <input
                  id="Card"
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  name="payment-method"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 md:h-[30px] md:w-[30px]"
                  onChange={handleChangePaymentMethod}
                />
              </div>
            </div>

            {/* Pay Now Button  */}
            <div className="flex justify-center">
              {data?.[2]?.razorPay && (
                <button
                  className="w-full p-[10px] rounded-lg bg-[#965efbb2] text-white text-[16px] font-semibold md:w-[320px] md:h-[54px]"
                  onClick={() => {
                    if (loginToken) {
                      handlePayment(
                        loginToken,
                        data?.[1]?.amount,
                        data?.[1]?.gst,
                        data?.[1]?.totalAmount,
                        data?.[0]?.couponCode,
                        data?.[0]?.couponType
                      );
                    }
                  }}
                >
                  Proceed To Pay
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Paymentdetailscomponent;

{
  /* 1. See All Coupons  */
}
{
  /* <div
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
          <button className="border-[#965efbb2] py-[6px] px-2 flex justify-center items-center border-[0.5px] rounded text-[#965efbb2] text-[12px] font-normal md:py-2 md:px-4 md:text-[20px] md:font-semibold md:text-[#965EFB] md:border md:rounded-[8px]">
            See All
          </button>
        </div> */
}
{
  /* 2. Discount Coupon  */
}
{
  /* <div
          className="w-full h-[59px] border m-auto p-2 rounded-lg bg-[#FEFEFE] flex justify-between items-center px-3 md:h-[107px]"
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
            marginBottom: "20px",
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <Image
                src={Iconapplycoupon}
                height={20}
                width={20}
                alt="See All Coupon"
                className="md:h-[59px] md:w-[59px]"
              />
              <h2 className="text-[14px] font-medium ml-1 md:text-[22px] md:font-semibold">
                60% discount
              </h2>
            </div>
            <p className="text-[12px] font-normal text-[#222222] md:text-[18px]">
              Valid up to 12th dec 2024
            </p>
          </div>
          <div>
            <Image
              src={Removeiocn}
              height={16}
              width={16}
              alt="Remove Icon"
              className="m-auto md:h-[30px] md:w-[30px]"
            />
            <p className="text-[#707070] text-center text-[12px] font-normal md:text-[18px]">
              Remove
            </p>
          </div>
        </div> */
}
{
  /* 2. Cashback Coupon  */
}
{
  /* <div
          className="w-full h-[59px] border m-auto p-2 rounded-lg bg-[#FEFEFE] flex justify-between items-center px-3 md:h-[107px]"
          style={{
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
            marginBottom: "20px",
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <Image
                src={Cashbackicon}
                height={20}
                width={20}
                alt="See All Coupon"
                className="md:h-[59px] md:w-[59px]"
              />
              <h2 className="text-[14px] font-medium ml-1 md:text-[22px] md:font-semibold">
                Get 550 on 550
              </h2>
            </div>
            <p className="text-[12px] font-normal text-[#222222] md:text-[18px]">
              Valid up to 12th dec 2024
            </p>
          </div>
          <div>
            <Image
              src={Removeiocn}
              height={16}
              width={16}
              alt="Remove Icon"
              className="m-auto md:h-[30px] md:w-[30px]"
            />
            <p className="text-[#707070] text-center text-[12px] font-normal md:text-[18px]">
              Remove
            </p>
          </div>
        </div> */
}
