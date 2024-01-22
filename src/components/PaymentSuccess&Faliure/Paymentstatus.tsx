"use client";
import React, { useState } from "react";
import Loading from "../../../public/images/wallet/Pulse-1s-200px.svg";
import Image from "next/image";

const Paymentstatus = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="flex h-[80vh] text-center items-center justify-center">
      <div className="w-[72rem]">
        {loading ? (
          <div className="flex justify-center items-center">
            <Image src={Loading} height={100} width={100} alt="Loading..." />
          </div>
        ) : (
          <p>{/* {true?} */}</p>
        )}
      </div>
    </div>
  );
};

export default Paymentstatus;
