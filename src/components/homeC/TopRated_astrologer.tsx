import {
  All,
  Marriage,
  Money,
  Family,
  Tarot,
  Love,
  Job,
  Career,
} from "@/../public/assets/icons/icons";
import Link from "next/link";
import AstroCard from "./astroCard";
import { GET_Spec_Astrologer } from "@/lib/data";

const TopRated_astrologer = async ({
  searchParam,
}: {
  searchParam?: { filter?: string; id?: string };
}) => {
  const filtername = searchParam?.filter || "all";
  const queary = filtername.charAt(0).toUpperCase() + filtername.slice(1);

  const data = await GET_Spec_Astrologer(queary);

  return (
    <div className="lg:w-[72rem] w-auto mx-auto mt-[36px] lg:mt-[3.75rem]">
      <div className="p-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[.5rem]">
          Top-rated astrologers
        </h1>
        <p className="text-center text-sm lg:text-[1.25rem] lg:mb-[1.87rem] mb-[1rem] font-normal">
          Choose top-rated astrologers from Gurukool and get real solutions to
          all your challenges and problems.
        </p>
      </div>

      <div className="px-[20px] flex flex-wrap justify-center flex-row lg:gap-[48px] gap-[20.19px] mb-[8px] items-center mx-auto w-fit">
        <Link href={`?filter=${"all"}`} scroll={false}>
          <div className="flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "all" ? "border-violet-500" : "border-black"
              }`}
            >
              <All fill={filtername === "all"} />
            </div>
            <h3
              className={`${
                filtername === "all" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              All
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"love"}`} scroll={false}>
          <div className="flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "love" ? "border-violet-500" : "border-black"
              }`}
            >
              <Love fill={filtername === "love"} />
            </div>
            <h3
              className={`${
                filtername === "love" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Love
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"marriage"}`} scroll={false}>
          <div className="  flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "marriage" ? "border-violet-500" : "border-black"
              }`}
            >
              <Marriage fill={filtername === "marriage"} />
            </div>

            <h3
              className={`${
                filtername === "marriage" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Marriage
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"business"}`} scroll={false}>
          <div className="flex  flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "business" ? "border-violet-500" : "border-black"
              }`}
            >
              <Job fill={filtername === "business"} />
            </div>
            <h3
              className={`${
                filtername === "business" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Business
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"career"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "career" ? "border-violet-500" : "border-black"
              }`}
            >
              <Career fill={filtername === "career"} />
            </div>

            <h3
              className={`${
                filtername === "career" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              career
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"life"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "life" ? "border-violet-500" : "border-black"
              }`}
            >
              <Family fill={filtername === "life"} />
            </div>
            <h3
              className={`${
                filtername === "life" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Life
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"health"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "health" ? "border-violet-500" : "border-black"
              }`}
            >
              <Money fill={filtername === "health"} />
            </div>
            <h3
              className={`${
                filtername === "health" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Health
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"tarot"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "tarot" ? "border-violet-500" : "border-black"
              }`}
            >
              <Tarot fill={filtername === "tarot"} />
            </div>
            <h3
              className={`${
                filtername === "tarot" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Tarot
            </h3>
          </div>
        </Link>
      </div>

      <div className="w-auto flex items-end justify-end pr-[19px] lg:pr-0 mb-[12px]">
        <Link href={"/call-to-astrologers"}>
          <p className="w-[66.39px] flex justify-end text-right text-black text-xs lg:text-xl font-medium lg:font-semibold">
            See all
          </p>
        </Link>
      </div>
      <div className="flex gap-[12.53px] lg:overflow-visible no-scrollbar overflow-x-auto mx-auto lg:justify-center  items-center px-[20px] lg:px-0">
        {data.guru.docs.slice(0, 4).map((data: any, index: number) => (
          <AstroCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopRated_astrologer;
