"use client";
import Accordian from "@/components/Reuseableaccordian/Accordian";
import React, { useState } from "react";
import Image from "next/image";
import { Norechargehistory } from "./components/Norechargehistory";
import clsx from "clsx";

function convertIst(date: string): string {
  const utcDate: Date = new Date(date);
  const istDate: Date = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  return istDate.toLocaleString();
}

const Rechargehistory = () => {
  const [upi, setUPi] = useState(true);
  const payments = false;

  const handleUpi = () => {
    setUPi(true);
  };
  const handleCard = () => {
    setUPi(false);
  };
  return (
    <Accordian title={"Recharge History"}>
      {payments ? (
        <div className="mt-[10px]">
          <Norechargehistory />
          <p className="text-[20px] text-[gray] font-medium text-center">
            No Recharge Data Available
          </p>
        </div>
      ) : (
        <div className="w-full p-2 bg-[#fafafa] md:py-8 md:px-7">
          <div className="my-0 mx-auto">
            {/* Tab Container  */}
            <div className="flex justify-center">
              <button
                className={clsx(
                  "w-[92px] text-[1rem] outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tl-md rounded-bl-md",
                  {
                    "bg-[#8d66d4] text-white": upi,
                  },
                  {
                    "bg-[#e8dcff] text-[#4a5568]": !upi,
                  }
                )}
                onClick={handleUpi}
              >
                UPI
              </button>
              <button
                className={clsx(
                  "w-[92px] text-[1rem] outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tr-md rounded-br-md",
                  {
                    "bg-[#8d66d4] text-white": !upi,
                  },
                  {
                    "bg-[#e8dcff] text-[#4a5568]": upi,
                  }
                )}
                onClick={handleCard}
              >
                CARD
              </button>
            </div>
            {/* Tab Pannels  */}
            <div className="flex justify-center border-none"></div>
          </div>
        </div>
      )}
    </Accordian>
  );
};

export default Rechargehistory;
