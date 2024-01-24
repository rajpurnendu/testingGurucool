import Testmonial from "@/components/homeC/Testmonial";
import Banner from "@/components/homeC/banner";
import Services from "@/components/homeC/services";
import TopRated_astrologer from "@/components/homeC/TopRated_astrologer";
import ReaderSection from "@/components/homeC/ReaderSection";
import ContentSection from "@/components/homeC/ContentSection";
import Faq from "@/components/homeC/Faq";
import { cookies } from "next/headers";

const page = ({
  params,
  searchParams,
}: {
  params: { filtername: string[] };
  searchParams?: { filter?: string; id?: string };
}) => {


  return (
    <>
      <Banner />
      <Services />
      <Testmonial />
      <TopRated_astrologer searchParam={searchParams} />
      <ReaderSection />
      <ContentSection />
      <Faq searchParams={searchParams} />
    </>
  );
};

export default page;
