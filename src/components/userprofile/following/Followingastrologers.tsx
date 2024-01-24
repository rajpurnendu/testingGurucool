import Accordian from "@/components/Reuseableaccordian/Accordian";
import Image from "next/image";
import React from "react";
import iconnotFollwing from "../../../../public/assets/Follwing.svg";
import Astroprofile from "./components/Astroprofile";
import { getUserfollowingAstrologers } from "@/lib/data";

const Followingastrologers = async ({ loginToken }: { loginToken: string }) => {
  const data = await getUserfollowingAstrologers(loginToken);
  //   const astroFollowing = data.length;

  return (
    <Accordian title={"Following Astrologers"}>
      {data?.length === 0 ? (
        <div>
          <Image
            src={iconnotFollwing}
            height={80}
            width={90}
            alt="Not Following Banner"
            className="m-auto md:h-[150px] md:w-[150px]"
          />
          <h1 className="text-center w-[100%] m-auto text-[#a0a0a0]">
            You are not following any astrologers at the moment.You will be
            notified once the following astrologer online
          </h1>
          <div className="w-full flex justify-center items-center">
            <h2 className="inline-flex cursor-pointer appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle outline-none leading-tight font-semibold h-[52px] min-w-10 text-[1rem] px-4 text-white bg-[#8d66d4] rounded-md mt-[15px] md:w-[244px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#7740de] duration-300 ...">
              Follow Now
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-row h-[130px] md:h-auto overflow-x-auto no-scrollbar">
          {data?.map((astroObj: any, index: number) => (
            <Astroprofile astroObj={astroObj} key={index} />
          ))}
        </div>
      )}
    </Accordian>
  );
};

export default Followingastrologers;
