import ConsultCard from "@/components/consult_page/ConsultCard";
import Speciality from "@/components/consult_page/Speciality";

export default function Page({ params }: { params: { specialization: string } }) {
  return (
    <>
      <Speciality/>
      <ConsultCard />
    </>
  );
}
