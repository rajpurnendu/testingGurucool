"use client";
import ReusableCard from "./reusableCard";
import { card } from "./arraytext";
import { useState } from "react";
import Link from "next/link";

const Services = () => {
  const [cards, setCards] = useState(card);

  const handleClick = (index: number) => {
    const updateArray = [...cards];
    let temp = updateArray[0];
    updateArray[0] = updateArray[index];
    updateArray[index] = temp;
    setCards(updateArray);
  };
  return (
    <div className=" w-auto lg:w-[72rem] mx-auto mt-[36px] lg:mt-[3.75rem]">
      <div className="px-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[8px]">
          Services
        </h1>
        <p className="text-center  text-sm lg:text-[1.25rem] leading-[30px] lg:mb-[1.87rem] mb-[1rem] font-normal">
          We provide all astrology-based services here at Gurucool, whether
          astrological consultations, gods and devotion, or blogs.
        </p>
      </div>

      <div className="flex mx-auto pl-6 lg:px-0 md:px-[0px]">
        <div
          className="md:min-w-[220px] lg:min-w-[562px]   min-w-[100px]  px-[11.52px] lg:px-[65px] lg:py-[50px] py-[30px] bg-black bg-opacity-20 md:rounded-xl lg:rounded-xl rounded-[3.5px] gap-[15px] justify-center items-end lg:gap-[85px] flex flex-col bg-bottom lg:bg-center bg-cover md:bg-center"
          style={{
            backgroundImage: `url(${cards[0].img.src})`,
            backgroundBlendMode: "hue",
          }}
          onClick={() => {
            handleClick(0);
          }}
        >
          <div className="self-stretch lg:flex-col lg:justify-start lg:items-start lg:gap-4 lg:flex ">
            <p className="lg:w-52 md:text-left flex justify-center items-center  mt-[20px] lg:mt-[0px] text-white text-xs md:text-[34px] lg:text-[34px]  lg:font-semibold md:leading-10">
              {cards[0].title}
            </p>
            <p className="lg:w-[432px] text-justify text-neutral-50 lg:text-xl hidden lg:flex font-normal lg:leading-[25px]">
              {cards[0].desc}
            </p>
          </div>
          <Link href={cards[0].url}>
            <div className="lg:p-4 p-[2.83px] md:p-4 bg-emerald-500 justify-center  border border-transparent items-center gap-2.5 inline-flex hover:border-black">
              <p className="text-right text-white text-[9.27px] md:text-lg lg:text-lg font-semibold leading-3">
                {cards[0].btn}
              </p>
            </div>
          </Link>
        </div>
        <div className="right flex flex-col lg:gap-x-[0.88rem] gap-2 lg:gap-y-[1.06rem] md:gap-x-[0.70rem] md:gap-y-[0.6rem] ">
          <div className="upper flex flex-wrap ml-[0.87rem] lg:gap-x-[0.88rem] gap-x-[4px] gap-y-[8px]  lg:gap-y-[1.06rem]">
            {cards?.map((data, index) => {
              if (index === 0 || index === cards.length - 1) {
                return null;
              }
              return (
                <ReusableCard
                  key={index}
                  img={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  index={index}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <div className="ml-[0.87rem]">
            <div
              className="w-[217px] h-[46px] md:w-[500px] bg-blend-hue  md:h-[100px] lg:w-[576px] lg:h-[170px] lg:px-[3rem] lg:py-[45px] py-[16px] px-[16px] bg-black bg-opacity-20 rounded-[3.5px]  md:rounded-[10px]  lg:rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex bg-top md:bg-[length:600px_180px] bg-[length:220px_60px] lg:bg-[length:600px_260px] cursor-pointer"
              style={{
                backgroundImage: `url(${cards[cards.length - 1].img.src})`,
                backgroundBlendMode: "hue",
              }}
              onClick={() => {
                handleClick(cards.length - 1);
              }}
            >
              <div className="w-fit h-[79px] flex-col justify-start items-start gap-1 flex">
                <p className="text-white w-fit md:text-[20px] lg:text-[26px] font-semibold text-[8.26px]">
                  {cards[cards.length - 1].title}
                </p>
                <p className="lg:w-[14rem] md:w-[300px] hidden  md:flex lg:flex text-neutral-50 text-base font-medium leading-snug md:leading-0">
                  {cards[cards.length - 1].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
