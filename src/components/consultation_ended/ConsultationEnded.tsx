"use client";
import useFilterStore from "@/store/filterStore";
import UserFeedBack from "../UserFeedBackPage/UserFeedBack";

const ConsultationEnded = () => {
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
  } = useFilterStore();
  return (
    <>
      <UserFeedBack astroDetails={astroDetails} callPurchasedId={callPurchasedId} callDuration={callDuration} amount={amount} />
    </>
  );
};

export default ConsultationEnded;
