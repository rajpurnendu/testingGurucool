"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import mostchoice from "../../../public/assets/AstrologerProfileIcons/mostchoice.png";
import bg from "../../../public/assets/AstrologerProfileIcons/bg.png";
import ProfileImg from "../../../public/assets/AstrologerProfileIcons/profileImg.webp";
import AstroImg from "../../../public/assets/AstrologerProfileIcons/bg.png";
import star from "../../../public/assets/AstrologerProfileIcons/Star.webp";
import language from "../../../public/assets/AstrologerProfileIcons/Language.webp";
import clock from "../../../public/assets/AstrologerProfileIcons/time.webp";
import user from "../../../public/assets/AstrologerProfileIcons/user.webp";
import star2 from "../../../public/assets/AstrologerProfileIcons/start2.webp";
import star4 from "../../../public/assets/AstrologerProfileIcons/start4.webp";
import messge from "../../../public/assets/AstrologerProfileIcons/message.webp";
import call from "../../../public/assets/AstrologerProfileIcons/call.webp";
import heart from "../../../public/assets/AstrologerProfileIcons/heart.webp";
import marriage from "../../../public/assets/AstrologerProfileIcons/ring.webp";
import health from "../../../public/assets/AstrologerProfileIcons/health.webp";
import career from "../../../public/assets/AstrologerProfileIcons/career.webp";
import life from "../../../public/assets/AstrologerProfileIcons/life.webp";
import business from "../../../public/assets/AstrologerProfileIcons/ruppee.webp";
import star3 from "../../../public/assets/AstrologerProfileIcons/start3.webp";
import { profile } from "console";
import Link from "next/link";

