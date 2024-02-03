"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Model from "./Model";
import { useRouter } from "next/navigation";
import useFilterStore from "@/store/filterStore";
import { IoCall } from "react-icons/io5";
import { getUserprofile } from "@/lib/data";
import follow1 from "../../../public/assets/AstrologerProfileIcons/follow1.svg";
import follow2 from "../../../public/assets/AstrologerProfileIcons/follow2.svg";
import follow3 from "../../../public/assets/AstrologerProfileIcons/follow3.png";
import mostchoice from "../../../public/assets/AstrologerProfileIcons/mostchoice.png";
import language from "../../../public/assets/AstrologerProfileIcons/Language.webp";
import star4 from "../../../public/assets/AstrologerProfileIcons/start4.webp";
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
import { Get_ASTROLOGER_FEEDBACK } from "@/lib/data";
import ConsultationModalContent from "../consult_page/ConsultationModalContent";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN, TESTING_URL } from "@/lib/apilinks";
import Modal from "../ReusableModal/ReusableModal";
import { BasicModal } from "../login/BasicModal";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import toast, { Toaster } from "react-hot-toast";

const AstrologerMobile = ({
  data,
  feedback,
  useraProfileId,
  loginToken,
  similar,
  isFollowing,
}: any) => {
  type UserDetails = {
    consultationCount?: number;
    wallet?: number;
    // Add other properties as needed
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [login, setLogin] = useState<boolean>(false);

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
  const [count, setCount] = useState<number>(0);
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
    if (loginToken && count === 0) {
      const userProfile = async () => {
        let data = await getUserprofile(loginToken);
        setUserDetails(data.userDetails);
      };
      setCount(1);

      userProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginToken]);
  // console.log(userDetails);
  const [callBtnClicked, setCallBtnClicked] = useState(false);
  const callClickedHandler = (guruToken: string) => {
    // userProfile();
    localStorage.setItem("guruToken", guruToken);
    fetch(`${TESTING_URL}guru/getSingleGuru?guruId=${guruToken}`)
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
  // console.log(astroDetails);

  const fee = getPrice(userDetails, data);
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
  // console.log(typeof minCallDuration);

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
          // console.log(responseData);
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
    // console.log(id, sort, userId);
    const feedbackAstro = await Get_ASTROLOGER_FEEDBACK(id, sort, userId);
    setFeedbackdata(feedbackAstro.feedback);
  };

  useEffect(() => {
    if (Sort == "recent") {
      handleFeedback(data.gid, "recent", useraProfileId);
      // console.log("i am recent" + Sort);
      // console.log(feedbackData);
    } else {
      handleFeedback(data.gid, "mostPopular", useraProfileId);
      // console.log("i am most" + Sort);
      // console.log(feedbackData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Sort]);

  function formatDateString(dateString: string) {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getUTCFullYear();

    return `${month} ${year}`;
  }

  const [isMobile, setIsMobile] = useState(false);

  // useEffect to set isMobile, runs only on client-side
  useEffect(() => {
    const checkIfMobile = () => window.innerWidth < 768;
    setIsMobile(checkIfMobile());

    // Optionally, to handle window resizing:
    window.addEventListener("resize", () => {
      setIsMobile(checkIfMobile());
    });

    // Cleanup listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  // const guruToken: string | null = localStorage.getItem("guruToken");
  const [guruToken, setGuruToken] = useState("");

  useEffect(() => {
    // Access localStorage only when the component mounts on the client-side
    const token = localStorage.getItem("guruToken") || "";
    setGuruToken(token);

    // ... other client-side only effects
  }, []);
  const Specialities: any = {
    Love: { img: heart, desc: "Relationship" },
    Marriage: { img: marriage, desc: "Kids,Divorce" },
    Health: { img: health, desc: "Physical,Mental" },
    Career: { img: career, desc: "Job, Education" },
    Life: { img: life, desc: "Money,Family" },
    Business: { img: business, desc: "Legal Matter" },
  };

  const [clickedImg, setClickedImg] = useState<any>(null);
  const [imgCurrentIndex, setImgCurrentIndex] = useState<any>();

  const handleClick = (item: any, index: any) => {
    setImgCurrentIndex(index);
    setClickedImg(item.url);
  };

  const handelRotationRight = () => {
    const totalLength = data.images.length;
    if (imgCurrentIndex + 1 >= totalLength) {
      setImgCurrentIndex(0);
      const newUrl = data.images[0].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = imgCurrentIndex + 1;
    const newUrl = data.images.filter((item: any) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setImgCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.images.length;
    if (imgCurrentIndex === 0) {
      setImgCurrentIndex(totalLength - 1);
      const newUrl = data.images[totalLength - 1].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = imgCurrentIndex - 1;
    const newUrl = data.images.filter((item: any) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setImgCurrentIndex(newIndex);
  };

  const toggleImgLength = () => {
    setimgLength(data.images.length);
  };
  function formatValue(value: number) {
    const formattedValue = (value / 1000).toFixed(1);
    return `${formattedValue}K`;
  }

  return (
    <>
      {login && <BasicModal setLogin={setLogin} />}
      <div>
        <div className="mx-auto relative w-full md:hidden flex flex-col">
          <div className="relative">
            <Image
              src={data?.backgroundBanner?.image_Url}
              width="500"
              height="500"
              className="w-full h-[119px] md:h-[200px]"
              alt="backgroundImg"
            />
            <div className="overflow-hidden absolute md:top-[75%] top-[60%]  border-2 border-emerald-500 md:left-[4%] left-[8%] w-[80px] md:w-[100px] md:h-[100px] h-[80px] rounded-full">
              <Image
                className="relative w-20 h-20"
                width="100"
                height="100"
                src={data?.user?.avatar?.url}
                alt="profile"
              />
            </div>
            {data?.callAvailability === "online" ? (
              <div className="absolute  top-[60%]  left-[23%] md:left-[13%]">
                <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  animate-ping shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
                <div className="w-[18.54px] h-[18.54px]  left-[45%] top-[-2%]  shadow-lg shadow-black absolute bg-emerald-500 rounded-full" />
              </div>
            ) : (
              <div className="absolute  top-[60%]  left-[23%] md:left-[13%]">
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
                  w-[183px]
text-xl
font-semibold"
                >
                  {data?.user.firstName}
                  {data?.user.lastName}
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
                    {data?.languages.join(",")}
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
                {data?.mostTrusted == true ? (
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
                          src={follow1}
                          alt="img"
                        />

                        <Image
                          className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                          src={follow2}
                          alt="img"
                        />

                        <Image
                          className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                          src={follow3}
                          alt="img"
                        />
                      </div>
                      <div
                        onClick={() => {
                          FollowAstro(loginToken, data.user.guru);
                          sendGTMEvent({
                            event: "buttonClicked",
                            value: `Astro_Follow_${data.user.firstName}${data.user.lastName}`,
                          });
                          sendGAEvent({
                            event: "buttonClicked",
                            value: `Astro_Follow_${data.user.firstName}${data.user.lastName}`,
                          });
                          toast.promise(
                            FollowAstro(loginToken, data?.user.guru),
                            {
                              loading: "Saving...",
                              success: <b>Followed</b>,
                              error: <b>Error in Follow</b>,
                            }
                          )
                        }}
                        className=" h-[26px] px-3 py-1 text-white text-sm cursor-pointer font-medium leading-[17.50px] bg-violet-500 relative rounded-lg justify-center items-center gap-3 flex"
                      >
                        follow
                      </div>
                    </div>
                  ) : (
                    <div className="w-[125px] h-[26px] justify-start items-center inline-flex">
                      <div className="w-[42px] h-[18px] relative">
                        <Image
                          className="w-[18px] h-[18px] left-[15%] top-0 absolute rounded-full border border-white"
                          src={follow1}
                          alt="img"
                        />

                        <Image
                          className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                          src={follow2}
                          alt="img"
                        />

                        <Image
                          className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                          src={follow3}
                          alt="img"
                        />
                      </div>
                      <div
                        onClick={() => {
                          UnFollowAstro(loginToken, data.user.guru);
                          sendGTMEvent({
                            event: "buttonClicked",
                            value: `Astro_Unfollow_${data.user.firstName}${data.user.lastName}`,
                          });
                          sendGAEvent({
                            event: "buttonClicked",
                            value: `Astro_Unfollow_${data.user.firstName}${data.user.lastName}`,
                          });                        
                          toast.promise(
                            UnFollowAstro(loginToken, data?.user.guru),
                            {
                              loading: "Saving...",
                              success: <b>Unfollowed</b>,
                              error: <b>Error in UnFollow</b>,
                            }
                          )
                        }}
                        className="h-[26px] px-3 py-1 bg-violet-500 cursor-pointer text-white text-sm font-medium leading-[17.50px] relative rounded-lg justify-center items-center gap-3 flex"
                      >
                        Unfollow
                      </div>
                    </div>
                  )
                ) : (
                  <div className="w-[125px] invisible h-[26px] justify-start items-center inline-flex">
                    <div className="w-[42px] h-[18px] relative">
                      <Image
                        className="w-[18px] h-[18px] left-[15%] top-0 absolute rounded-full border border-white"
                        src={follow1}
                        alt="img"
                      />

                      <Image
                        className="w-[18px] h-[18px] left-[40%] top-0 absolute rounded-full border border-white"
                        src={follow2}
                        alt="img"
                      />

                      <Image
                        className="w-[18px] h-[18px] left-[65%] top-0 absolute rounded-full border border-white"
                        src={follow3}
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
            <Link
              href="#about"
              onClick={() => {
                if (loginToken) {
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: `AstroProfile_About_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                  sendGAEvent({
                    event: "buttonClicked",
                    value: `AstroProfile_About_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                } else {
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: `Unlogin_Astroprofile_About_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                  sendGAEvent({
                    event: "buttonClicked",
                    value: `Unlogin_Astroprofile_About_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                }
              }}
            >
              <div className="w-[97px] md:w-[150px] h-[34px] md:h-[60px] px-10 py-2.5 bg-stone-300 hover:bg-emerald-500 rounded-md md:rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-base md:text-xl md:font-bold font-semibold">
                  About
                </div>
              </div>
            </Link>

            <Link
              href="#review"
              onClick={() => {
                if (loginToken) {
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: `AstroProfile_Review_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                  sendGAEvent({
                    event: "buttonClicked",
                    value: `AstroProfile_Review_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                } else {
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: `Unlogin_Astroprofile_Review_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                  sendGAEvent({
                    event: "buttonClicked",
                    value: `Unlogin_Astroprofile_Review_${data?.user.firstName}_${data?.user.lastName}`,
                  });
                }
              }}
            >
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
                  {data?.experience}+ Yrs
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
                  {data?.followersCount}
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
                {data.images.map((data: any, index: number) => (
                  <Image
                    key={data._id}
                    src={data.url}
                    onClick={() => handleClick(data, index)}
                    className="w-[82px] h-[84px] rounded-[5px]"
                    width="1000"
                    height="1000"
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
                  <Image
                    src={star3}
                    className="w-[30px] h-[30px]"
                    alt="star3"
                  />
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
              <div className="h-[332px] flex flex-col gap-5 overflow-y-scroll overflow-x-hidden no-scrollbar">
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
              {/* <p
                className="text-center block w-full text-violet-500
text-base
font-semibold"
              >
                Read More
              </p> */}
            </div>
          </div>

          {/* <div className="w-full block mb-5">
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
        </div> */}
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
text-[14px]
font-medium
mb-4
underline
leading-[15px] text-right"
            >
              See all
            </Link>
          </div>
          <div className="overflow-x-scroll flex gap-5 no-scrollbar px-10 mb-5">
            {similar.recommendedAstrologers.map((similarData: any) => (
              <AstroCard
                key={similarData._id}
                data={similarData}
                loginToken={loginToken}
              />
            ))}
          </div>
          <div>
            {data.callAvailability === "online" ? (
              <div
                onClick={() => {
                  if (loginToken) {
                    if (data?.callAvailability === "online") {
                      callClickedHandler(data?.user?.guru);
                    }

                    sendGTMEvent({
                      event: "buttonClicked",
                      value: `AstroProfile_Call_Inititated_${data.user.firstName}${data.user.lastName}`,
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: `AstroProfile_Call_Inititated_${data.user.firstName}${data.user.lastName}`,
                    });
                  } else {
                    setLogin(true);
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: `Unlogin_Astroprofile_Call_${data.user.firstName}${data.user.lastName}`,
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: `Unlogin_Astroprofile_Call_${data.user.firstName}${data.user.lastName}`,
                    });
                  }
                }}
                className="w-[95%] flex justify-between items-center px-[18px] py-[9.5px] h-[60px] fixed bottom-2 left-2 mx-auto bg-emerald-500 rounded hover:shadow-lg"
              >
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
                    ₹{fee}/min
                  </p>
                  {data.cutfee > 0 ? (
                    <p
                      className="text-white
              text-xs
              font-medium
              line-through
              leading-[15px]"
                    >
                      ₹{data.cutfee}/min
                    </p>
                  ) : null}
                </div>
              </div>
            ) : data?.callAvailability === "busy" ? (
              <div className="w-[95%] cursor-not-allowed flex justify-between items-center px-[18px] py-[9.5px] h-[60px] fixed bottom-2 left-2 mx-auto bg-red-500 rounded hover:shadow-lg">
                <div className="gap-5 flex items-center">
                  <Image src={call} className="w-[25px] h-[25px]" alt="call" />
                  <p
                    className="text-white 
  text-base
  font-semibold"
                  >
                    Busy
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p
                    className="text-white
                  text-base
                  font-semibold"
                  >
                    ₹{fee}/min
                  </p>
                  {data.cutfee > 0 ? (
                    <p
                      className="text-white
                text-xs
                font-medium
                line-through
                leading-[15px]"
                    >
                      ₹{data.cutfee}/min
                    </p>
                  ) : null}
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
                    Offline
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <p
                    className="text-white
                  text-base
                  font-semibold"
                  >
                    ₹{fee}/min
                  </p>
                  {data.cutfee > 0 ? (
                    <p
                      className="text-white
                text-xs
                font-medium
                line-through
                leading-[15px]"
                    >
                      ₹{data.cutfee}/min
                    </p>
                  ) : null}
                </div>
              </div>
            )}
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
      <Toaster position="top-center" reverseOrder={false} />
      {clickedImg && (
        <Model
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </>
  );
};

export default AstrologerMobile;
