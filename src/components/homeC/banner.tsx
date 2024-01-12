import Image from "next/image";
import hand from "@/../public/assets/hand.webp";
import bannerImg from "../../../public/assets/background.webp";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className={`w-full xl:h-[511px] xl:mt-16 md:mt-14 mt-20 xl:flex justify-center gap-[5.25rem] items-center`}
    >
      <Image
        priority
        className="xl:relative xl:w-screen xl:h-[511px] hidden md:h-[400px] md:relative md:flex xl:flex w-full h-screen"
        src={bannerImg}
        alt="astrobanner"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="relative md:absolute  md:top-[8%] md:z-[2] md:gap-[50px] md:w-full md:mx-auto xl:py-[8px] xl:absolute z-[-1] xl:z-0 xl:w-[72rem] gap-4 xl:m-auto flex justify-center items-center">
        <div className="flex flex-col  xl:gap-[3.19rem] gap-[15px]">
          <div className="flex flex-col gap-0 w-[117px] md:w-full xl:w-auto xl:gap-6">
            <h1 className="m-0 xl:text-white md:text-white text-neutral-700 text-base xl:text-[2.5rem] font-[500]">
              Unlock Astrology
            </h1>
            <h2 className="m-0 text-[#26C884] text-base xl:text-[2.5rem] font-[600]">
              Secrets with GuruCool
            </h2>
          </div>
          <p className="xl:text-white md:w-[400px]  md:text-white  text-neutral-700 w-[290px] xl:w-[600px] text-xs md:text-xs xl:text-[1.125rem] leading-[15px] xl:leading-normal font-normal xl:font-[500] text-justify">
            {`Explore astrology secrets solutions with GuruCool astrologers: Your one-stop destination for personalized love, career, and marriage predictions. Find solutions to life's challenges through tarot cards, numerology, and zodiac insights.`}
          </p>
          <Link
            href="/call-to-astrologers"
            className=" w-fit xl:w-[285px] xl:h-[71px] rounded-lg font-[500] md:text-base text-sm xl:text-[1.25rem] bg-[#26c884] text-white px-[10px] py-[10px]  xl:px-[1.62rem] xl:py-[0.94rem] hover:border border-black flex items-center justify-center"
          >
            Get consultation
          </Link>
        </div>
        <Image
          className="absolute xl:relative md:relative md:w-[200px] h-auto z-[-1] right-10 xl:right-0  top-0 w-[150px] xl:flex xl:w-[454px] xl:h-[477px]"
          priority={true}
          src={hand}
          alt="hand"
        />
      </div>
    </div>
  );
};

export default Banner;
