import React, { use } from "react";
import Image from "next/image";
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

const AstrologerWeb = () => {
  return (
    <div className="my-[90px] mx-auto max-w-[72rem]  md:flex items-st flex-col justify-start gap-10">
      <div className="bg-gradient-to-r max-w-[72rem] from-violet-100 via-white to-white rounded-xl shadow-md  items-end md:flex gap-[64.33px] p-[38.38px]  mx-auto">
        <div className="flex flex-col items-center gap-[18.38px]">
          <div className="overflow-hidden w-[183px] h-[183px] rounded-full flex items-center justify-center">
            <Image
              src={ProfileImg}
              className="w-[183px] h-[183px]"
              width="138"
              height="138"
              alt="profile"
            />
          </div>
          <div className="flex gap-[10px]">
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
            <Image src={star} className="w-[31px] h-[31px]" alt="alt" />
          </div>
          <div className="cursor-pointer hover:shadow-lg text-[23.92px] font-semibold py-[4px] px-[16.75px] text-white bg-emerald-500 rounded-md">
            Follow
          </div>
        </div>
        <div className="flex flex-col items-start gap-[42.5px] w-[601px]">
          <div className="flex flex-col gap-[18.38px] items-start">
            <h1
              className="text-neutral-800
text-[34px]
font-semibold"
            >
              Astrologer’s name here
            </h1>
            <div className=" flex gap-[10px] items-center">
              <Image src={language} width="30" height="30" alt="langugage" />
              <p
                className="
              text-neutral-500
              text-xl
              font-semibold
              leading-[25px]
              "
              >
                Hindi, English, Kannada, Telugu
              </p>
            </div>
          </div>
          <div className="p-[16px] w-fit flex items-center justify-center border-zinc-300 border rounded-md bg-white gap-[24px]">
            <div className="w-fit flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={clock} alt="time" />
              <p
                className="
                text-zinc-500
                text-xl
                font-semibold
                leading-[25px]"
              >
                Experience
              </p>
              <p
                className="
              text-violet-500
              text-[34px]
              font-semibold
              "
              >
                12+ Yrs.
              </p>
            </div>
            <div className="w-[0] h-[120px] border border-stone-300"></div>
            <div className="w-fit flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={user} alt="time" />
              <p
                className="
                text-zinc-500
                text-xl
                font-semibold
                leading-[25px]"
              >
                Followers
              </p>
              <p
                className="
                text-amber-500
              text-[34px]
              font-semibold
              "
              >
                67
              </p>
            </div>
            <div className="w-[0] h-[120px]  border border-stone-300"></div>
            <div className="w-fit flex flex-col gap-[12px] items-center justify-center">
              <Image width="36" height="36" src={star2} alt="time" />
              <p
                className="
                text-xl
                text-zinc-500

                font-semibold
                leading-[25px]"
              >
                Clients Served
              </p>
              <p
                className="
                text-emerald-500
              
              text-[34px]
              font-semibold
              "
              >
                37K
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[36.75px] flex-col">
          <div className="cursor-pointer hover:shadow-lg gap-[18px] w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-neutral-200 rounded-tl-[6.89px] rounded-bl-[6.89px]">
            <Image src={messge} alt="messge" width="29" height="29" />
            <div>
              <p
                className="text-zinc-500
text-lg
font-medium
leading-relaxed"
              >
                Offline
              </p>
              <p
                className="
              text-zinc-500
              text-lg
              font-medium
            
              leading-relaxed"
              >
                ₹ 24/min
              </p>
            </div>
          </div>
          <div className="cursor-pointer hover:shadow-lg gap-[18px] w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-emerald-500 rounded-tl-[6.89px] rounded-bl-[6.89px]">
            <Image
              src={call}
              className="text-white"
              alt="messge"
              width="29"
              height="29"
            />
            <div>
              <p
                className="text-white
text-lg
font-medium
leading-relaxed"
              >
                Call Now
              </p>
              <p
                className="
              text-white
              text-lg
              font-medium
            
              leading-relaxed"
              >
                ₹ 24/min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-[16px] max-w-[72rem] rounded-2xl p-6  border-2 items-start flex flex-col  border-zinc-300  ">
        <h2
          className="text-neutral-700
          w-full
text-[26px]
text-center
font-semibold"
        >
          About Me
        </h2>
        <p
          className="text-stone-600
text-base
font-medium
leading-snug"
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id
          esExcepteur sint occaecat cupid Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id esExcepteur sint occaecat cupid
          Excepteur{"  "}
          <span
            className="text-violet-500
            cursor-pointer
text-lg
font-medium"
          >
            Read More
          </span>
        </p>
        <div className="flex items-center justify-center gap-4">
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
          <Image src={AstroImg} width="107" height="117" alt="astroImg" />
        </div>
        <h3
          className="cursor-pointer w-full text-right text-neutral-800
text-lg
font-semibold"
        >
          See all
        </h3>
      </div>
      <div className="flex gap-[32px] mx-auto max-w-[72rem] justify-center items-center">
        <div className="flex flex-col items-start gap-2">
          <h3
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Specialities
          </h3>
          <div className="rounded-xl w-[556px] min-h-[359px]  flex-wrap shadow justify-start inline-flex gap-[26px] items-start p-4">
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={heart} height="32" width="32" alt="heart" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Love
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Relationship
                </p>
              </div>
            </div>
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={marriage} height="32" width="32" alt="marriage" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Marriage
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Kids, Divorce
                </p>
              </div>
            </div>
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={health} height="32" width="32" alt="health" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Health
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Physical, Mental
                </p>
              </div>
            </div>
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={career} height="32" width="32" alt="career" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Career
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Job, Education
                </p>
              </div>
            </div>
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={life} height="32" width="32" alt="life" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Life
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Money, Family
                </p>
              </div>
            </div>
            <div className="p-4 min-w-[153px] rounded-2xl border border-stone-300 flex-col justify-center items-start gap-2 inline-flex">
              <Image src={business} height="32" width="32" alt="business" />
              <div>
                <p
                  className="text-neutral-800
text-lg
font-semibold
"
                >
                  Business
                </p>
                <p
                  className="text-neutral-500
text-base
font-medium leading-snug"
                >
                  Legal Matter
                </p>
              </div>
            </div>
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
          <div className="w-[558px] h-[359.22px] p-2 items-start bg-white rounded-xl shadow  flex  flex-wrap gap-2">
            <div className="px-6 w-fit py-3 h-fit bg-zinc-100 rounded-[64px] justify-center items-center gap-2.5 flex">
              <div className=" text-neutral-500 text-base font-medium  leading-snug">
                Vedic Astrology
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-[72rem] mx-auto">
        <div className="flex items-start min-w-[72rem]  gap-4 flex-col">
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
                  5.0
                </h3>
                <p
                  className="text-zinc-500
text-base
font-medium"
                >
                  (500) Review
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
              <div className="w-full items-start flex gap-[358px]">
                <div className="flex gap-4 items-start">
                  <div className="overflow-hidden rounded-full w-[60px] h-[60px]">
                    <Image
                      src={ProfileImg}
                      width="60"
                      height="60"
                      alt="profile"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <p
                      className="text-neutral-800
text-lg
font-medium"
                    >
                      Name of User
                    </p>
                    <p
                      className="text-stone-300
text-sm
font-medium
"
                    >
                      March 2022
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
                    5.0
                  </p>
                </div>
              </div>
              <p
                className="text-stone-600
text-base
font-medium"
              >
                Excepteur sint occaecat cupidatat non pident, sunt in culpa qui
                officia wfe eedeserunt mollit anim id es Excepteur{" "}
              </p>
              <div className="p-1.5 bg-zinc-300 bg-opacity-20 rounded-md flex flex-col justify-start items-start gap-3">
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-neutral-800
text-base
font-semibold"
                  >
                    Astro Name
                  </p>
                  <p
                    className="text-neutral-500
text-sm
font-normal leading-none"
                  >
                    March 2022
                  </p>
                </div>
                <div>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    Thank you for your feedback it was really great speaking to
                    you.
                  </p>
                  <p
                    className="text-neutral-500
                text-base
                font-medium
                leading-snug"
                  >
                    More Text can be added here. Thank you for your feedback it
                    was really great speaking to you.
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
          </div>
        </div>
      </div>

      {/* <div className="flex items-start mx-auto gap-4 justify-center max-w-[972px] flex-col">
        <p
          className="text-neutral-800
text-[26px]
font-semibold"
        >
          Similar Astrologers
        </p>
        <p className="text-right w-full text-xl text-neutral-800 font-semibold leading-[25px]">
          See all
        </p>
        <div className="flex gap-[45px] max-w-[972px]  no-scrollbar overflow-x-scroll mx-auto items-center px-[20px]">
          <div className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow xl:shadow-lg xl:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
              <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
              >
                devesh
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
                sharma
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
                trot
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
                hindi
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
             xl:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
             text-[10px]
             xl:text-xl
             xl:font-normal
             xl:leading-normal
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
xl:text-[21.26px]
xl:font-medium
"
                >
                  ₹300/
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
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow xl:shadow-lg xl:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
              <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
              >
                devesh
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
                sharma
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
                trot
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
                hindi
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
             xl:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
             text-[10px]
             xl:text-xl
             xl:font-normal
             xl:leading-normal
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
xl:text-[21.26px]
xl:font-medium
"
                >
                  ₹300/
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
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow xl:shadow-lg xl:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
              <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
              >
                devesh
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
                sharma
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
                trot
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
                hindi
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
             xl:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
             text-[10px]
             xl:text-xl
             xl:font-normal
             xl:leading-normal
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
xl:text-[21.26px]
xl:font-medium
"
                >
                  ₹300/
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
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow xl:shadow-lg xl:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
              <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
              >
                devesh
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
                sharma
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
                trot
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
                hindi
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
             xl:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
             text-[10px]
             xl:text-xl
             xl:font-normal
             xl:leading-normal
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
xl:text-[21.26px]
xl:font-medium
"
                >
                  ₹300/
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
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
          <div className="xl:min-w-[288.46px] min-w-[180px] xl:rounded-[9.27px] border border-violet-500 border-opacity-70 min-h-[259px] shadow xl:shadow-lg xl:min-h-[400.10px] relative bg-white rounded-lg">
            <Image
              width="200"
              height="200"
              className="xl:w-72 xl:h-[145px] w-[180px] h-[94px] rounded-t-[8px]  absolute"
              src={AstroImg}
              alt="banner"
            />
            <div className="w-[114.31px] h-[114.31px] xl:left-[80px] left-[30%] top-[20%] xl:top-[57.17px] absolute">
              <div className="xl:w-[116.01px] w-[75px] h-[75px] xl:h-[116.01px] xl:left-[-1.55px]  xl:top-0 absolute bg-zinc-300 rounded-full" />
              <Image
                width="100"
                height="100"
                className="xl:w-[105.92px] w-[68px] h-[68px] xl:h-[105.92px] left-[4px] top-[4px] xl:left-[4px] xl:top-[5.04px] absolute rounded-full"
                src={ProfileImg}
                alt="god"
              />

              <div>
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px] animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px] xl:left-[86.51px] left-[45%] top-[-2%] xl:top-[3.08px]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="xl:w-[139.03px] xl:h-[32.44px] w-[90px] h-[21px] right-0 top-0 absolute bg-violet-500 bg-opacity-70 rounded-tr-[8px] rounded-bl-[9.27px]" />
              <p className="w-[121.79px] h-[13.70px] xl:right-0 right-[-10%] top-[-1%] xl:top-[4.12px] absolute text-center text-white text-xs xl:text-lg font-bold  leading-7">
                Most Choice
              </p>
            </div>

            <div className="absolute xl:gap-2 items-center w-full inline-block top-[50%] xl:top-[45%]">
              <p
                className="text-neutral-800
          text-center
text-sm
font-medium
xl:text-[21.26px]
leading-[17.50px]"
              >
                devesh
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
                sharma
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
                trot
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
                hindi
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
             xl:leading-normal
             font-bold
             leading-[18px]"
                >
                  200
                </p>
                <p
                  className="text-neutral-700
             text-[10px]
             xl:text-xl
             xl:font-normal
             xl:leading-normal
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
xl:text-[21.26px]
xl:font-medium
"
                >
                  ₹300/
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
leading-[12px]"
                >
                  2 Yrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AstrologerWeb;
