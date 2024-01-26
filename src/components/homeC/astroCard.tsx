"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getUserprofile } from "@/lib/data";

function formatValue(value: number) {
  const formattedValue = (value / 1000).toFixed(1);
  return `${formattedValue}K`;
}

const AstroCard = ({ data, loginToken }: { data: any; loginToken: any }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        const datafollow =
          loginToken && (await getUserprofile(loginToken.value));

        setUserDetails(data.userDetails);
        // console.log(data);
      }
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fee = getPrice(userDetails, data);

  function getPrice(userDetails: any, data: any) {
    if (userDetails?.consultationCount === 0 || !loginToken) {
      return data?.firstOfferPrice?.national?.fee;
    } else {
      return data?.fee;
    }
  }

  return (
    <Link
      href={`/astrologers/${data?.userName}`}
      className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow hover:xl:shadow-lg transition duration-300 ease-in-out xl:min-h-[400.10px] relative bg-white rounded-lg"
    >
      <Image
        width="200"
        height="200"
        className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
        src={data?.backgroundBanner?.image_Url}
        alt="banner"
      />
      <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
        <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />

        <Image
          width="100"
          height="100"
          className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
          src={data?.user?.avatar?.url}
          alt="god"
        />
        {data?.callAvailability == "online" ? (
          <div>
            <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
            <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
          </div>
        ) : (
          <div>
            <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] absolute bg-red-500 animate-ping rounded-full" />
            <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] absolute bg-red-500 rounded-full" />
          </div>
        )}
      </div>

      {data?.mostTrusted == true ? (
        <div>
          <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
          <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
            Most Choice
          </p>
        </div>
      ) : null}

      <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
        <p
          className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
        >
          {data?.user.firstName}
        </p>
        <p
          className="text-neutral-800
          text-center
          mt-[2px]
          xl:mt-2

text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
        >
          {data.user.lastName}
        </p>
      </div>
      <div
        className="w-[100%]  
        xl:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
      >
        <p
          className='text-neutral-500 text-center
        
          xl:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          xl:font-normal
          xl:leading-[18.98px]"'
        >
          {data.specialization.slice(0, 4).join(",")}
        </p>
      </div>
      <div
        className="w-[100%] 
        xl:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
      >
        <p
          className="text-neutral-500 
       text-center
xl:text-[15.18px]
text-xs
font-normal
leading-[15px]
xl:font-semibold
xl:leading-[18.98px]"
        >
          {data.languages.slice(0, 3).join(",")}
        </p>
      </div>

      <div className="flex xl:gap-[55.23px] gap-[33px] left-3 xl:left-[8%] justify-between top-[80%] items-center absolute">
        <p
          className="text-neutral-500
xl:text-base
text-xs
font-normal
leading-[15px]
xl:font-semibold
xl:leading-[20.88px]"
        >
          Rating
        </p>
        <p
          className="text-neutral-500
xl:text-base
text-xs
font-normal
leading-[15px]
xl:font-semibold
xl:leading-[20.88px]"
        >
          Price
        </p>
        <p
          className="text-neutral-500
xl:text-base
text-xs
font-normal
leading-[15px]
xl:font-semibold
xl:leading-[20.88px]"
        >
          Exp.
        </p>
      </div>
      <div className="flex items-center absolute left-[6%] top-[87%] xl:top-[85%]">
        <div className="w-fit flex flex-col  gap-0 items-center">
          <p
            className="text-neutral-700
             text-xs
             xl:text-xl
             xl:font-semibold
           
             font-bold
             leading-none"
          >
            {data.rating}
          </p>
          <p
            className="text-neutral-700
             text-xs
             xl:text-xl
             xl:font-semi-bold
             
             font-semibold
             leading-none"
          >
            {`(${formatValue(data.astroRatingSum)})`}
          </p>
        </div>
        <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
        <div className=" w-fit flex items-center">
          <p
            className="text-emerald-500
text-sm
font-semibold
leading-snug
xl:text-[21.26px]
xl:font-medium
"
          >
            ₹{fee}/
          </p>
          <p
            className="text-emerald-500
text-xs
xl:text-base
xl:font-semibold
xl:leading-[20.88px]
font-normal
leading-[18px]"
          >
            min
          </p>
        </div>
        <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
        <div className="w-fit">
          <p
            className="text-neutral-700 m-0
text-xs
xl:text-xl
xl:font-semibold
xl:leading-normal
font-bold
w-fit
leading-[12px]"
          >
            {data.experience} Yrs
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AstroCard;
