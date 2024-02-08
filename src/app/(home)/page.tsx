import Testmonial from "@/components/homeC/Testmonial";
import Banner from "@/components/homeC/banner";
import offer from "../../../public/assets/banners/offer2.webp";
import Services from "@/components/homeC/services";
import TopRated_astrologer from "@/components/homeC/TopRated_astrologer";
import ReaderSection from "@/components/homeC/ReaderSection";
import ContentSection from "@/components/homeC/ContentSection";
import Faq from "@/components/homeC/Faq";
import { cookies } from "next/headers";
import { getUserprofile } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const page = async ({
  params,
  searchParams,
}: {
  params: { filtername: string[] };
  searchParams?: { filter?: string; id?: string };
}) => {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken") || "";
  const userData = loginToken && (await getUserprofile(loginToken.value));

  return (
    <>
      <Banner
        rechargerCount={userData?.userDetails?.totalRecharge}
        loginToken={
          typeof loginToken === "object" ? loginToken.value : loginToken
        }
      />
      <div className="px-5 ">
        {(!loginToken || userData?.userDetails?.totalRecharge === 0) && (
          <Link
            href="/wallet/pricelist"
            className="w-full mt-[36px]  flex items-center rounded-[9px] justify-center h-[135px] overflow-hidden md:hidden"
          >
            <Image src={offer} alt="offer" className="min-w-full h-full" />
          </Link>
        )}
      </div>
      <Services />
      <Testmonial />
      <TopRated_astrologer searchParam={searchParams} />
      <ReaderSection
        loginToken={
          typeof loginToken === "object" ? loginToken.value : loginToken
        }
      />
      <ContentSection />
      <Faq searchParams={searchParams} />
    </>
  );
};

export default page;
