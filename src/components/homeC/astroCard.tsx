import React from "react";
import Image from "next/image";
import god from "@/../public/assets/mahadevImg.webp";
import astro from "@/../public/assets/astroImg.webp";

const AstroCard = ({ data }: { data: any }) => {
  return (
    <div className="lg:min-w-[288.46px] min-w-[180px] lg:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow lg:shadow-lg lg:min-h-[400.10px] relative bg-white rounded-lg">
      <Image
        width="200"
        height="200"
        className="lg:w-72 lg:h-[145px] w-[180px] h-[94px] rounded-t-md  absolute border lg:border-b border-neutral-800"
        src={data?.backgroundBanner?.image_Url}
        alt="banner"
      />
      <div className="w-[114.31px] h-[114.31px] lg:left-[80px] left-[30%] top-[20%] lg:top-[57.17px] absolute">
        <div className="lg:w-[116.01px] w-[75px] h-[75px] lg:h-[116.01px] lg:left-[-1.55px]  lg:top-0 absolute bg-zinc-300 rounded-full" />
        <Image
          width="100"
          height="100"
          className="lg:w-[105.92px] w-[68px] h-[68px] lg:h-[105.92px] left-[4px] top-[4px] lg:left-[4px] lg:top-[5.04px] absolute rounded-full"
          src={data.user?.avatar?.url}
          alt="god"
        />
        {data.status == "active" ? (
          <div className="w-[18.54px] h-[18.54px] lg:left-[86.51px] left-[45%] top-[-2%] lg:top-[3.08px] absolute bg-emerald-500 rounded-full" />
        ) : (
          <div className="w-[18.54px] h-[18.54px] lg:left-[86.51px] left-[45%] top-[-2%] lg:top-[3.08px] absolute bg-red-500 rounded-full" />
        )}
      </div>
      <div className="lg:w-[139.03px] lg:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[9.27px] rounded-bl-[9.27px]" />
      <p className="w-[121.79px] h-[13.70px] lg:right-0 right-[-10%] top-[-1%] lg:top-[4.12px] absolute text-center text-white text-xs lg:text-lg font-bold  leading-7">
        Most Choice
      </p>
      <div className="absolute lg:gap-2 items-center w-full inline-block top-[50%] lg:top-[45%]">
        <p
          className="text-neutral-800
          text-center
text-sm
font-medium
lg:text-[21.26px]
leading-[17.50px]"
        >
          {data.user.firstName}
        </p>
        <p
          className="text-neutral-800
          text-center
          mt-[2px]
          lg:mt-2

text-sm
font-medium
lg:text-[21.26px]
leading-[17.50px]"
        >
          {data.user.lastName}
        </p>
      </div>
      <div
        className="w-[100%]  
        lg:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
      >
        <p
          className='text-neutral-500 text-center
        
          lg:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          lg:font-normal
          lg:leading-[18.98px]"'
        >
          {data.specialization.slice(0, 4).join(",")}
        </p>
      </div>
      <div
        className="w-[100%] 
        lg:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
      >
        <p
          className="text-neutral-500 
       text-center
lg:text-[15.18px]
text-xs
font-normal
leading-[15px]
lg:font-semibold
lg:leading-[18.98px]"
        >
          {data.languages.slice(0, 3).join(",")}
        </p>
      </div>

      <div className="flex lg:gap-[55.23px] gap-[33px] left-3 lg:left-[8%] justify-between top-[80%] items-center absolute">
        <p
          className="text-neutral-500
lg:text-base
text-xs
font-normal
leading-[15px]
lg:font-semibold
lg:leading-[20.88px]"
        >
          Rating
        </p>
        <p
          className="text-neutral-500
lg:text-base
text-xs
font-normal
leading-[15px]
lg:font-semibold
lg:leading-[20.88px]"
        >
          Price
        </p>
        <p
          className="text-neutral-500
lg:text-base
text-xs
font-normal
leading-[15px]
lg:font-semibold
lg:leading-[20.88px]"
        >
          Exp.
        </p>
      </div>
      <div className="flex items-center absolute left-[6%] top-[87%] lg:top-[85%]">
        <div className="w-fit flex flex-col  gap-0 items-center">
          <p
            className="text-neutral-700
             text-xs
             lg:text-xl
             lg:font-semibold
             lg:leading-normal
             font-bold
             leading-[18px]"
          >
            {data.rating}
          </p>
          <p
            className="text-neutral-700
             text-[10px]
             lg:text-xl
             lg:font-normal
             lg:leading-normal
             font-bold
             leading-[11px]"
          >{`${data.astroRatingSum / 1000}K`}</p>
        </div>
        <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
        <div className=" w-fit flex items-center">
          <p
            className="text-emerald-500
text-sm
font-semibold
leading-snug
lg:text-[21.26px]
lg:font-medium
"
          >
            ₹{data.fee}/
          </p>
          <p
            className="text-emerald-500
text-xs
lg:text-base
lg:font-semibold
lg:leading-[20.88px]
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
lg:text-xl
lg:font-semibold
lg:leading-normal
font-bold
leading-[12px]"
          >
            {data.experience} Yrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