const AstrologerMobile = ({ data, feedback, loginToken }: any) => {
  const [descLength, setdescLength] = useState(200);
  const [imgLength, setimgLength] = useState(4);
  const toggleDescription = () => {
    setdescLength(data.description.length);
  };

  const roundedRating = Math.floor(data.rating);

  const starArray = [];

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= roundedRating;

    starArray.push(
      <Image key={i} className="w-[14px] h-[14px]" alt="alt" src={star4} />
    );
  }

  function formatDateString(dateString: string) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getUTCFullYear();

    return `${month} ${year}`;
  }

  const Specialities: any = {
    Love: { img: heart, desc: "Relationship" },
    Marriage: { img: marriage, desc: "Kids,Divorce" },
    Health: { img: health, desc: "Physical,Mental" },
    Career: { img: career, desc: "Job, Education" },
    Life: { img: life, desc: "Money,Family" },
    Business: { img: business, desc: "Legal Matter" },
  };

  const toggleImgLength = () => {
    setimgLength(data.images.length);
  };
  function formatValue(value: number) {
    const formattedValue = (value / 1000).toFixed(1);
    return `${formattedValue}K`;
  }
  return (
    <div>
      <div className="mx-aut0 relative w-full md:hidden flex flex-col mt-[90px] my-5">
        <div className="relative">
          <Image
            src={data.backgroundBanner.image_Url}
            width="500"
            height="500"
            className="w-full h-[119px] md:h-[200px]"
            alt="backgroundImg"
          />
          <div className="overflow-hidden absolute md:top-[75%] top-[70%]  border-2 border-emerald-500 md:left-[4%] left-[8%] w-[80px] md:w-[100px] md:h-[100px] h-[80px] rounded-full">
            <Image
              className="relative w-20 h-20"
              width="100"
              height="100"
              src={data?.user?.avatar?.url}
              alt="profile"
            />
          </div>
          <div className="absolute  top-[75%]  left-[23%] md:left-[13%]">
            <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
            <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="w-full px-5 h-fit">
          <div className="flex w-full  items-end px-2.5 border-b border-dashed border-zinc-300 pb-1.5 justify-between">
            <div className="flex flex-col gap-0.5">
              <p
                className="text-neutral-800
text-xl
font-semibold"
              >
                {data.user.firstName}
                {data.user.lastName}
              </p>
              <div className="flex gap-1 items-center">
                <Image
                  src={language}
                  alt="language"
                  width="20"
                  height="20"
                  className="w-[16px] h-[16px]"
                />
                <p
                  className="text-neutral-500
text-xs
font-medium leading-none"
                >
                  {data.languages.join(",")}
                </p>
                <p
                  className="text-neutral-500
text-xs
font-medium leading-none"
                >
                  English
                </p>
              </div>
              <div className="flex gap-0.5">{starArray}</div>
            </div>
            <div className="flex flex-col items-center">
              {data.mostTrusted == true ? (
                <Image
                  src={mostchoice}
                  className="w-[80px] md:w-[100px] md:h-[100px] h-[80px]"
                  alt="most choice"
                />
              ) : (
                <Image
                  src={mostchoice}
                  className="w-[80px] invisible md:w-[100px] md:h-[100px] h-[80px]"
                  alt="most choice"
                />
              )}
              {loginToken ? (
                <div className="w-[125px] h-[26px] justify-start items-center inline-flex">
                  <div className="w-[42px] h-[18px] relative">
                    <Image
                      className="w-[18px] h-[18px] left-[15%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />

                    <Image
                      className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />

                    <Image
                      className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />
                  </div>
                  <div className="h-[26px] px-3 py-1 bg-violet-500 relative rounded-lg justify-center items-center gap-3 flex">
                    <div className="text-white text-sm font-medium leading-[17.50px]">
                      Follow
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-[125px] invisible h-[26px] justify-start items-center inline-flex">
                  <div className="w-[42px] h-[18px] relative">
                    <Image
                      className="w-[18px] h-[18px] left-[15%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />

                    <Image
                      className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />

                    <Image
                      className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                      src={ProfileImg}
                      alt="img"
                    />
                  </div>
                  <div className="h-[26px] px-3 py-1 bg-violet-500 relative rounded-lg justify-center items-center gap-3 flex">
                    <div className="text-white text-sm font-medium leading-[17.50px]">
                      Follow
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full my-5 mx-auto justify-center flex gap-[30px] items-center">
          <Link href="#about">
            <div className="w-[97px] md:w-[150px] h-[34px] md:h-[60px] px-10 py-2.5 bg-stone-300 hover:bg-emerald-500 rounded-md md:rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-base md:text-xl md:font-bold font-semibold">
                About
              </div>
            </div>
          </Link>

          <Link href="#review">
            <div className="w-[97px] md:w-[150px] h-[34px] md:h-[60px] px-10 py-2.5 bg-stone-300 hover:bg-emerald-500 rounded-md md:rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white md:text-xl md:font-bold  text-base font-semibold">
                Review
              </div>
            </div>
          </Link>
        </div>

        <div className=" gap-[6.23px] flex mx-auto mb-5 md:justify-center items-start">
          <div className="flex flex-col gap-1.5">
            <div className="min-w-[101.77px] h-[86px] px-2 py-[3px] bg-red-600 bg-opacity-10 rounded-md shadow flex-col justify-start items-center inline-flex">
              <p
                className="text-neutral-500
text-sm
font-semibold"
              >
                Experience
              </p>
              <div className="w-8 h-8 bg-black bg-opacity-5 rounded-2xl justify-center items-center flex">
                <p
                  className="text-black
text-xl
font-normal leading-loose
"
                >
                  🕒
                </p>
              </div>

              <div className="text-center text-neutral-700 text-lg font-semibold  leading-snug">
                {data.experience}+ Yrs
              </div>
            </div>
            <div className="min-w-[101.77px] h-[86px] px-2 py-[3px] bg-violet-500 bg-opacity-10 rounded-md shadow flex-col justify-start items-center inline-flex">
              <p
                className="text-neutral-500
text-sm
font-semibold"
              >
                Followers
              </p>
              <div className="w-8 h-8 bg-zinc-300 rounded-2xl justify-center items-center flex">
                <p
                  className="text-black
text-xl
font-normal leading-loose
"
                >
                  👥
                </p>
              </div>
              <div className="text-center text-neutral-700 text-lg font-semibold  leading-snug">
                {data.followersCount}
              </div>
            </div>
            <div className="min-w-[101.77px] h-[86px] px-2 py-[3px] bg-emerald-500 bg-opacity-10 rounded-md shadow flex-col justify-start items-center inline-flex">
              <p
                className="text-neutral-500
text-sm
font-semibold"
              >
                Client served
              </p>
              <div className="w-8 h-8 bg-black bg-opacity-5 rounded-2xl justify-center items-center flex">
                <p
                  className="text-black
text-xl
font-normal leading-loose
"
                >
                  🌟
                </p>
              </div>
              <div className="text-center text-neutral-700 text-lg font-semibold  leading-snug">
                {formatValue(data.served)}
              </div>
            </div>
          </div>
          <div className="w-[211px] overflow-hidden  md:max-w-[300px] h-[270px] p-2 bg-neutral-500 bg-opacity-10 rounded-lg shadow flex-col justify-center items-end gap-3">
            <p
              className=" text-neutral-700
text-xl
font-semibold"
            >
              Skills
            </p>
            <div className="overflow-y-scroll w-full scrollbar-webkit scrollbar-thin min-h-[200px] mt-2.5">
              {data.skills.map((data: string) => (
                <div
                  key={data}
                  className=" m-1 px-1 py-0.5 bg-white md:rounded-lg rounded-md border border-stone-300 justify-center items-center gap-1.5 inline-flex"
                >
                  <p className="text-neutral-700 md:text-lg text-sm font-normal leading-none">
                    {data}
                  </p>
                </div>
              ))}
            </div>
            {/* <p
            className="text-neutral-700
            w-full text-right
text-xs
font-semibold leading-[15px]"
          >
            See All
          </p> */}
          </div>
        </div>

        <div className="px-5 w-full mb-5 ">
          <div className="py-3 overflow-hidden w-[320px] mx-auto justify-center  rounded-lg border border-zinc-300 flex items-start flex-col ">
            <p
              className="text-neutral-700 ml-2
text-sm
font-semibold
"
            >
              Specialties
            </p>
            <div className="overflow-auto no-scrollbar w-full p-2 flex gap-2 items-start">
              {data.specialization.map((specialtyName: any) => {
                const specialityData = Specialities[specialtyName];

                if (specialityData) {
                  return (
                    <div
                      key={specialtyName}
                      className="min-w-[110px] h-20 px-2 py-1 bg-white rounded-lg shadow flex-col justify-center items-start gap-1 inline-flex"
                    >
                      <Image
                        className="w-[25px] h-[25px]"
                        alt="love"
                        src={specialityData.img}
                      />
                      <div className="flex flex-col gap-[7px] items-start">
                        <p
                          className="text-neutral-800
    text-sm
    font-semibold"
                        >
                          {specialtyName}
                        </p>
                        <p
                          id="about"
                          className="text-neutral-500
    text-xs
    font-semibold
    leading-[15px]"
                        >
                          {specialityData.desc}
                        </p>
                      </div>
                    </div>
                  );
                }

                return null; // Return null if specialityData is not found
              })}
            </div>
          </div>
        </div>

        <div className="px-5 w-full mb-5">
          <div className="py-3 overflow-hidden w-[320px] mx-auto justify-center gap-4  rounded-lg border border-zinc-300 flex items-start flex-col ">
            <p
              className="text-neutral-700 ml-2
text-sm
font-semibold
"
            >
              About Me
            </p>
            <p
              className="text-neutral-800 mx-[14px]
text-sm
font-normal
leading-none"
            >
              {data.description}
            </p>
            <p
              className="text-neutral-700 ml-2
text-sm
font-semibold
"
            >
              Images
            </p>
            <div className="overflow-auto  no-scrollbar w-full p-2 flex gap-2 items-start">
              {data.images.map((data: any) => (
                <Image
                  key={data._id}
                  src={data.url}
                  className="w-[82px] h-[84px] rounded-[5px]"
                  width="100"
                  height="100"
                  alt="profile"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full mb-5" id="review">
          <div className="pt-[22px] flex flex-col pb-[30px] px-[14px] overflow-hidden h-[498px] w-[320px] mx-auto gap-4  rounded-lg border border-zinc-300  items-start">
            <div className="border-b w-full block border-zinc-300">
              <div className="mb-[7px] flex items-center gap-2">
                <Image src={star3} className="w-[30px] h-[30px]" alt="star3" />
                <p
                  className="text-neutral-800
text-base
font-semibold"
                >
                  {data.rating.toFixed(1)}
                </p>
                <p
                  className="text-neutral-700
text-sm
font-normal
leading-none"
                >
                  {feedback.total} Review
                </p>
              </div>
            </div>
            <div className="block w-full">
              <div className="flex items-center justify-between">
                <p
                  className="text-neutral-700
text-sm
font-semibold"
                >
                  Review
                </p>
                <div className="flex gap-[11px]">
                  <div className="w-[109px] h-[27px] px-4 py-1.5 bg-emerald-500 rounded-md justify-center items-center gap-2.5 inline-flex">
                    <p className="text-white text-xs font-semibold leading-[15px]">
                      Most Popular
                    </p>
                  </div>

                  <div className="w-[73px] h-[27px] px-4 py-1.5 rounded-md border border-neutral-500 justify-center items-center gap-2.5 inline-flex">
                    <p className="text-neutral-500 text-xs font-semibold  leading-[15px]">
                      Recent
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[332px] flex flex-col gap-5 overflow-y-scroll no-scrollbar">
              {feedback.docs.map((data: any) => (
                <div key={data._id} className="flex gap-2 flex-col items-start">
                  <div className="flex w-full items-start justify-between">
                    <div className="flex items-start gap-2">
                      <div className="flex items-center justify-center bg-black overflow-hidden rounded-full w-10 h-10">
                        <p className="text-white">
                          {data.firstName.slice(0, 1)}
                          {data.lastName.slice(0, 1)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5 items-start">
                        <p
                          className="text-neutral-800
  text-sm
  font-medium
  leading-[17.50px]"
                        >
                          {`${data.firstName} ${data.lastName}`}
                        </p>
                        <p
                          className="text-neutral-500
  text-xs
  font-normal
  leading-[15px]
  "
                        >
                          {formatDateString(data.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[6px]">
                      <Image src={star4} className="w-4 h-4" alt="start" />

                      <p
                        className="text-neutral-700
  text-sm
  font-semibold"
                      >
                        {data.rating}.0
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-neutral-500
  text-xs
  font-medium
  leading-[15px]"
                  >
                    {data.goodFeedback || data.badFeedback}
                  </p>
                  <div className="border-b border-zinc-300">
                    <div className="ml-[43px] mb-2  px-1 py-2 flex flex-col bg-zinc-300 bg-opacity-20 rounded-md justify-start items-start gap-2">
                      <div className="flex gap-1 flex-col items-start">
                        <p
                          className="text-neutral-800
  text-sm
  font-medium
  leading-[17.50px]"
                        >
                          Astro Name
                        </p>
                        <p
                          className="text-neutral-500
  text-xs
  font-normal
  leading-[15px]"
                        >
                          March 2022
                        </p>
                      </div>
                      <p
                        className="text-neutral-500
  text-xs
  font-medium
  leading-[15px]"
                      >
                        Thank you for your feedback it was really great speaking
                        to you.More Text can be added here.
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="flex gap-2 flex-col items-start">
                <div className="flex w-full items-start justify-between">
                  <div className="flex items-start gap-2">
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={ProfileImg}
                      alt="user"
                    />
                    <div className="flex flex-col gap-1.5 items-start">
                      <p
                        className="text-neutral-800
text-sm
font-medium
leading-[17.50px]"
                      >
                        Name of User
                      </p>
                      <p
                        className="text-neutral-500
text-xs
font-normal
leading-[15px]
"
                      >
                        March 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[6px]">
                    <Image src={star4} className="w-4 h-4" alt="start" />

                    <p
                      className="text-neutral-700
text-sm
font-semibold"
                    >
                      5
                    </p>
                  </div>
                </div>
                <p
                  className="text-neutral-500
text-xs
font-medium
leading-[15px]"
                >
                  Excepteur sint occaecat cupidatat non pident, sunt in culpa
                  qui officia deserunt mollit anim id es Excepteur
                </p>
                <div className="border-b border-zinc-300">
                  <div className="ml-[43px] mb-2  px-1 py-2 flex flex-col bg-zinc-300 bg-opacity-20 rounded-md justify-start items-start gap-2">
                    <div className="flex gap-1 flex-col items-start">
                      <p
                        className="text-neutral-800
text-sm
font-medium
leading-[17.50px]"
                      >
                        Astro Name
                      </p>
                      <p
                        className="text-neutral-500
text-xs
font-normal
leading-[15px]"
                      >
                        March 2022
                      </p>
                    </div>
                    <p
                      className="text-neutral-500
text-xs
font-medium
leading-[15px]"
                    >
                      Thank you for your feedback it was really great speaking
                      to you.More Text can be added here.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <p
              className="text-center block w-full text-violet-500
text-base
font-semibold"
            >
              Read More
            </p>
          </div>
        </div>

        <div className="w-full block mb-5">
          <div className="flex items-start gap-[13px] justify-center mx-auto">
            <div className="px-3.5 py-2.5 bg-white rounded-[3px] border border-neutral-500 gap-[18px] flex items-center justify-start">
              <div>
                <p
                  className="text-neutral-500
text-sm
text-center
font-semibold"
                >
                  Next Available
                </p>
                <p
                  className="text-neutral-500
text-sm
text-center
font-semibold"
                >{`(3:15pm)`}</p>
              </div>
              <p
                className="text-emerald-500
text-base
text-center
font-semibold"
              >
                ₹ 124/min
              </p>
            </div>
            <div className="p-3.5 bg-violet-500 rounded-[3px] border border-neutral-500 justify-end items-center gap-[18px] flex">
              <p className="text-center text-white text-xs font-semibold  leading-[15px]">
                Notify <br />
                Astrologer
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto">
          <p
            className="text-neutral-800
text-sm
text-left
font-semibold"
          >
            Similar Astrologers
          </p>
          <p
            className="text-neutral-800
text-xs
font-medium
mb-1
leading-[15px] text-right"
          >
            See all
          </p>
        </div>
        <div className="overflow-x-scroll flex gap-5 no-scrollbar px-2">
          <div className="md:min-w-[288.46px] min-w-[180px] md:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow md:shadow-lg md:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="md:w-72 md:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] md:left-[80px] left-[30%] top-[20%] md:top-[57.17px] absolute">
              <div className="md:w-[116.01px] w-[75px] h-[75px] md:h-[116.01px] md:left-[-1.55px]  md:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="md:w-[105.92px] w-[68px] h-[68px] md:h-[105.92px] left-[4px] top-[4px] md:left-[4px] md:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="md:w-[139.03px] md:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] md:right-0 right-[-10%] top-[-1%] md:top-[4.12px] absolute text-center text-white text-xs md:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute md:gap-2 items-center w-full inline-block top-[50%] md:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                devesh
              </p>
              <p
                className="text-neutral-800
          text-center
          mt-[2px]
          md:mt-2

text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                sharma
              </p>
            </div>
            <div
              className="w-[100%]  
        md:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
            >
              <p
                className='text-neutral-500 text-center
        
          md:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          md:font-normal
          md:leading-[18.98px]"'
              >
                trot
              </p>
            </div>
            <div
              className="w-[100%] 
        md:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
            >
              <p
                className="text-neutral-500 
       text-center
md:text-[15.18px]
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[18.98px]"
              >
                hindi
              </p>
            </div>

            <div className="flex md:gap-[55.23px] gap-[33px] left-3 md:left-[8%] justify-between top-[80%] items-center absolute">
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Rating
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Price
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Exp.
              </p>
            </div>
            <div className="flex items-center absolute left-[6%] top-[87%] md:top-[85%]">
              <div className="w-fit flex flex-col  gap-0 items-center">
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-semibold
             md:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-normal
             md:leading-normal
             font-bold
             leading-[11px]"
                >
                  200
                </p>
              </div>
              <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
              <div className=" w-fit flex items-center">
                <p
                  className="text-emerald-500
text-sm
font-semibold
leading-snug
md:text-[21.26px]
md:font-medium
"
                >
                  ₹300/
                </p>
                <p
                  className="text-emerald-500
text-xs
md:text-base
md:font-semibold
md:leading-[20.88px]
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
                  md:text-base
md:leading-normal
font-bold
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="md:min-w-[288.46px] min-w-[180px] md:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow md:shadow-lg md:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="md:w-72 md:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] md:left-[80px] left-[30%] top-[20%] md:top-[57.17px] absolute">
              <div className="md:w-[116.01px] w-[75px] h-[75px] md:h-[116.01px] md:left-[-1.55px]  md:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="md:w-[105.92px] w-[68px] h-[68px] md:h-[105.92px] left-[4px] top-[4px] md:left-[4px] md:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="md:w-[139.03px] md:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] md:right-0 right-[-10%] top-[-1%] md:top-[4.12px] absolute text-center text-white text-xs md:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute md:gap-2 items-center w-full inline-block top-[50%] md:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                devesh
              </p>
              <p
                className="text-neutral-800
          text-center
          mt-[2px]
          md:mt-2

text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                sharma
              </p>
            </div>
            <div
              className="w-[100%]  
        md:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
            >
              <p
                className='text-neutral-500 text-center
        
          md:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          md:font-normal
          md:leading-[18.98px]"'
              >
                trot
              </p>
            </div>
            <div
              className="w-[100%] 
        md:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
            >
              <p
                className="text-neutral-500 
       text-center
md:text-[15.18px]
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[18.98px]"
              >
                hindi
              </p>
            </div>

            <div className="flex md:gap-[55.23px] gap-[33px] left-3 md:left-[8%] justify-between top-[80%] items-center absolute">
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Rating
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Price
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Exp.
              </p>
            </div>
            <div className="flex items-center absolute left-[6%] top-[87%] md:top-[85%]">
              <div className="w-fit flex flex-col  gap-0 items-center">
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-semibold
             md:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-normal
             md:leading-normal
             font-bold
             leading-[11px]"
                >
                  200
                </p>
              </div>
              <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
              <div className=" w-fit flex items-center">
                <p
                  className="text-emerald-500
text-sm
font-semibold
leading-snug
md:text-[21.26px]
md:font-medium
"
                >
                  ₹300/
                </p>
                <p
                  className="text-emerald-500
text-xs
md:text-base
md:font-semibold
md:leading-[20.88px]
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
                  md:text-base
md:leading-normal
font-bold
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="md:min-w-[288.46px] min-w-[180px] md:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow md:shadow-lg md:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="md:w-72 md:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] md:left-[80px] left-[30%] top-[20%] md:top-[57.17px] absolute">
              <div className="md:w-[116.01px] w-[75px] h-[75px] md:h-[116.01px] md:left-[-1.55px]  md:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="md:w-[105.92px] w-[68px] h-[68px] md:h-[105.92px] left-[4px] top-[4px] md:left-[4px] md:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="md:w-[139.03px] md:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] md:right-0 right-[-10%] top-[-1%] md:top-[4.12px] absolute text-center text-white text-xs md:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute md:gap-2 items-center w-full inline-block top-[50%] md:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                devesh
              </p>
              <p
                className="text-neutral-800
          text-center
          mt-[2px]
          md:mt-2

text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                sharma
              </p>
            </div>
            <div
              className="w-[100%]  
        md:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
            >
              <p
                className='text-neutral-500 text-center
        
          md:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          md:font-normal
          md:leading-[18.98px]"'
              >
                trot
              </p>
            </div>
            <div
              className="w-[100%] 
        md:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
            >
              <p
                className="text-neutral-500 
       text-center
md:text-[15.18px]
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[18.98px]"
              >
                hindi
              </p>
            </div>

            <div className="flex md:gap-[55.23px] gap-[33px] left-3 md:left-[8%] justify-between top-[80%] items-center absolute">
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Rating
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Price
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Exp.
              </p>
            </div>
            <div className="flex items-center absolute left-[6%] top-[87%] md:top-[85%]">
              <div className="w-fit flex flex-col  gap-0 items-center">
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-semibold
             md:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-normal
             md:leading-normal
             font-bold
             leading-[11px]"
                >
                  200
                </p>
              </div>
              <div className="md:w-[30.90px] w-[30px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
              <div className=" w-fit flex items-center">
                <p
                  className="text-emerald-500
text-sm
font-semibold
leading-snug
md:text-[21.26px]
md:font-medium
"
                >
                  ₹300/
                </p>
                <p
                  className="text-emerald-500
text-xs
md:text-base
md:font-semibold
md:leading-[20.88px]
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
                  md:text-base
md:leading-normal
font-bold
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="md:min-w-[288.46px] min-w-[180px] md:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow md:shadow-lg md:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="md:w-72 md:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] md:left-[80px] left-[30%] top-[20%] md:top-[57.17px] absolute">
              <div className="md:w-[116.01px] w-[75px] h-[75px] md:h-[116.01px] md:left-[-1.55px]  md:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="md:w-[105.92px] w-[68px] h-[68px] md:h-[105.92px] left-[4px] top-[4px] md:left-[4px] md:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] md:left-[86.51px] left-[45%] top-[-2%] md:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="md:w-[139.03px] md:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] md:right-0 right-[-10%] top-[-1%] md:top-[4.12px] absolute text-center text-white text-xs md:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute md:gap-2 items-center w-full inline-block top-[50%] md:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                devesh
              </p>
              <p
                className="text-neutral-800
          text-center
          mt-[2px]
          md:mt-2

text-sm
font-medium
md:text-[21.26px]
leading-[17.50px]"
              >
                sharma
              </p>
            </div>
            <div
              className="w-[100%]  
        md:top-[58%]
        top-[66%] 
        
         absolute inline-block items-center justify-center"
            >
              <p
                className='text-neutral-500 text-center
        
          md:text-[15.18px]
          text-xs
          font-medium
          leading-[15px]
          md:font-normal
          md:leading-[18.98px]"'
              >
                trot
              </p>
            </div>
            <div
              className="w-[100%] 
        md:top-[67%]
      
        top-[72%] absolute inline-block items-center justify-center"
            >
              <p
                className="text-neutral-500 
       text-center
md:text-[15.18px]
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[18.98px]"
              >
                hindi
              </p>
            </div>

            <div className="flex md:gap-[55.23px] gap-[33px] left-3 md:left-[8%] justify-between top-[80%] items-center absolute">
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Rating
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Price
              </p>
              <p
                className="text-neutral-500
md:text-base
text-xs
font-normal
leading-[15px]
md:font-semibold
md:leading-[20.88px]"
              >
                Exp.
              </p>
            </div>
            <div className="flex items-center absolute left-[6%] top-[87%] md:top-[85%]">
              <div className="w-fit flex flex-col  gap-0 items-center">
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-semibold
             md:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
                  text-xs
                  md:text-base
             md:font-normal
             md:leading-normal
             font-bold
             leading-[11px]"
                >
                  200
                </p>
              </div>
              <div className="w-[30.90px] h-[0px]  rotate-90 border-2 border-zinc-300"></div>
              <div className=" w-fit flex items-center">
                <p
                  className="text-emerald-500
text-sm
font-semibold
leading-snug
md:text-[21.26px]
md:font-medium
"
                >
                  ₹300/
                </p>
                <p
                  className="text-emerald-500
text-xs
md:text-base
md:font-semibold
md:leading-[20.88px]
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
                  md:text-base
md:leading-normal
font-bold
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[60px] fixed bottom-0 bg-emerald-500 rounded">
            <div></div>

            <div className="">
              <p>Call Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerMobile;
