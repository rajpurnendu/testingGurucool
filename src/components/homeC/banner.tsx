import Image from "next/image";
import hand from "@/../public/assets/hand.webp";
import bannerImg from "../../../public/assets/background.webp";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className={`w-full lg:h-[511px] lg:mt-16 md:mt-14 mt-20 lg:flex justify-center gap-[5.25rem] items-center`}
    >
      <Image
        priority
        className="lg:relative lg:w-screen lg:h-[511px] hidden md:h-[400px] md:relative md:flex lg:flex w-full h-screen"
        src={bannerImg}
        alt="astrobanner"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="relative md:absolute  md:top-[8%] md:z-[2] md:gap-[50px] md:w-full md:mx-auto lg:py-[8px] lg:absolute z-[-1] lg:z-0 lg:w-[72rem] gap-4 lg:m-auto flex justify-center items-center">
        <div className="flex flex-col  lg:gap-[3.19rem] gap-[15px]">
          <div className="flex flex-col gap-0 w-[117px] md:w-full lg:w-auto lg:gap-4">
            <h1 className="m-0 lg:text-white md:text-white text-neutral-700 text-base lg:text-[2.5rem] font-semibold">
              Unlock Astrology
            </h1>
            <h2 className="m-0 text-[#26C884] text-base lg:text-[2.5rem] font-semibold">
              Secrets with GuruCool
            </h2>
          </div>
          <p className="lg:text-white md:w-[400px]  md:text-white  text-neutral-700 w-[290px] lg:w-[600px] text-xs md:text-xs lg:text-[1.125rem] leading-[15px] lg:leading-normal font-normal lg:font-semibold text-justify">
            {`Explore astrology secrets solutions with GuruCool astrologers: Your one-stop destination for personalized love, career, and marriage predictions. Find solutions to life's challenges through tarot cards, numerology, and zodiac insights.`}
          </p>
          <button className=" w-fit lg:w-[285px] lg:h-[71px] rounded-lg font-semibold md:text-base text-sm lg:text-[1.25rem] bg-[#26c884] text-white px-[10px] py-[10px]  lg:px-[1.62rem] lg:py-[0.94rem] hover:border border-black">
            <Link href="/call-to-astrologers">Get consultation</Link>
          </button>
        </div>
        <Image
          className="absolute lg:relative md:relative md:w-[200px] h-auto z-[-1] right-10 lg:right-0  top-0 w-[150px] lg:flex lg:w-[454px] lg:h-[477px]"
          priority={true}
          src={hand}
          alt="hand"
        />
      </div>
    </div>
  );
};

export default Banner;
