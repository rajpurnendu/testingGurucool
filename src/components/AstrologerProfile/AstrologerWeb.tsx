"use client";
import React, { use, useState } from "react";

import Image from "next/image";
import { Get_ASTROLOGER_FEEDBACK } from "@/lib/data";
import call2 from "../../../public/assets/AstrologerProfileIcons/call2.svg";
import checkicon from "../../../public/assets/AstrologerProfileIcons/check.png";
import ProfileImg from "../../../public/assets/AstrologerProfileIcons/profileImg.webp";
import AstroImg from "../../../public/assets/AstrologerProfileIcons/astroImg.webp";
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
import Link from "next/link";
import AstroCard from "../homeC/astroCard";
import { FollowAstro, UnFollowAstro } from "@/lib/actions";
import { getUserprofile } from "@/lib/data";

const AstrologerWeb = ({
  data,
  feedback,
  loginToken,
  similar,
  isFollowing,
}: any) => {
  const [descLength, setdescLength] = useState(200);
  const [imgLength, setimgLength] = useState(4);
  const toggleDescription = () => {
    setdescLength(data.description.length);
  };

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

  function formatDateString(dateString: string) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getUTCFullYear();

    return `${month} ${year}`;
  }
  return (
    <div className="my-[90px] mx-auto max-w-[72rem] hidden  md:flex items-st flex-col justify-start gap-10">
      <div className="bg-gradient-to-r  xl:max-w-[72rem] from-violet-100 via-white to-white rounded-md shadow-md  items-end md:flex md:gap-[20px] xl:gap-[64.33px] p-[20px] lg:p-[38.38px] mx-auto">
        <div className="flex flex-col items-center relative gap-[18.38px]">
          <div className="overflow-hidden  w-[183px] h-[183px] rounded-full flex items-center justify-center">
            <Image
              src={data?.user?.avatar?.url}
              className="w-[183px] h-[183px]"
              width="138"
              height="138"
              alt="profile"
            />
          </div>
          {data.mostTrusted == true ? (
            <div className="absolute bottom-[36%] py-[5px] gap-2 items-center flex  px-[6px] rounded-bl-[24px] rounded-tr-[10px] bg-[#965EFB]">
              <Image src={checkicon} className="w-[22px] h-[22px]" alt="icon" />
              <p
                className="text-stone-300
text-[22.97px]
font-semibold"
              >
                Most Choice
              </p>
            </div>
          ) : null}

          <div className="flex gap-[10px]">
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
          </div>
          {loginToken && !isFollowing ? (
            <div
              onClick={() => FollowAstro(loginToken, data.user.guru)}
              className="cursor-pointer hover:shadow-lg text-[23.92px] font-semibold py-[4px] px-[16.75px] text-white bg-emerald-500 rounded-md"
            >
              Follow
            </div>
          ) : (
            <div
              onClick={() => UnFollowAstro(loginToken, data.user.guru)}
              className="cursor-pointer hover:shadow-lg text-[23.92px] font-semibold py-[4px] px-[16.75px] text-white bg-red-500 rounded-md"
            >
              UnFollow
            </div>
          )}
        </div>
        <div className="flex flex-col items-start gap-[42.5px] xl:w-[601px]">
          <div className="flex flex-col gap-[18.38px] items-start">
            <h1
              className="text-neutral-800
text-[34px]
font-semibold"
            >
              {`${data.user.firstName} 
              ${data.user.lastName}`}
            </h1>
            <div className=" flex gap-[10px] items-center">
              <Image src={language} width="30" height="30" alt="langugage" />
              <p
                className="
              text-neutral-500
              text-md
              font-semibold
              leading-[25px]
              "
              >
                {data.languages.join(",")}
              </p>
            </div>
          </div>
          <div className="p-[16px] w-fit flex items-center justify-center border-zinc-300 border rounded-md bg-white gap-[10px] lg:gap-[24px]">
            <div className="w-fit flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={clock} alt="time" />
              <p
                className="
                text-zinc-500
                text-md
                font-semibold
                leading-[25px]"
              >
                Experience
              </p>
              <p
                className="
              text-violet-500
              lg:text-[34px]
              text-[20px]

              font-semibold
              "
              >
                {data.experience}+ Yrs
              </p>
            </div>
            <div className="w-[0] h-[120px] border border-stone-300"></div>
            <div className=" flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={user} alt="time" />
              <p
                className="
                text-zinc-500
                text-md
                font-semibold
                leading-[25px]"
              >
                Followers
              </p>
              <p
                className="
                text-amber-500
                lg:text-[34px]
                text-[20px]
              font-semibold
              "
              >
                {data.followersCount}
              </p>
            </div>
            <div className="w-[0] h-[120px]  border border-stone-300"></div>
            <div className=" flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={star2} alt="time" />
              <p
                className="
                text-md
                text-center
                block
                w-full
                text-zinc-500

                font-semibold
                
                leading-[25px]"
              >
                Clients Served
              </p>
              <p
                className="
                text-emerald-500
              
                lg:text-[34px]
                text-[20px]
              font-semibold
              "
              >
                {formatValue(data.served)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex xl:gap-[36.75px] gap-4 flex-col">
          <div className="cursor-not-allowed hover:shadow-lg gap-[18px] w-[140px] lg:w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-neutral-200 rounded-tl-[6.89px] rounded-bl-[6.89px]">
            <Image
              src={messge}
              alt="messge"
              className="w-25 h-25 lg:w-29 lg:h-29"
              width="29"
              height="29"
            />
            <div>
              <p
                className="text-zinc-500
lg:text-lg
text-sm
font-medium
leading-relaxed"
              >
                Offline
              </p>
              <p
                className="
              text-zinc-500
              lg:text-lg
text-sm
              font-medium
            
              leading-relaxed"
              >
                ₹ 24/min
              </p>
            </div>
          </div>
          {data.callAvailability === "online" ? (
            <div className="cursor-pointer hover:shadow-lg gap-[18px] w-[140px] lg:w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-emerald-500 rounded-tl-[6.89px] rounded-bl-[6.89px]">
              <Image
                src={call}
                className="text-white w-25 h-25 lg:w-29 lg:h-29"
                alt="messge"
                width="29"
                height="29"
              />
              <div>
                <p
                  className="text-white
                lg:text-lg
                text-left
                text-sm
font-medium
leading-relaxed"
                >
                  call now
                </p>
                <p
                  className="
              text-white
              lg:text-lg
text-sm
              font-medium
            
              leading-relaxed"
                >
                  ₹{data.fee}/min
                </p>
              </div>
            </div>
          ) : (
            <div className="cursor-not-allowed hover:shadow-lg gap-[18px] w-[140px] lg:w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-neutral-200 rounded-tl-[6.89px] rounded-bl-[6.89px]">
              <Image
                src={call2}
                className="text-white w-25 h-25 lg:w-29 lg:h-29"
                alt="messge"
                width="29"
                height="29"
              />
              <div>
                <p
                  className="text-zinc-500
                lg:text-lg
                text-left
                text-sm
font-medium
leading-relaxed"
                >
                  Offline
                </p>
                <p
                  className="
                  text-zinc-500
              lg:text-lg
text-sm
              font-medium
            
              leading-relaxed"
                >
                  ₹{data.fee}/min
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className=" gap-[16px] md:w-auto xl:max-w-[72rem] rounded-2xl p-6  border-2 items-start flex flex-col  border-zinc-300">
          <h2
            className="text-neutral-700
          w-full
text-[26px]
text-center
font-semibold"
          >
            About Me
          </h2>
          <p className={` text-stone-600 text-base font-medium leading-snug`}>
            {data.description.slice(0, descLength)}
            {descLength == data.description.length ? (
              <span
                onClick={() => setdescLength(200)}
                className="text-violet-500
cursor-pointer
text-lg
font-medium"
              >
                {" "}
                Read Less
              </span>
            ) : (
              <span
                onClick={toggleDescription}
                className="text-violet-500
cursor-pointer
text-lg
font-medium"
              >
                {" "}
                Read More
              </span>
            )}
          </p>
          <div className="flex items-center justify-center gap-4 overflow-x-scroll no-scrollbar">
            {data.images.slice(0, imgLength).map((data: any) => (
              <Image
                key={data._id}
                src={data.url}
                width="107"
                className="w-[107px] h-[107px]"
                height="117"
                alt="astroImg"
              />
            ))}
          </div>
          {data.images.length == imgLength ? (
            <p
              className="cursor-pointer w-full text-right text-neutral-800
text-lg
font-semibold"
              onClick={() => setimgLength(4)}
            >
              See less
            </p>
          ) : (
            <p
              className="cursor-pointer w-full text-right text-neutral-800
text-lg
font-semibold"
              onClick={toggleImgLength}
            >
              See all
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-[10px] lg:gap-[32px] mx-auto  xl:max-w-[72rem] lg:justify-center items-start">
        <div className="flex flex-col items-start gap-2">
          <h3
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Specialities
          </h3>
          <div className="rounded-md xl:w-[556px] md:w-[400px] xl:min-h-[359px]  flex-wrap shadow justify-start inline-flex gap-[26px] items-start p-4">
            {data.specialization.map((specialtyName: any) => {
              const specialityData = Specialities[specialtyName];

              if (specialityData) {
                return (
                  <div
                    key={specialtyName}
                    className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex"
                  >
                    <Image
                      src={specialityData.img}
                      height="32"
                      width="32"
                      alt="heart"
                    />
                    <div>
                      <p className="text-neutral-800 text-lg font-semibold">
                        {specialtyName}
                      </p>
                      <p className="text-neutral-500 text-base font-medium leading-snug">
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
        <div className="flex flex-col items-start gap-2">
          <h3
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Skills
          </h3>
          <div className="lg:w-[558px] md:w-[350px] overflow-y-scroll scrollbar-thin scrollbar-webkit h-[460px] xl:h-[359.22px] p-2 items-start bg-white rounded-md shadow  flex  flex-wrap gap-2">
            {data.skills.map((data: string) => (
              <div
                key={data}
                className="px-6 w-fit py-3 h-fit bg-zinc-100 rounded-[64px] justify-center items-center gap-2.5 flex"
              >
                <div className=" text-neutral-500 text-base font-medium  leading-snug">
                  {data}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[72rem] w-auto mx-auto">
        <div className="flex items-start md:max-w-[72rem]  xl:min-w-[72rem]  gap-4 flex-col">
          <h3
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Reviews
          </h3>
          <div className="py-8 px-16 scrollbar-thin scrollbar-webkit max-w-[792px] overflow-y-scroll sticky overflow-x-hidden max-h-[1502px] bg-white rounded-[10px] shadow justify-start flex-col items-start gap-10 flex">
            <div className="border-b pb-3 border-gray-200 w-full flex  gap-[195px] items-center">
              <div className="flex items-center gap-3">
                <Image src={star3} width="30" height="30" alt="star" />
                <h3
                  className="text-neutral-800
text-[26px]
font-bold"
                >
                  {data.rating.toFixed(1)}
                </h3>
                <p
                  className="text-zinc-500
text-base
font-medium"
                >
                  {feedback.total} Review
                </p>
              </div>

              <div className="flex gap-2">
                <div className="w-[79px] h-[30px] px-4 py-1.5 rounded-md border border-neutral-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-500 text-sm font-medium leading-[17.50px]">
                    Recent
                  </div>
                </div>
                <div className="w-[121px] h-[30px] px-4 py-1.5 bg-emerald-500 rounded-md justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-sm font-medium  leading-[17.50px]">
                    Most Popular
                  </div>
                </div>
              </div>
            </div>
            {feedback.docs.map((datas: any) => (
              <div
                key={datas._id}
                className="flex flex-col gap-4 border-b border-gray-200 pb-4"
              >
                <div className="w-full items-start justify-between flex gap-[358px]">
                  <div className="flex gap-4 items-start">
                    <div className="flex items-center justify-center bg-black overflow-hidden rounded-full w-[60px] h-[60px]">
                      <p className="text-white">
                        {datas.firstName.slice(0, 1)}
                        {datas.lastName.slice(0, 1)}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <p
                        className="text-neutral-800
  text-lg
  font-medium"
                      >
                        {`${datas.firstName} ${datas.lastName}`}
                      </p>
                      <p
                        className="text-stone-300
  text-sm
  font-medium
  "
                      >
                        {formatDateString(datas.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[6px]">
                    <Image
                      src={star4}
                      className="w-5 h-5"
                      width="24"
                      height="24"
                      alt="star"
                    />
                    <p
                      className="text-stone-600
  text-base
  font-bold"
                    >
                      {datas.rating}.0
                    </p>
                  </div>
                </div>
                <p
                  className="text-stone-600
  text-base
  font-medium"
                >
                  {datas.goodFeedback || datas.badFeedback}
                </p>
                <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
  text-base
  font-semibold"
                    >
                      {`${data.user.firstName} 
              ${data.user.lastName}`}
                    </p>
                    <p
                      className="text-neutral-500
  text-sm
  font-normal leading-none"
                    >
                      {formatDateString(datas.createdAt)}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-neutral-500
                  text-base
                  font-medium
                  leading-snug"
                    >
                      Thank you for your feedback it was really great speaking
                      to you.
                    </p>
                    <p
                      className="text-neutral-500
                  text-base
                  font-medium
                  leading-snug"
                    >
                      More Text can be added here. Thank you for your feedback
                      it was really great speaking to you.
                    </p>
                    <p
                      className="text-neutral-500
  text-base
  font-medium
  leading-snug"
                    >
                      More Text can be added here.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start mx-auto gap-4 justify-center w-auto xl:max-w-[972px] flex-col">
        <p
          className="text-neutral-800
text-[26px]
font-semibold"
        >
          Similar Astrologers
        </p>
        <Link
          href="/call-to-astrologers"
          className="text-right w-full text-md text-neutral-800 font-semibold leading-[25px]"
        >
          See all
        </Link>
        <div className="flex gap-[45px] md:max-w-[768px] lg:max-w-[972px]  no-scrollbar overflow-x-scroll mx-auto items-center px-[20px]">
          {similar.recommendedAstrologers.map((similarData: any) => (
            <AstroCard key={similarData._id} data={similarData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstrologerWeb;
