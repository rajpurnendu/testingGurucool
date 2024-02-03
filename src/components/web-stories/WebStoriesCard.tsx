"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import icon from "../../../public/assets/webstoriesIcons/material-symbols-light_web-stories-outline.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

function convertUtcToIst(utcTimeString: any) {
  const utcTime = new Date(utcTimeString);
  const istTime = new Date(
    utcTime.getTime() + 5 * 60 * 60 * 1000 + 30 * 60 * 1000
  );

  const formattedDate = istTime
    .toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return formattedDate;
}

const WebStoriesCard = ({ data }: any) => {
  const router = useRouter();
  const handleNavigation = (link: string) => {
    router.push(`/web-stories/${link}`);
  };
  // console.log(data);

  // useEffect(() => {
  //   // Set overflow hidden when the component mounts
  //   document.body.style.overflow = "scroll";

  //   // Return a function to reset overflow when the component unmounts
  //   return () => {
  //     document.body.style.overflowY = "hidden";
  //   };
  // }, []);
  return (
    <div
      className="md:w-[269px]  bg-[length:149px_221px] md:bg-[length:269px_361px] w-[149px] rounded-[11.07px]  flex flex-col items-end justify-between overflow-hidden h-[221px] md:h-[361px] p-[11.7px] md:p-[10px] bg-gray-300 md:cursor-pointer"
      style={{
        backgroundImage: `url(${data?.webStoryImage?.url})`,

        backgroundBlendMode: "multiply",
      }}
      onClick={() => handleNavigation(data?.webStoryTitle)}
    >
      <Link href={`/web-stories/${data?.webStoryTitle}`}>
        <Image
          src={icon}
          className="md:w-[50px] w-[27px] h-[27px] md:h-[50px]"
          alt="icon"
        />
      </Link>

      <div className="flex flex-col md:gap-4 gap-[11px] w-full items-start">
        <p
          className="text-white
          
          block
md:text-lg
text-xs
md:leading-normal
leading-[15px]

font-semibold"
        >
          {data?.webStoryTitle}
        </p>
        <div className="overflow-hidden md:p-2 p-1 flex items-center justify-center mr-[14px] rounded-[30px] opacity-70 bg-[#707070]">
          <p
            className="text-white
md:text-base
font-medium
text-xs
md:font-semibold
leading-[15px]
md:leading-[17.44px]"
          >
            {convertUtcToIst(data?.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebStoriesCard;
