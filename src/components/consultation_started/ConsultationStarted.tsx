"use client";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN } from "@/lib/apilinks";
import { getUserprofile } from "@/lib/data";
import useFilterStore from "@/store/filterStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

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
  } = useFilterStore();

  const [callStatus, setCallStatus] = useState();
  const [callMsg, setCallMsg] = useState("");
  const [userDetails, setUserDetails] = useState<any>();
  const guruToken: string = localStorage.getItem("guruToken") || "";
//   console.log(guruToken);
  const purchaseId: string = localStorage.getItem("purchaseId") || "";

  const router = useRouter();

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        setUserDetails(data.userDetails);
        // console.log(data);
      }
    };

    userProfile();
  }, []);
  console.log(userDetails);
  
  async function fetchCallStartedData() {
    try {
      const response1 = await fetch(
        `https://prod.gurucool.life/api/v1/consultations/consultationReceipt?purchaseId=${purchaseId}`
      );
      const data1 = await response1.json();
      setCallStatus(data1.purchase.callStatus);
      const response2 = await fetch(
        G_GET_SINGLE_ASTROLOGER_BY_TOKEN(guruToken)
      );
      const data2 = await response2.json();
      setAstroDetails(data2.guru);
      if (callStatus === "completed") {
        // logEvent(analytics, "Call_Success_For", {
        //   item_name: `${astroDetails?.user?.firstName} ${astroDetails?.user?.lastName}`,
        // });

        setCallPurchasedId(purchaseId);
        // dispatch(
        //   callConsultationEndedDetailsAction.setCallDuration(
        //     response.data.purchase.timeDuration
        //   )
        // );
        setCallDuration(data1.purchase.timeDuration);
        // dispatch(
        //   callConsultationEndedDetailsAction.setAmount(
        //     response.data.purchase.amount
        //   )
        // );
        setAmount(data1.purchase.amount);
        localStorage.removeItem("purchaseId");
        router.push("/feedbacknew");
      } else if (callStatus === "started") {
        setCallMsg("Your Call has been Started");
      } else if (callStatus === "failed") {
        setCallMsg(
          "Your Call connecting has been failed please restart the process"
        );
        // logEvent(analytics, "call_fail");
        // logEvent(analytics, "Call_Failure_for", {
        //   item_name: `${astroDetails?.user?.firstName} ${astroDetails?.user?.lastName}`,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [eventName, setEventName] = useState();
  useEffect(() => {
    if (loginToken && userDetails?.uid) {
        console.log(userDetails);
        
      const uid = userDetails.uid.toString();
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const encodedStr = uid
        .split("")
        .map((digit: string) => alphabet[parseInt(digit, 10)])
        .join("");
      setEventName(encodedStr);
    }
  }, [loginToken, userDetails]);
console.log(eventName);

  useEffect(() => {
    if (eventName) {
      console.log("EVENT>>>>>>>>>>>>>>>>>>>>>>>>>", eventName);
      const newSocket = io("https://test.gurucool.life");

      newSocket.on("connect", () => {
        console.log("Connected to the server");
      });

      newSocket.on(eventName, (data: any) => {
        // // //console.log("Socket Event>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log("Socket Event DATA>>>>>>>>>>>>>>>>>>>>>>>>>", data);
        fetchCallStartedData();
      });

      // Clean up the socket connection when the component unmounts
      return () => {
        newSocket.off(eventName);
        newSocket.disconnect();
      };
    }
  }, [eventName]);

  useEffect(() => {
    setTimeout(fetchCallStartedData, 0);
  }, [eventName]);

//   const [remainingTime, setRemainingTime] = useState(60);
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRemainingTime((prevTime) => {
//         if (prevTime === 0) {
//           clearInterval(interval);
//           return 0;
//         } else {
//           return prevTime - 1;
//         }
//       });
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

  return <div>ConsultationStarted</div>;
};

export default ConsultationStarted;
