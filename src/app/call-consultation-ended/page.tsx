import UserFeedBack from "@/components/UserFeedBackPage/UserFeedBack";
import ConsultationEnded from "@/components/consultation_ended/ConsultationEnded";
import { cookies } from "next/headers";


const CallconsultationEnded = () => {
    const cookieStore = cookies();
    const loginToken = cookieStore.get("loginToken") || "";
  return (
    <>
    <ConsultationEnded loginToken={typeof loginToken === "object" ? loginToken.value : loginToken}/>
    </>
  )
}

export default CallconsultationEnded;