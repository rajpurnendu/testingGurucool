
import ConsultationStarted from "@/components/consultation_started/ConsultationStarted";
import useFilterStore from "@/store/filterStore";
import { cookies } from "next/headers";


const CallconsultationStarted = () => {
    
 
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken") || "";
  return <div className="mt-16 h-screen-62">
    <ConsultationStarted loginToken={typeof loginToken === "object" ? loginToken.value : loginToken}  />
  </div>;
};

export default CallconsultationStarted;
