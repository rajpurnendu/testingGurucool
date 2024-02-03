import ConsultCard from "@/components/consult_page/ConsultCard";
import Searchbar from "@/components/consult_page/Searchbar";
import Speciality from "@/components/consult_page/Speciality";
import { GET_Spec_Astrologer2 } from "../../../lib/data";
import Link from "next/link";
import { cookies } from "next/headers";
import ConsultationBanner from "@/components/consultationBanner/ConsultationBanner";
import { log } from "console";
import Pagination from "@/components/ui/pagination";

export default async function Page({
  params,
  searchParams,
}: {
  params: { specialization: string };
  searchParams?: { query?: string; page?: number };
}) {
  const number = searchParams?.page || 1;
  const filtername = params?.specialization?.[0] || "all";
  const queary = filtername.charAt(0).toUpperCase() + filtername.slice(1);

  const data = await GET_Spec_Astrologer2(queary);
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");

  return (
    <>
      <div className="flex items-center max-w-[72rem] justify-center">
        <ConsultationBanner loginToken={loginToken?.value}  />
      </div>
      <Speciality />
      <Searchbar data={data?.guru?.docs} page={number} />
      <ConsultCard data={data?.guru?.docs} loginToken={loginToken?.value} />
      <div className="flex mx-auto items-center mb-5 mt-10  gap-20 justify-center">
        <Pagination totalPages={6} />
      </div>
    </>
  );
}
