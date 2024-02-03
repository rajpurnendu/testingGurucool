"use client";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN, TESTING_URL } from "@/lib/apilinks";
import { getUserprofile } from "@/lib/data";
import useFilterStore from "@/store/filterStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Modal from "../ReusableModal/ReusableModal";
import ConsultationFailed from "./ConsultationFailed";
import ConsultationStartedModal from "./ConsultationStartedModal";

const ConsultationStarted = ({ loginToken }: { loginToken: string }) => {
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
    userId,
    setUserId,
  } = useFilterStore();

  const [callStatus, setCallStatus] = useState();
  const [callMsg, setCallMsg] = useState("");
  const [userDetails, setUserDetails] = useState<any>();
  const guruToken: string = localStorage.getItem("guruToken") || "";
  const purchaseId: string = localStorage.getItem("purchaseId") || "";

  const router = useRouter();
  const location = usePathname();

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        setUserDetails(data.userDetails);
        setUserId(data.user._id);
      }
    };

    userProfile();
  }, []);

  async function fetchCallStartedData() {
    console.log('inside fetchCallStartedData')
    try {
      const response1 = await fetch(
        `${TESTING_URL}consultations/consultationReceipt?purchaseId=${purchaseId}`
      );
      const data1 = await response1.json();
      console.log(data1);

      setCallStatus(data1.purchase.callStatus);
      const response2 = await fetch(
        G_GET_SINGLE_ASTROLOGER_BY_TOKEN(guruToken)
      );
      const data2 = await response2.json();
      console.log(data2);

      setAstroDetails(data2.guru);
      if (data1.purchase.callStatus === "completed") {
        // logEvent(analytics, "Call_Success_For", {
        //   item_name: `${astroDetails?.user?.firstName} ${astroDetails?.user?.lastName}`,
        // });
        console.log('inside completed callStatus condition')
        setCallPurchasedId(purchaseId);

        setCallDuration(data1.purchase.timeDuration);

        setAmount(data1.purchase.amount);
        localStorage.removeItem("purchaseId");
        router.push("/call-consultation-ended");
      } 
    } catch (error) {
      console.log(error);
    }
  }

  console.log(callStatus);

  const [eventName, setEventName] = useState();
  useEffect(() => {
    if (loginToken && userDetails?.uid) {

      const uid = userDetails.uid.toString();
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const encodedStr = uid
        .split("")
        .map((digit: string) => alphabet[parseInt(digit, 10)])
        .join("");
      setEventName(encodedStr);
    }
  }, [loginToken, userDetails]);

  useEffect(() => {
    if (eventName) {
      console.log("EVENT>>>>>>>>>>>>>>>>>>>>>>>>>", eventName);
      const newSocket = io("https://test.gurucool.life");

      newSocket.on("connect", () => {
      });

      newSocket.on(eventName, (data: any) => {
        console.log("Socket Event>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log("Socket Event DATA>>>>>>>>>>>>>>>>>>>>>>>>>", data);
        if(data === "Call End"){
          //setTimeout is used to delay of the call of the function as the status to update in backend server taking some time
          setTimeout(()=>{
            fetchCallStartedData();
          },3000)
        }
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        newSocket.off(eventName);
        newSocket.disconnect();
      };
    }
  }, [eventName]);

  // useEffect(() => {
  //   setTimeout(fetchCallStartedData, 0);
  // }, [eventName]);

  useEffect(() => {
    fetchCallStartedData();
    if (callStatus === "completed") {
      router.push("/call-consultation-ended");
    }
  }, [callStatus]);

  const [remainingTime, setRemainingTime] = useState(60);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (location === "/call-consultation-started") {
      setShowModal(true);
    }
  }, [router]);

  return (
    <div>
      <Modal
        size={
          isMobile
            ? "xs"
            : callStatus === "busy" ||
              callStatus === "failed" ||
              callStatus === "no-answer"
            ? "md"
            : "md"
        }
        show={showModal}
        onClose={closeModal}
      >
        <div className="w-full flex flex-col items-center gap-4 md:gap-6">
          {callStatus === "busy" ||
          callStatus === "failed" ||
          callStatus === "no-answer" || callStatus === "incomplete" ? (
            <ConsultationFailed />
          ) : (
            <ConsultationStartedModal
              astroDetails={astroDetails}
              setRemainingTime={setRemainingTime}
              remainingTime={remainingTime}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ConsultationStarted;
