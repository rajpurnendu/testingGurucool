import ConsultCard from "@/components/consult_page/ConsultCard";
import Searchbar from "@/components/consult_page/Searchbar";
import Speciality from "@/components/consult_page/Speciality";
import { GET_Spec_Astrologer } from "../../../lib/data";

export default async function Page({
  params,
}: {
  params: { specialization: string };
}) {
  const filtername = params?.specialization?.[0] || "all";
  const queary = filtername.charAt(0).toUpperCase() + filtername.slice(1);

  const data = await GET_Spec_Astrologer(queary);

  return (
    <>
      <Speciality />
      <Searchbar />
      <ConsultCard data={data?.guru.docs} />
    </>
  );
}
