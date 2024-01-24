"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { IoCall } from "react-icons/io5";
import useFilterStore from "@/store/filterStore";
import { Get_ASTROLOGER_FEEDBACK } from "@/lib/data";
import { redirect, useRouter } from "next/navigation";
import { getUserprofile } from "@/lib/data";
import call2 from "../../../public/assets/AstrologerProfileIcons/call2.svg";
import checkicon from "../../../public/assets/AstrologerProfileIcons/check.png";
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
import ConsultationModalContent from "../consult_page/ConsultationModalContent";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN } from "@/lib/apilinks";
import Modal from "../ReusableModal/ReusableModal";
import { BasicModal } from "../login/BasicModal";

const AstrologerWeb = ({
  data,
  data2,
  useraProfileId,
  feedback,
  loginToken,
  similar,
  isFollowing,
}: any) => {
  //
  type UserDetails = {
    consultationCount?: number;
    wallet?: number;
    // Add other properties as needed
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    // Ensure not going beyond the array's length
    if (currentIndex + 12 < astroData.length) {
      setCurrentIndex(currentIndex + 12);
    }
  };

  const decrement = () => {
    // Ensure not going below 0
    if (currentIndex - 12 >= 0) {
      setCurrentIndex(currentIndex - 12);
    }
  };
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  // const [callAvailability, setCallAvailability] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [astroData, setAstroData] = useState([]);
  const { responseData, setResponseData } = useFilterStore();
  const router = useRouter();
  useEffect(() => {
    if (responseData?.guru?.docs.length) {
      setAstroData(responseData?.guru?.docs);
    } else {
      setAstroData(data); // Make sure 'data' is defined or imported
    }
    // eslint-disable-next-line
  }, [responseData]);
  // const displayedData = astroData.slice(0, currentIndex + 12);
  // console.log(displayedData);

  function capitalizeFirstLetter(str: string) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const isMobile = window.innerWidth < 768;

  const {
    astroDetails,
    setAstroDetails,
    setMinCallDuration,
    minimumCallDuration,
    setCallPurchasedId,
    callAvailability,
    setCallAvailability,
  } = useFilterStore();

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        setUserDetails(data.userDetails);
        console.log(data);
      }
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userDetails);
  const [callBtnClicked, setCallBtnClicked] = useState(false);
  const callClickedHandler = (guruToken: string) => {
    // userProfile();
    localStorage.setItem("guruToken", guruToken);
    fetch(
      `https://prod.gurucool.life/api/v1/guru/getSingleGuru?guruId=${guruToken}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAstroDetails(data.guru);
        setCallBtnClicked(true);
        setCallAvailability(data?.guru?.callAvailability);
        // onOpen();
        openModal();
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching data:", error);
      });
  };
  console.log(astroDetails);
console.log(data2)
  const fee = getPrice(userDetails, data2);
  console.log(fee)
  function getPrice(userDetails: any, astroDetails: any) {
    if (userDetails?.consultationCount === 0 || !loginToken) {
      return astroDetails?.firstOfferPrice?.national?.fee;
    } else {
      return astroDetails?.fee;
    }
  }
  const userWalletBalance: any = userDetails && userDetails?.wallet;
  // console.log(userWalletBalance);
  const minCallDuration = Math.floor(userWalletBalance / fee);
  console.log(typeof minCallDuration);

  useEffect(() => {
    if (fee > 0) {
      if (userWalletBalance >= fee * 5) {
        setInsufficientBalance(false);
        setMinCallDuration(minCallDuration);
        // // //console.log("minCallDuration",minCallDuration);
      } else {
        setInsufficientBalance(true);
      }
    } else {
      setInsufficientBalance(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [astroDetails, userDetails]);

  // const guruToken: string | null = localStorage.getItem("guruToken");
  const guruToken: string = localStorage.getItem("guruToken") || "";
  useEffect(() => {
    // console.log("fetchastrologerdata")
    const fetchDataforAstrologer = async () => {
      try {
        const response = await fetch(
          G_GET_SINGLE_ASTROLOGER_BY_TOKEN(guruToken)
        );

        if (response.ok) {
          const responseData = await response.json();
          // console.log(responseData)
          setCallAvailability(responseData?.guru?.callAvailability);
        } else {
          Error("Request failed");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchDataforAstrologer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startConsultationHandler = (e: any) => {
    e.preventDefault();
    const startConsultationUrlV1 =
      "https://prod.gurucool.life/api/v3/consultations/initiateCall";
    const config = {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    };
    const requestData = {
      astrologerID: astroDetails.user._id,
      minutes: minCallDuration,
    };
    console.log("Consultation Started......");

    const startConsultation = async () => {
      //console.log(requestData);
      try {
        const response = await fetch(startConsultationUrlV1, {
          method: "POST",
          headers: {
            ...config.headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
        // //console.log(response);
        if (response.status === 200) {
          console.log("Suc......................");
          const responseData = await response.json();
          localStorage.setItem("purchaseId", responseData.purchaseId);

          setCallPurchasedId(responseData.purchaseId);
          // navigate("/callconsultationstarted");
          console.log(responseData);
          // redirect("/Call-consultation-started");
          router.push("/call-consultation-started");
          // ('/dashboard', { scroll: false })
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
      } catch (error: any) {
        setErrorMsg(error.message);
        //console.log(error);
      }
    };
    startConsultation();
  };
  // console.log(astroData);
  //

  const [descLength, setdescLength] = useState(200);
  const [imgLength, setimgLength] = useState(4);
  const [Sort, setSort] = useState("recent");
  const [login, setLogin] = useState<boolean>(false);

  const [feedbackData, setFeedbackdata] = useState<any>();
  const toggleDescription = () => {
    setdescLength(data.description.length);
  };

  const handleFeedback = async (
    id: number,
    sort: string,
    userId: string | undefined
  ) => {
    const feedbackAstro = await Get_ASTROLOGER_FEEDBACK(id, sort, userId);
    setFeedbackdata(feedbackAstro.feedback);
  };

  useEffect(() => {
    if (Sort == "recent") {
      handleFeedback(data.gid, "recent", useraProfileId);
    } else {
      handleFeedback(data.gid, "mostPopular", useraProfileId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Sort]);

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
    <>
      {login && <BasicModal setLogin={setLogin} />}

      <div className="my-[90px] mx-auto max-w-[72rem] hidden  md:flex items-st flex-col justify-start gap-10">
        <div className="bg-gradient-to-r  xl:max-w-[72rem] from-violet-100 via-white to-white rounded-md shadow-md  items-end md:flex md:gap-[20px] xl:gap-[64.33px] p-[20px] lg:p-[18.38px] mx-auto">
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
                <Image
                  src={checkicon}
                  className="w-[22px] h-[22px]"
                  alt="icon"
                />
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
            {loginToken ? (
              !isFollowing ? (
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
              )
            ) : (
              <div className="cursor-pointer invisible hover:shadow-lg text-[23.92px] font-semibold py-[4px] px-[16.75px] text-white bg-red-500 rounded-md">
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
            <div className="py-[10px] px-[16px] w-fit flex items-center justify-center border-zinc-300 border rounded-md border-opacity-70 bg-white gap-[10px] lg:gap-[24px]">
              <div className="w-fit flex flex-col gap-[6px] items-center justify-center">
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
              <div className="w-[0] h-[120px] border border-opacity-70 border-stone-300"></div>
              <div className=" flex flex-col gap-[6px] items-center justify-center">
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
              <div className="w-[0] h-[120px]  border-opacity-70  border border-stone-300"></div>
              <div className=" flex flex-col  gap-[6px] items-center justify-center">
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
lg:text-xl
leading-none
text-sm
font-medium"
                >
                  Offline
                </p>
                <p
                  className="
              text-zinc-500
              lg:text-base
text-sm
              font-medium
            
              leading-none"
                >
                  ₹{data.chatFee}/min
                </p>
              </div>
            </div>
            {data.callAvailability === "online" ? (
              <div
                onClick={() => {
                  if (loginToken) {
                    if (data?.callAvailability === "online") {
                      callClickedHandler(data?.user?.guru);
                    }
                  } else {
                    setLogin(true);
                  }
                }}
                className="cursor-pointer hover:shadow-lg gap-[18px] w-[140px] lg:w-[183.4px] py-[9px] px-[17px] flex items-center justify-start bg-emerald-500 rounded-tl-[6.89px] rounded-bl-[6.89px]"
              >
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
                lg:text-xl
                text-left
                text-sm
font-medium
leading-none"
                  >
                    call now
                  </p>
                  <p
                    className="
              text-white
              lg:text-base
text-sm
              font-medium
            
              leading-none"
                  >
                    ₹{fee}/min
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

        <div>
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
              {`${data.description.slice(0, descLength)} `}
              {descLength == data.description.length ? (
                <span
                  onClick={() => setdescLength(200)}
                  className="text-violet-500
cursor-pointer
text-lg
font-medium"
                >
                  {`Read Less`}
                </span>
              ) : (
                <span
                  onClick={toggleDescription}
                  className="text-violet-500
                underline hover:text-blue-500
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
                className="cursor-pointer underline hover:text-blue-500 w-full text-right text-neutral-800
text-lg
font-semibold"
                onClick={() => setimgLength(4)}
              >
                See less
              </p>
            ) : (
              <p
                className="cursor-pointer underline hover:text-blue-500 w-full text-right text-neutral-800
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
            <div className="rounded-md xl:w-[556px] md:w-[400px] xl:min-h-[359px]  flex-wrap shadow border border-zinc-200 justify-start inline-flex gap-[26px] items-start p-4">
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
            <div className="lg:w-[558px] border border-zinc-200 md:w-[350px] overflow-y-scroll scrollbar-webkit scrollbar-thin  h-[460px] xl:h-[359.22px] p-2 items-start bg-white rounded-md shadow  flex  flex-wrap">
              <div className="flex flex-wrap  gap-2">
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
            <div className="py-8 px-16 border border-zinc-200 scrollbar-thin scrollbar-webkit max-w-[792px] overflow-y-scroll sticky overflow-x-hidden max-h-[1502px] bg-white rounded-[10px] shadow justify-start flex-col items-start gap-10 flex">
              <div className="border-b pb-3 border-gray-200 w-full flex  gap-[195px] items-center">
                <div className="flex items-center gap-3">
                  <Image src={star3} width="30" height="30" alt="star" />
                  <h3
                    className="text-neutral-800
text-[26px]
font-bold"
                  >
                    {data.rating}
                  </h3>
                  <p
                    className="text-zinc-500
text-base
font-medium"
                  >
                    {feedbackData?.total} Review
                  </p>
                </div>

                <div className="flex gap-2">
                  <div
                    onClick={() => setSort("recent")}
                    className={`cursor-pointer w-fit h-[30px] px-4 py-1.5 rounded-md border ${
                      Sort == "recent"
                        ? "bg-emerald-500"
                        : "bg-white border border-netural-500"
                    } justify-center items-center gap-2.5 inline-flex`}
                  >
                    <div
                      className={`${
                        Sort == "recent" ? "text-white" : "text-neutral-500"
                      } text-sm font-medium leading-[17.50px]`}
                    >
                      Recent
                    </div>
                  </div>
                  <div
                    onClick={() => setSort("mostPopular")}
                    className={`cursor-pointer w-fit h-[30px] px-4 py-1.5 ${
                      Sort == "mostPopular"
                        ? "bg-emerald-500"
                        : "bg-white border border-netural-500"
                    } rounded-md justify-center items-center gap-2.5 inline-flex`}
                  >
                    <div
                      className={`${
                        Sort == "mostPopular"
                          ? "text-white"
                          : "text-neutral-500"
                      } text-sm font-medium  leading-[17.50px]`}
                    >
                      Most Popular
                    </div>
                  </div>
                </div>
              </div>
              {feedbackData?.docs?.map((datas: any) => (
                <div
                  key={datas._id}
                  className="flex flex-col w-full gap-4 border-b border-gray-200 pb-4"
                >
                  <div className="w-full items-start justify-between inline-flex">
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
                  {datas.astrologerReply ? (
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
                          {formatDateString(datas.updatedAt)}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500
                  text-base
                  font-medium
                  leading-snug"
                        >
                          {datas.astrologerReply}
                        </p>
                      </div>
                    </div>
                  ) : null}
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
            className="text-right w-full underline hover:text-blue-500 text-xl text-neutral-800 font-semibold leading-[25px]"
          >
            See all
          </Link>
          <div className="flex gap-[45px] md:max-w-[768px] lg:max-w-[972px]  no-scrollbar overflow-x-scroll mx-auto items-center px-[20px]">
            {similar.recommendedAstrologers.map((similarData: any) => (
              <AstroCard key={similarData._id} data={similarData} loginToken={loginToken} />
            ))}
          </div>
        </div>
        <Modal
          size={isMobile ? "xs" : "lg"}
          show={showModal}
          onClose={closeModal}
        >
          <div className="w-full flex flex-col items-center gap-4 md:gap-8 ">
            <ConsultationModalContent
              astroDetails={astroDetails}
              fee={fee}
              minCallDuration={minCallDuration}
              userWalletBalance={userWalletBalance}
            />
            {/* <InsufficientBalanceContent/> */}
            <div className="flex justify-center gap-4">
              <button className="w-[5.5rem] md:w-[13.375rem] flex justify-center items-center gap-[0.21rem] py-[0.33rem] md:py-4 px-[0.46rem] md:px-[1.38rem] rounded md:rounded-xl bg-[#26C884] text-white text-[0.75rem] md:text-[1.625rem] font-semibold leading-tight ">
                Recharge
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="40"
                  // height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-[0.83rem] md:w-[2.5rem] md:h-[2.5rem] h-[0.83rem]"
                >
                  <path
                    d="M25 13.75H37.5V11.25C37.5 9.5924 36.8415 8.00269 35.6694 6.83058C34.4973 5.65848 32.9076 5 31.25 5H8.75C7.0924 5 5.50269 5.65848 4.33058 6.83058C3.15848 8.00269 2.5 9.5924 2.5 11.25V28.75C2.5 30.4076 3.15848 31.9973 4.33058 33.1694C5.50269 34.3415 7.0924 35 8.75 35H31.25C32.9076 35 34.4973 34.3415 35.6694 33.1694C36.8415 31.9973 37.5 30.4076 37.5 28.75V26.25H25C23.3424 26.25 21.7527 25.5915 20.5806 24.4194C19.4085 23.2473 18.75 21.6576 18.75 20C18.75 18.3424 19.4085 16.7527 20.5806 15.5806C21.7527 14.4085 23.3424 13.75 25 13.75ZM25 16.25C24.0054 16.25 23.0516 16.6451 22.3483 17.3483C21.6451 18.0516 21.25 19.0054 21.25 20C21.25 20.9946 21.6451 21.9484 22.3483 22.6517C23.0516 23.3549 24.0054 23.75 25 23.75H37.5V16.25H25ZM25 22.5C24.5055 22.5 24.0222 22.3534 23.6111 22.0787C23.2 21.804 22.8795 21.4135 22.6903 20.9567C22.5011 20.4999 22.4516 19.9972 22.548 19.5123C22.6445 19.0273 22.8826 18.5819 23.2322 18.2322C23.5819 17.8826 24.0273 17.6445 24.5123 17.548C24.9972 17.4516 25.4999 17.5011 25.9567 17.6903C26.4135 17.8795 26.804 18.2 27.0787 18.6111C27.3534 19.0222 27.5 19.5055 27.5 20C27.5 20.663 27.2366 21.2989 26.7678 21.7678C26.2989 22.2366 25.663 22.5 25 22.5Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M37.4998 11.25V13.75H33.7498C33.4154 12.0331 32.8433 10.3713 32.0498 8.8125C31.3656 7.46927 30.5265 6.21071 29.5498 5.0625H31.2498C32.8966 5.06242 34.4769 5.71231 35.6473 6.87093C36.8176 8.02955 37.4833 9.60325 37.4998 11.25Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M34.0874 16.25H37.4999V23.75H33.0374C33.8861 21.3455 34.2432 18.7951 34.0874 16.25Z"
                    fill="#FEFEFE"
                  />
                  <path
                    d="M31.9374 26.25H37.4999V28.75C37.4999 30.4076 36.8414 31.9973 35.6693 33.1694C34.4972 34.3415 32.9075 35 31.2499 35H22.3374C22.7999 34.8125 23.2624 34.6 23.7124 34.375C27.237 32.5944 30.1138 29.7525 31.9374 26.25Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </button>
              <button
                className={`w-[5.5rem] md:w-[13.375rem] flex justify-center items-center gap-[0.21rem] py-[0.33rem] md:py-4 px-[0.46rem] md:px-[1.38rem] rounded md:rounded-xl ${
                  astroDetails?.callAvailability === "online"
                    ? "cursor-pointer"
                    : "cursor-no-drop"
                }  ${
                  astroDetails?.callAvailability === "online"
                    ? "bg-[#26C884]"
                    : "bg-white"
                } ${
                  astroDetails?.callAvailability === "online"
                    ? "border-none"
                    : "border border-[#3A3938]"
                } ${
                  astroDetails?.callAvailability === "online"
                    ? " text-white"
                    : astroDetails?.callAvailability === "busy"
                    ? "text-red-500"
                    : "text-[#707070]"
                } text-[0.75rem] md:text-[1.625rem] font-semibold leading-tight`}
                // onClick={closeModal}
                onClick={(e) => {
                  if (callAvailability === "online") {
                    startConsultationHandler(e);
                  }
                }}
              >
                {callAvailability === "online" && "Call"}
                {callAvailability === "busy" && "Busy"}
                {callAvailability === "offline" && "Offline"}
                <IoCall
                  className={`text-[0.8rem] md:text-[2.5rem] ${
                    astroDetails?.callAvailability === "online"
                      ? " text-white"
                      : astroDetails?.callAvailability === "busy"
                      ? "text-red-500"
                      : "text-[#707070]"
                  } `}
                />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AstrologerWeb;
