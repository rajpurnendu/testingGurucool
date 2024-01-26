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
import { cookies } from "next/headers";

const TopRated_astrologer = async ({
  searchParam,
}: {
  searchParam?: { filter?: string; id?: string };
}) => {
  const cookieStore = cookies();

  const loginToken = cookieStore.get("loginToken");
  const filtername = searchParam?.filter || "All";
  const queary = filtername.charAt(0).toUpperCase() + filtername.slice(1);

  const data = await GET_Spec_Astrologer(queary);

  const icons = [
    { name: "All", Icon: <All fill={filtername === "All"} /> },
    { name: "Love", Icon: <Love fill={filtername === "Love"} /> },
    { name: "Marriage", Icon: <Marriage fill={filtername === "Marriage"} /> },
    { name: "Business", Icon: <Job fill={filtername === "Business"} /> },
    { name: "Career", Icon: <Career fill={filtername === "Career"} /> },
    { name: "Life", Icon: <Family fill={filtername === "Life"} /> },
    { name: "Health", Icon: <Money fill={filtername === "Health"} /> },
    { name: "Tarot", Icon: <Tarot fill={filtername === "Tarot"} /> },
  ];

  return (
    <div className="xl:w-[72rem] w-auto mx-auto mt-[36px] xl:mt-[3.75rem]">
      <div className="p-[20px]">
        <h3 className="text-center xl:text-[2.125rem] text-base font-semibold xl:mb-[20px]">
          Top-rated astrologers
        </h3>
        <p className="text-center text-sm xl:text-[1.25rem] xl:mb-[1.87rem] mb-[1rem] font-normal">
          Choose top-rated astrologers from Gurukool and get real solutions to
          all your challenges and problems.
        </p>
      </div>

      <div className="px-[20px] flex flex-wrap justify-center flex-row xl:gap-[48px] gap-[20.19px] mb-[8px] items-center mx-auto w-fit">
        {icons.map((data, index) => (
          <Link key={index} href={`?filter=${data.name}`} scroll={false}>
            <div className="flex flex-col items-center gap-[13.35px]">
              <div
                className={`flex xl:p-3 p-[6px] w-[32px] h-[32px]  xl:w-[70px] xl:h-[70px] bg-white rounded-full shadow-lg border-2 ${
                  filtername === `${data.name}`
                    ? "border-violet-500"
                    : "border-black"
                }`}
              >
                {data.Icon}
              </div>
              <h3
                className={`${
                  filtername === `${data.name}`
                    ? "text-violet-500"
                    : "text-black"
                } text-xs xl:text-xl font-semibold`}
              >
                {data.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-auto flex items-end justify-end pr-[19px] xl:pr-0 mb-[12px]">
        <Link href={"/call-to-astrologers"}>
          <p className="w-[66.39px] flex underline hover:text-blue-500 justify-end text-right text-black text-xs xl:text-xl font-medium xl:font-semibold">
            See all
          </p>
        </Link>
      </div>
      <div className="flex gap-[12.53px] xl:overflow-visible no-scrollbar overflow-x-auto mx-auto xl:justify-center md:justify-center  items-center px-[20px] xl:px-0">
        {data.guru.docs.slice(0, 4).map((data: any, index: number) => (
          <AstroCard data={data} key={index} loginToken={loginToken} />
        ))}
      </div>
    </div>
  );
};

export default TopRated_astrologer;
