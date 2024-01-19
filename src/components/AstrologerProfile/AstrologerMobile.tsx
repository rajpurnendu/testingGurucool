"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import mostchoice from "../../../public/assets/AstrologerProfileIcons/mostchoice.png";
import bg from "../../../public/assets/AstrologerProfileIcons/astroImg.webp";
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
import AstroCard from "../homeC/astroCard";
import { FollowAstro, UnFollowAstro } from "@/lib/actions";
import { Get_ASTROLOGER_FEEDBACK } from "@/lib/data";

const AstrologerMobile = ({
  data,
  feedback,
  useraProfileId,
  loginToken,
  similar,
  isFollowing,
}: any) => {
  const [descLength, setdescLength] = useState(200);
  const [Sort, setSort] = useState("recent");
  const [feedbackData, setFeedbackdata] = useState<any>();
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

  const handleFeedback = async (
    id: number,
    sort: string,
    userId: string | undefined
  ) => {
    console.log(id, sort, userId);
    const feedbackAstro = await Get_ASTROLOGER_FEEDBACK(id, sort, userId);
    setFeedbackdata(feedbackAstro.feedback);
  };

  useEffect(() => {
    if (Sort == "recent") {
      handleFeedback(data.gid, "recent", useraProfileId);
      console.log("i am recent" + Sort);
      console.log(feedbackData);
    } else {
      handleFeedback(data.gid, "mostPopular", useraProfileId);
      console.log("i am most" + Sort);
      console.log(feedbackData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Sort]);

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
          {data.callAvailability === "online" ? (
            <div className="absolute  top-[75%]  left-[23%] md:left-[13%]">
              <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
            </div>
          ) : (
            <div className="absolute  top-[75%]  left-[23%] md:left-[13%]">
              <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  animate-ping shadow-lg shadow-black absolute bg-red-500 rounded-full" />
              <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  shadow-lg shadow-black absolute bg-red-500 rounded-full" />
            </div>
          )}
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
                !isFollowing ? (
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
                    <div
                      onClick={() => FollowAstro(loginToken, data.user.guru)}
                      className=" h-[26px] px-3 py-1 bg-violet-500 relative rounded-lg justify-center items-center gap-3 flex"
                    >
                      <div className="text-white text-sm font-medium leading-[17.50px]">
                        Follow
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[125px] h-[26px] justify-start items-center inline-flex">
                    <div className="w-[42px] h-[18px] relative">
                      <Image
                        className="w-[18px] h-[18px] left-[15%] top-0 absolute rounded-full border border-white"
                        src={AstroImg}
                        alt="img"
                      />

                      <Image
                        className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                        src={ProfileImg}
                        alt="img"
                      />

                      <Image
                        className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                        src={bg}
                        alt="img"
                      />
                    </div>
                    <div
                      onClick={() => UnFollowAstro(loginToken, data.user.guru)}
                      className="h-[26px] px-3 py-1 bg-red-500 relative rounded-lg justify-center items-center gap-3 flex"
                    >
                      <div className="text-white text-sm font-medium leading-[17.50px]">
                        Unfollow
                      </div>
                    </div>
                  </div>
                )
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
                  <div
                    onClick={() => setSort("mostPopular")}
                    className={`w-fit h-fit px-4 py-1.5 ${
                      Sort == "mostPopular"
                        ? "bg-emerald-500"
                        : "bg-white border-netural-500 border"
                    } rounded-md justify-center  items-center gap-2.5 inline-flex`}
                  >
                    <p
                      className={`${
                        Sort == "mostPopular"
                          ? "text-white"
                          : "text-neutral-500"
                      } text-xs font-semibold leading-[15px]`}
                    >
                      Most Popular
                    </p>
                  </div>

                  <div
                    onClick={() => setSort("recent")}
                    className={`${
                      Sort == "recent"
                        ? "bg-emerald-500"
                        : "bg-white border-netural-500 border"
                    } w-fit h-fit px-4 py-1.5 rounded-md border border-neutral-500 justify-center items-center gap-2.5 inline-flex`}
                  >
                    <p
                      className={`${
                        Sort == "recent" ? "text-white" : "text-neutral-500"
                      } text-xs font-semibold  leading-[15px]`}
                    >
                      Recent
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[332px] flex flex-col gap-5 overflow-y-scroll no-scrollbar">
              {feedbackData?.docs.map((datas: any) => (
                <div
                  key={datas._id}
                  className="flex gap-2 flex-col items-start"
                >
                  <div className="flex w-full items-start justify-between">
                    <div className="flex items-start gap-2">
                      <div className="flex items-center justify-center bg-black overflow-hidden rounded-full w-10 h-10">
                        <p className="text-white">
                          {datas.firstName.slice(0, 1)}
                          {datas.lastName.slice(0, 1)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5 items-start">
                        <p
                          className="text-neutral-800
  text-sm
  font-medium
  leading-[17.50px]"
                        >
                          {`${datas.firstName} ${datas.lastName}`}
                        </p>
                        <p
                          className="text-neutral-500
  text-xs
  font-normal
  leading-[15px]
  "
                        >
                          {formatDateString(datas.createdAt)}
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
                        {datas.rating}.0
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-neutral-500
  text-xs
  font-medium
  leading-[15px]"
                  >
                    {datas.goodFeedback || datas.badFeedback}
                  </p>
                  {datas.astrologerReply ? (
                    <div className="border-b border-zinc-300">
                      <div className="ml-[43px] mb-2  px-1 py-2 flex flex-col bg-zinc-300 bg-opacity-20 rounded-md justify-start items-start gap-2">
                        <div className="flex gap-1 flex-col items-start">
                          <p
                            className="text-neutral-800
  text-sm
  font-medium
  leading-[17.50px]"
                          >
                            {`${data.user.firstName} 
              ${data.user.lastName}`}
                          </p>
                          <p
                            className="text-neutral-500
  text-xs
  font-normal
  leading-[15px]"
                          >
                            {formatDateString(datas.updatedAt)}
                          </p>
                        </div>
                        <p
                          className="text-neutral-500
  text-xs
  font-medium
  leading-[15px]"
                        >
                          {datas.astrologerReply}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
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
          <Link
            href="/call-to-astrologers"
            className="text-neutral-800
            flex w-full items-end justify-end
text-xs
font-medium
mb-1
leading-[15px] text-right"
          >
            See all
          </Link>
        </div>
        <div className="overflow-x-scroll flex gap-5 no-scrollbar px-2">
          {similar.recommendedAstrologers.map((similarData: any) => (
            <AstroCard key={similarData._id} data={similarData} />
          ))}
        </div>
        <div>
          {data.callAvailability === "online" ? (
            <div className="w-[95%] flex justify-between items-center px-[18px] py-[9.5px] h-[60px] fixed bottom-2 left-2 mx-auto bg-emerald-500 rounded hover:shadow-lg">
              <div className="gap-5 flex items-center">
                <Image src={call} className="w-[25px] h-[25px]" alt="call" />
                <p
                  className="text-white
text-base
font-semibold"
                >
                  Call Now
                </p>
              </div>
              <div className="flex items-center flex-col">
                <p
                  className="text-white
               text-base
               font-semibold"
                >
                  ₹ 24/min
                </p>
                <p
                  className="text-white
             text-xs
             font-medium
             line-through
             leading-[15px]"
                >
                  ₹ 24/min
                </p>
              </div>
            </div>
          ) : (
            <div className="w-[95%] cursor-not-allowed flex justify-between items-center px-[18px] py-[9.5px] h-[60px] fixed bottom-2 left-2 mx-auto bg-zinc-300 rounded hover:shadow-lg">
              <div className="gap-5 flex items-center">
                <Image src={call} className="w-[25px] h-[25px]" alt="call" />
                <p
                  className="text-white
text-base
font-semibold"
                >
                  Call Now
                </p>
              </div>
              <div className="flex items-center flex-col">
                <p
                  className="text-white
                text-base
                font-semibold"
                >
                  ₹ 24/min
                </p>
                <p
                  className="text-white
              text-xs
              font-medium
              line-through
              leading-[15px]"
                >
                  ₹ 24/min
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AstrologerMobile;
