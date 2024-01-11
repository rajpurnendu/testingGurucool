import Image from "next/image";
import Link from "next/link";
import React from "react";
import astroimg from "../../../../../public/assets/Balkrishna.jpg";
import clsx from "clsx";

const Astroprofile = ({ astroObj }: { astroObj: any }) => {
  //   console.log("====================================");
  //   console.log(astroObj?.callAvailability);
  //   console.log("====================================");
  return (
    <Link href={`/astrologers/${astroObj?.userName}`}>
      <div className="flex flex-col items-center mx-2">
        <div className="block relative w-[80px] h-[80px] md:w-[134px] md:h-[134px_!important] border rounded-full">
          <Image
            src={astroObj.user.avatar.url}
            alt="Astro Image"
            width={100}
            height={100}
            className="min-w-[90%] h-[100%] w-[100%] rounded-[50%] border-b-0"
          />
          <div
            className={clsx(
              "h-[10px] w-[10px] absolute right-[15%] top-[12%] animate-ping rounded-[50%]",
              {
                "bg-red-500":
                  astroObj?.callAvailability &&
                  astroObj.callAvailability.toLowerCase() === "busy",
              },
              {
                "bg-green-500":
                  astroObj?.callAvailability &&
                  astroObj.callAvailability.toLowerCase() === "online",
              },
              {
                "bg-slate-500":
                  astroObj?.callAvailability &&
                  astroObj.callAvailability.toLowerCase() === "offline",
              }
            )}
          ></div>
          <div
            className={clsx(
              "h-[10px] w-[10px] absolute right-[15%] top-[12%] rounded-[50%]",
              {
                "bg-red-500": astroObj?.callAvailability === "busy",
              },
              {
                "bg-green-500": astroObj?.callAvailability === "online",
              },
              {
                "bg-slate-500":
                  astroObj?.callAvailability &&
                  astroObj.callAvailability.toLowerCase() === "offline",
              }
            )}
          ></div>
        </div>
        <p className="border-b-0 font-semibold text-center pt-0 pb-0 mb-0 text-[12px] md:text-[22px]">
          {astroObj.user.firstName} {astroObj.user.lastName}
        </p>
      </div>
    </Link>
  );
};

export default Astroprofile;
