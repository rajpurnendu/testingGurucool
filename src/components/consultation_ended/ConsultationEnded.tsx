"use client";
import useFilterStore from "@/store/filterStore";
import UserFeedBack from "../UserFeedBackPage/UserFeedBack";
import { useEffect, useState } from "react";
import { getUserprofile } from "@/lib/data";

const ConsultationEnded = ({ loginToken }: { loginToken: string }) => {
  const {
    astroDetails,
    setAstroDetails,
    setMinCallDuration,
    minimumCallDuration,
    callPurchasedId,
    setCallPurchasedId,
    callAvailability,
    setCallAvailability,
    amount,
    setAmount,
    callDuration,
    setCallDuration,
    userId
  } = useFilterStore();

  const guruToken: string = localStorage.getItem("guruToken") || "";
  console.log(guruToken);
//   console.log(loginToken);
  
//   const [userDetails, setUserDetails] = useState<any>();
//   useEffect(() => {
//     const userProfile = async () => {
//       if (loginToken) {
//         let data = await getUserprofile(loginToken);
//         setUserDetails(data);
//         // console.log(data);
//       }
//     };

//     userProfile();
//   }, [loginToken]);

//   console.log(userDetails);
  

  return (
    <>
      <UserFeedBack
        astroDetails={astroDetails}
        guruToken={guruToken}
        callPurchasedId={callPurchasedId}
        callDuration={callDuration}
        amount={amount}
        userId={userId}
      />
    </>
  );
};

export default ConsultationEnded;
