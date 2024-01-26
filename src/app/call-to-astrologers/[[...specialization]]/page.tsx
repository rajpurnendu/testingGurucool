import ConsultCard from "@/components/consult_page/ConsultCard";
import Searchbar from "@/components/consult_page/Searchbar";
import Speciality from "@/components/consult_page/Speciality";
import { GET_Spec_Astrologer2 } from "../../../lib/data";
import Link from "next/link";
import { cookies } from "next/headers";
import ConsultationBanner from "@/components/consultationBanner/ConsultationBanner";

export default async function Page({
  params,
}: {
  params: { specialization: string };
}) {
  const filtername = params?.specialization?.[0] || "all";
  const queary = filtername.charAt(0).toUpperCase() + filtername.slice(1);

  const data = await GET_Spec_Astrologer2(queary);
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return (
    <>
      <div className="flex items-center max-w-[72rem] justify-center mt-16">
        <ConsultationBanner />
      </div>
      <Speciality />
      <Searchbar data={data?.guru?.docs}/>
      <ConsultCard data={data?.guru?.docs} loginToken={loginToken?.value} />
    </>
  );
}
