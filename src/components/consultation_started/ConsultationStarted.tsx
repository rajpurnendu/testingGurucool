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
    console.log('3. inside fetchCallStartedData')
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

  const [eventName, setEventName] = useState<string>("");
  useEffect(() => {
  console.log('1. inside useeffect encoding uid')
    if (loginToken && userDetails?.uid) {
      console.log('3. inside if uid and logintoken present')
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
    console.log('2. inside useffect of setting connection with sockets')

    // if (eventName) {
      console.log('6. if event name is present', eventName)

      const newSocket = io("https://test.gurucool.life");

      newSocket.on("connect", () => {
        console.log('7. inside the connect socket event')
      });

      newSocket.on(eventName, (data: any) => {
        console.log("8. eventName event name scoekt inside with settimeout>", data);
        if(data === "Call End"){
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
    // }
  }, [eventName]);

  useEffect(() => {
    fetchCallStartedData();
    console.log('4. inside the useeffect of callStatus completed check')
    if (callStatus === "completed") {
      console.log('4.1. inside if callstatus is completed')
      router.push("/call-consultation-ended");
    }
  }, [callStatus]);

  const [remainingTime, setRemainingTime] = useState(60);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    console.log('5. useffect of rouyther call-consultation-started')
    if (location === "/call-consultation-started") {
      console.log('5.1 if condition if location === "/call-consultation-started')
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

