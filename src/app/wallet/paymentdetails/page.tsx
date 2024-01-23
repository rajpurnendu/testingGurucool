import Paymentdetailscomponent from "@/components/wallet/Paymentdetails";
import { cookies } from "next/headers";
import React from "react";

const Paymentdetails = ({
  searchParams,
}: {
  searchParams?: { pmt?: string; coupon?: string };
}) => {
  // console.log("====================================");
  // console.log(searchParams);
  // console.log("====================================");
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return (
    <Paymentdetailscomponent
      searchParams={searchParams}
      loginToken={loginToken?.value}
    />
  );
};

export default Paymentdetails;
