import ConsultCard from "@/components/consult_page/ConsultCard";
import Searchbar from "@/components/consult_page/Searchbar";
import Speciality from "@/components/consult_page/Speciality";
import { GET_Spec_Astrologer2, getUserprofile } from "../../../lib/data";
import Link from "next/link";
import { cookies } from "next/headers";
import { log } from "console";
import Pagination from "@/components/ui/pagination";
import Carousel1 from "@/components/Crousels/Crousel1";
import img1 from "../../../../public/images/banner/First Free Banner.svg";
import img2 from "../../../../public/images/banner/Web Consult Page Banner.svg";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
// import Head from "next/head";

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
  const userDetail = loginToken && (await getUserprofile(loginToken?.value));
  // console.log(userDetail?.userDetails.totalRecharge);

  const slides: any[] = [
    {
      src: img1,
      alt: "Image 1 for carousel",
    },
    {
      src: img2,
      alt: "Image 2 for carousel",
    },
  ];
  const slides1: any[] = [
    {
      src: img1,
      alt: "Image 1 for carousel",
    },
  ];

  // Construct the canonical URL
  // const baseUrl = 'http://localhost:3000/';
  // const canonicalUrl = `${baseUrl}/${filtername}`;
  return (
    <>
      <BreadCrumb />

      {/* <Head>
        <title>Expert Astrologers for Personalized Consultations</title>{" "}
        
       
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      {/* <div className="flex items-center max-w-[72rem] justify-center">
        <ConsultationBanner
          loginToken={loginToken?.value}
          rechargeCount={userDetail?.userDetails.totalRecharge}
        />
      </div> */}
      <div className="max-w-6xl w-full aspect-[10/4] md:aspect-[10/3] mb-8 mx-auto">
        <Carousel1
          dot={true}
          icon={false}
          bottom={"bottom-[-30px]"}
          slides={
            !loginToken || userDetail?.userDetails.totalRecharge == 0
              ? slides
              : slides1
          }
        />
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
