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
    <div className=" w-auto xl:w-[72rem] mx-auto mt-[36px] xl:mt-[3.75rem]">
      <div className="px-[20px]">
        <h2 className="text-center text-white xl:text-[2.125rem] text-base font-[500] xl:mb-[20px]">
          Services
        </h2>
        <p
          className="text-center  text-[#d9d9d9]
xl:text-xl
font-normal
xl:leading-[25px] text-sm  xl:mb-[1.87rem] mb-[1rem]"
        >
          We provide all astrology-based services here at Gurucool, whether
          astrological consultations, gods and devotion, or blogs.
        </p>
      </div>

      <div className="flex mx-auto pl-1 xl:pl-0 md:pl-0 justify-center xl:px-0 md:px-[0px]">
        <div
          className="md:min-w-[220px] xl:w-[562px] bg-blend-darken  w-[100px]  px-[11.52px] xl:px-[65px] xl:py-[50px] py-[30px] bg-black bg-opacity-20 md:rounded-xl xl:rounded-xl rounded-[3.5px] gap-[15px] justify-center items-end xl:gap-[85px] flex flex-col bg-bottom xl:bg-center bg-cover md:bg-center"
          style={{
            backgroundImage: `url(${cards[0].img.src})`,
            // backgroundBlendMode: "multiply",
          }}
          onClick={() => {
            handleClick(0);
          }}
        >
          <div className="self-stretch xl:flex-col xl:justify-start xl:items-start xl:gap-4 xl:flex ">
            <p className="xl:w-52 md:text-left flex justify-center items-center  mt-[20px] xl:mt-[0px] text-white text-xs md:text-[34px] xl:text-[34px]  xl:font-[500] md:leading-10">
              {cards[0].title}
            </p>
            <p className="xl:w-[432px] text-justify text-neutral-50 xl:text-xl hidden xl:flex font-normal xl:leading-[25px] ">
              {cards[0].desc}
            </p>
          </div>
          <Link href={cards[0].url}>
            <div className="xl:p-4 p-[2.83px] md:p-4 bg-emerald-500 justify-center   items-center gap-2.5 inline-flex hover:shadow-lg transition duration-300 ease-in-out">
              <p className="text-right text-white text-[9.27px] md:text-lg xl:text-lg font-semibold leading-3">
                {cards[0].btn}
              </p>
            </div>
          </Link>
        </div>
        <div className="right flex justify-center flex-col xl:gap-x-[0.88rem] gap-2 xl:gap-y-[1.06rem] md:gap-x-[0.70rem] md:gap-y-[0.6rem] ">
          <div className=" grid grid-cols-2 ml-2 gap-2 ">
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
          <div className="xl:ml-[0.87rem] ml-[8px]">
            <div
              className="w-[220px] h-[46px] md:w-[500px] bg-blend-hue  md:h-[100px] xl:w-[576px] xl:h-[170px] xl:px-[3rem] xl:py-[45px] py-[16px] px-[16px] bg-black bg-opacity-20 rounded-[3.5px]  md:rounded-[10px]  xl:rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex bg-top md:bg-[length:600px_180px] bg-[length:220px_60px] xl:bg-[length:600px_260px] cursor-pointer"
              style={{
                backgroundImage: `url(${cards[cards.length - 1].img.src})`,
                backgroundBlendMode: "multiply",
              }}
              onClick={() => {
                handleClick(cards.length - 1);
              }}
            >
              <div className="w-fit h-[79px] flex-col justify-start items-start gap-1 flex">
                <p className="text-white w-fit md:text-[20px] xl:text-[26px] font-semibold text-[8.26px]">
                  {cards[cards.length - 1].title}
                </p>
                <p className="xl:w-[14rem] md:w-[300px] hidden  md:flex xl:flex text-neutral-50 text-base font-medium leading-snug md:leading-0">
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
