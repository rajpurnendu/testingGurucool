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

const TopRated_astrologer = ({ searchParams }: { searchParams: any }) => {
  const filtername = searchParams?.filter || "all";

  return (
    <div className="lg:w-[72rem] w-auto mx-auto mt-[36px] lg:mt-[3.75rem]">
      <div className="p-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[.5rem]">
          Top rated astrologer
        </h1>
        <p className="text-center text-sm lg:text-[1.25rem] lg:mb-[1.87rem] mb-[1rem] font-normal">
          Check out our top rated astrologers and get a real solution to all
          your problems
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

        <Link href={`?filter=${"job"}`} scroll={false}>
          <div className="flex  flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "job" ? "border-violet-500" : "border-black"
              }`}
            >
              <Job fill={filtername === "job"} />
            </div>
            <h3
              className={`${
                filtername === "job" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Job
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
              Career
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"family"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "family" ? "border-violet-500" : "border-black"
              }`}
            >
              <Family fill={filtername === "family"} />
            </div>
            <h3
              className={`${
                filtername === "family" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Family
            </h3>
          </div>
        </Link>

        <Link href={`?filter=${"money"}`} scroll={false}>
          <div className=" flex flex-col items-center gap-[13.35px]">
            <div
              className={`flex lg:p-3 p-[6px] w-[32px] h-[32px]  lg:w-[70px] lg:h-[70px] bg-white rounded-full border-2 ${
                filtername === "money" ? "border-violet-500" : "border-black"
              }`}
            >
              <Money fill={filtername === "money"} />
            </div>
            <h3
              className={`${
                filtername === "money" ? "text-violet-500" : "text-black"
              } text-xs lg:text-xl font-semibold`}
            >
              Money
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
        <Link href={"/blogs"}>
          <p className="w-[66.39px] flex justify-end text-right text-black text-xs lg:text-xl font-medium lg:font-semibold">
            See all
          </p>
        </Link>
      </div>

      <div className="flex gap-[12.53px] lg:overflow-visible no-scrollbar overflow-x-auto mx-auto lg:justify-center  items-center px-[20px] lg:px-0">
        <AstroCard />
        <AstroCard />
        <AstroCard />
        <AstroCard />
      </div>
    </div>
  );
};

export default TopRated_astrologer;
