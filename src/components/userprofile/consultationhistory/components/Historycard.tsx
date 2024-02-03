"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

function convertIst(date: string) {
  const utcDate = new Date(date);
  const istDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  return istDate.toLocaleString();
}

const Historycard = ({ item }: { item: any }) => {
  const consultationstatus =
    item?.chatStatus === "completed" || item?.callStatus === "completed";
  return (
    <>
      <div className="p-[16px] bg-white mt-8 border border-solid border-gray-500 rounded-[10px]">
        <div className="flex justify-between">
          <p
            className={clsx("font-semibold mb-0 text-[19px]", {
              "text-[#38CC24]": consultationstatus,
              "text-[#e91b1b]": !consultationstatus,
            })}
          >
            {consultationstatus ? "Completed" : "Failed"}
          </p>
          <p className="font-normal mb-0 text-[12px]">ID: {item._id}</p>
        </div>
        {/* Consultation History  */}
        <div className="flex justify-between flex-col md:flex-row">
          {/* 1  */}
          <div className="flex items-center justify-between">
            <Image
              src={item?.guru?.avatar?.url}
              alt="guruimg"
              width={55}
              height={55}
              className="rounded-full mt-[10px] h-[55px] w-[55px]"
            />

            <p className="text-[14px] font-semibold w-[120px] md:text-[20px]">
              {item?.guruName}
            </p>
            <button className="text-[12px] outline-none rounded-md font-semibold h-10 px-4 border border-solid border-[#e2e8f0] text-inherit hover:bg-[#edf2f7] leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
              Consult
            </button>
          </div>
          {/* 2  */}
          <div className="flex justify-between">
            <div>
              <p className="text-start font-normal">Date & Time</p>
              <p className="text-start font-normal">Duration</p>
              <p className="text-start font-normal">Consultation Type</p>
              <p className="text-start font-semibold">Money Spent</p>
            </div>
            <div>
              <p className="text-end font-normal">
                {convertIst(item.createdAt)}
              </p>
              <p className="text-end font-normal">
                {item?.formattedTimeDuration} Min
              </p>
              <p className="text-end font-normal">{item?.consultationType}</p>
              <p className="text-end font-semibold">
                ₹{item.netAmount ? Math.round(item.netAmount) : 0}
              </p>
            </div>
          </div>
          {/* 3  */}
          <div className="flex flex-row justify-between md:flex-col">
            <button
              className={clsx(
                "text-[10px] align-middle outline-none leading-tight rounded-md font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... h-10 min-w-10 px-4 border border-solid border-[#e2e8f0] w-[188px] md:text-[14px]",
                {
                  "text-[#fff] bg-[#8d66d4]": consultationstatus,
                  "text-black bg-white": !consultationstatus,
                }
              )}
              //   status={consultationstatus}
              onClick={() => {
                if (consultationstatus) {
                  window.open(item.RecordingUrl, "_blank");
                }
              }}
            >
              {consultationstatus ? "Recording" : "No Recording"}
            </button>
            {/* <button
              className="text-[10px] align-middle outline-none leading-tight rounded-md font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... h-10 min-w-10 px-4 border border-solid border-[#e2e8f0] text-[#fff] w-[188px] bg-[#8d66d4] md:text-[14px]"
              //   onClick={() => {
              //     setGetRemedies(item?.Remedies);
              //     onOpen1();
              //     logEvent(analytics, "remedies_click");
              //   }}
            >
              Remedies
            </button>
            <button
              className="text-[10px] align-middle outline-none leading-tight rounded-md font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... h-10 min-w-10 px-4 border border-solid border-[#e2e8f0] text-[#fff] bg-[#8d66d4] w-[188px] md:text-[14px]"
              //   onClick={() => {
              //     if (!item.feedback) {
              //       onOpen();
              //       logEvent(analytics, "feedback_click");
              //     }
              //   }}
            >
              {item.feedback ? "Submitted" : "Share Feedback"}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Historycard;
