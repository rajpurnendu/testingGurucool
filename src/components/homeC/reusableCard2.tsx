import Image from "next/image";
import userImg from "@/../public/assets/userImg.webp";
import quote from "@/../public/assets/quote1.webp";
import quote2 from "@/../public/assets/quote2.webp";
import star from "@/../public/assets/star.webp";

const ReusableCard2 = () => {
  return (
    <div className="relative rounded-xl lg:rounded-lg shadow lg:shadow-lg lg:max-w-[281px] max-w-[247px] p-[1rem]">
      <div className="flex flex-col items-center lg:gap-[0.81rem] gap-[23px]">
        <div className="flex flex-row w-full justify-end items-end">
          <Image
            priority={true}
            className=" left-[5%] absolute lg:w-[1.03rem] h-auto w-[16px]   lg:h-[0.95rem]"
            src={quote}
            alt="quote"
          />
          <p className="text-neutral-500 lg:font-semibold lg:text-base text-xs font-normal leading-[18px] lg:leading-[17.44px]">
            7th May 23
          </p>
        </div>
        <div className="lg:w-[249px] w-[215px]">
          <p className="lg:text-[1.125rem] text-xs font-normal text-justify leading-[1.25rem]">
            As a satisfied customer i would like to reccoment gurucool to
            everyone out there you get very genuine and fair astrologer on the
            site plus the astrolgers are very supportive and they always there
            to help me pf
          </p>
          <p className="text-[#965EFB] font-semibold text-xs leading-[15px] lg:text-[1.125rem]">
            View More
          </p>
        </div>
        <div className="w-full m-auto">
          <div className="flex flex-col items-center gap-[0.25rem] justify-center">
            <Image
              priority={true}
              className="w-[63.04px] h-[63.04px] rounded-full border border-violet-500 border-opacity-70"
              src={userImg}
              alt="user"
            />
            <div className="flex flex-row gap-[1px]">
              <Image
                priority={true}
                className="w-[10.75px] h-[10.16px]"
                src={star}
                alt="star"
              />
              <Image
                priority={true}
                className="w-[10.75px] h-[10.16px]"
                src={star}
                alt="star"
              />
              <Image
                priority={true}
                className="w-[10.75px] h-[10.16px]"
                src={star}
                alt="star"
              />
              <Image
                priority={true}
                className="w-[10.75px] h-[10.16px]"
                src={star}
                alt="star"
              />
              <Image
                priority={true}
                className="w-[10.75px] h-[10.16px]"
                src={star}
                alt="star"
              />
            </div>
            <p className="text-neutral-700 lg:font-semibold font-normal lg:text-base leading-[15px] lg:leading-[17.44px]">
              Savannah Nguyen
            </p>
            <div className="flex justify-between">
              <p className="lg:text-sm text-xs leading-[15px] lg:leading-none text-neutral-500 font-normal">
                New Delhi
              </p>
              <Image
                priority={true}
                className="absolute right-4 lg:w-[1.03rem] w-[16px] h-[15px]  lg:h-[0.95rem]"
                src={quote2}
                alt="quote"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard2;
