"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Balkrishna from "../../../public/assets/Balkrishna.jpg";
import Mostchoice from "../../../public/assets/Mostchoice.svg";
import { BsFillStarFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Spec from "../../../public/assets/Spec.svg";
import useFilterStore from "@/store/filterStore";
import Modal from "../ReusableModal/ReusableModal";
import ConsultationModalContent from "./ConsultationModalContent";
import InsufficientBalanceContent from "./InsufficientBalanceContent";
import { getUserprofile } from "@/lib/data";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN, TESTING_URL } from "@/lib/apilinks";
import { redirect, useRouter } from "next/navigation";
import { BasicModal } from "../login/BasicModal";

const ConsultCard = ({ data, loginToken }: { data: any; loginToken: any }) => {
  type UserDetails = {
    consultationCount?: number;
    wallet?: number;
    // Add other properties as needed
  };
  const {
    astroDetails,
    setAstroDetails,
    setMinCallDuration,
    minimumCallDuration,
    setCallPurchasedId,
    callAvailability,
    setCallAvailability,
    consultAstroData,
    setConsultAstroData,
    name,
    sePerPage,
  } = useFilterStore();
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [login, setLogin] = useState(false);
  // const [callAvailability, setCallAvailability] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [astroData, setAstroData] = useState([]);
  const { responseData, setResponseData } = useFilterStore();

  // if (responseData?.guru?.docs.length) {
  //   setAstroData(responseData?.guru?.docs);
  // } else {
  //   setAstroData(data);
  // }

  const router = useRouter();

  // useEffect(() => {
  //   setConsultAstroData(fetchConsultAstroData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    if (responseData?.guru?.docs.length) {
      setConsultAstroData(responseData?.guru?.docs);
    } else {
      setConsultAstroData(data); // Make sure 'data' is defined or imported
    }
    // eslint-disable-next-line
  }, [responseData]);
  console.log(data);

  const [number, setNumber] = useState(10);
  function formatValue(value: number) {
    const formattedValue = (value / 1000).toFixed(1);
    return `${formattedValue}K`;
  }
  // const decreseNumber = () => {
  //   if (number > 10) setNumber(number - (astroData.length - 10));
  // };
  // const increseNumber = () => {
  //   if (number <= astroData.length - 10 && astroData.length - number >= 10) {
  //     setNumber(number + 10);
  //   } else {
  //     setNumber(astroData.length);
  //   }
  // };

  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    // Ensure not going beyond the array's length
    if (currentIndex + 12 < consultAstroData.length) {
      setCurrentIndex(currentIndex + 12);
      sePerPage(currentIndex + 12);
    }
  };

  const decrement = () => {
    // Ensure not going below 0
    if (currentIndex - 12 >= 0) {
      setCurrentIndex(currentIndex - 12);
      sePerPage(currentIndex - 12);
    }
  };

  // Determine the slice of the array to show
  const displayedData = consultAstroData?.slice(0, currentIndex + 12);

  console.log(displayedData);

  function capitalizeFirstLetter(str: string) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }

  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        setUserDetails(data.userDetails);
      }
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const fee = getPrice(userDetails, astroDetails);

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
  const [guruToken, setGuruToken] = useState("");

  // const guruToken: string | null = localStorage.getItem("guruToken");
  useEffect(() => {
    // Access localStorage only when the component mounts on the client-side
    const token = localStorage.getItem("guruToken") || "";
    setGuruToken(token);

    // ... other client-side only effects
  }, []);
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
    const startConsultationUrlV1 = `${TESTING_URL}consultations/initiateCall`;
    const config = {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    };
    const requestData = {
      astrologerID: astroDetails.user._id,
      minutes: minCallDuration,
    };

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

  // useEffect(() => {
  //   const fetchDataforAstrologer = async () => {
  //     try {
  //       const response = await fetch(
  //         G_GET_SINGLE_ASTROLOGER_BY_TOKEN(guruToken)
  //       );

  //       if (response.ok) {
  //         const responseData = await response.json();
  //         //console.log("ResponseData", responseData);
  //         setCallAvailability(responseData?.guru?.callAvailability);
  //       } else {
  //         throw new Error("Request failed");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };
  //   /* The above code is setting up an interval that will execute the functions `fetchData()` and
  //  `fetchDataforAstrologer()` every 5 seconds. */
  //   const interval = setInterval(() => {
  //     // fetchData();
  //     fetchDataforAstrologer();
  //   }, 5000);

  //   // fetchData();
  //   fetchDataforAstrologer();
  //   return () => clearInterval(interval);
  // }, []);

  // console.log(callAvailability);

  return (
    <>
      {login && <BasicModal setLogin={setLogin} />}

      <div>
        <Modal
          size={isMobile ? "xs" : "lg"}
          show={showModal}
          onClose={closeModal}
        >
          <div className="w-full flex flex-col items-center gap-4 md:gap-8 ">
            {insufficientBalance ? (
              <InsufficientBalanceContent
                astroDetails={astroDetails}
                fee={fee}
                minCallDuration={minCallDuration}
                userWalletBalance={userWalletBalance}
              />
            ) : (
              <ConsultationModalContent
                astroDetails={astroDetails}
                fee={fee}
                minCallDuration={minCallDuration}
                userWalletBalance={userWalletBalance}
              />
            )}

            <div className="flex justify-center gap-4">
              <Link href={"/wallet/pricelist"}>
                <button
                  className={`w-[5.5rem] md:w-[13.375rem] flex justify-center items-center gap-[0.21rem] py-[0.33rem] md:py-4 px-[0.46rem] md:px-[1.38rem] rounded md:rounded-xl ${
                    insufficientBalance ? "bg-[#965efbb2]" : "bg-[#26C884] "
                  } text-white text-[0.75rem] md:text-[1.625rem] font-semibold leading-tight`}
                >
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
              </Link>
              {insufficientBalance ? (
                <button
                  className={`w-[5.5rem] md:w-[13.375rem] flex justify-center items-center gap-[0.21rem] py-[0.33rem] md:py-4 px-[0.46rem] md:px-[1.38rem] rounded md:rounded-xl border-[0.55px] border-[#965efbb2] text-[0.75rem] md:text-[1.625rem] font-semibold leading-tight`}
                  onClick={closeModal}
                >
                  Cancel
                </button>
              ) : (
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
              )}
            </div>
          </div>
        </Modal>
        <div className="flex flex-wrap gap-[15px] md:gap-[20px] mb-5 justify-center mt-[56px]">
          {displayedData.map((datas: any, index: number) => (
            <div
              key={datas?._id}
              className="w-full h-[9.125rem] rounded-[0.25rem] flex items-center justify-center border border-gray-300 md:w-[48%] lg:w-[32%] hover:border-violet-600 hover:shadow-lg transition delay-200 duration-200 ease-in-out cursor-pointer"
            >
              {/* left section of card */}
              <div className="flex flex-col items-center justify-center w-[35%] h-[100%] border-r-[0.0625rem] border-dashed border-gray-300 bg-[#965efb0d] relative">
                <Link href={`/astrologers/${datas.userName}`}>
                  <div className="block  w-[4.01rem] h-[4.01rem] border-[1px] border-solid border-green-500 mb-[0.67rem] rounded-full">
                    <Image
                      src={datas?.user?.avatar?.url}
                      alt="balkrishnaji"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  {datas?.mostTrusted == true ? (
                    <Image
                      src={Mostchoice}
                      alt="mostchoice"
                      className="absolute top-[46%] left-[50%] transform -translate-x-1/2"
                    />
                  ) : null}
                </Link>

                {/* Exp */}
                <div className="flex items-center mb-[0.37rem] gap-[0.3rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="11"
                    viewBox="0 0 13 11"
                    className="text-gray-900"
                  >
                    <path d="M6.08696 0.25L0 3.52273L6.08696 6.79545L11.0672 4.11727V7.88636H12.1739V3.52273M2.21344 5.80273V7.98455L6.08696 10.0682L9.96047 7.98455V5.80273L6.08696 7.88636L2.21344 5.80273Z" />
                  </svg>
                  <p className="text-[0.75rem] font-semibold text-gray-900 mb-0">
                    {datas?.experience} Yrs
                  </p>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-[0.3rem]">
                  <BsFillStarFill className="w-[8px] text-[#965efb] md:w-[0.75rem]" />
                  <p className="text-[0.75rem] font-medium text-#202020 mb-0 leading-tight">
                    {datas.rating}
                  </p>
                </div>
              </div>

              {/* right section of the card */}
              <div className="flex flex-col items-center justify-between w-[65%] h-full">
                <div className="flex flex-col items-baseline justify-start w-full h-[5.31rem] pl-[0.5rem] pt-[0.25rem]">
                  <Link href={`/astrologers/${datas.userName}`}>
                    <h5 className="text-[0.875rem] font-semibold text-black mb-[0.25rem] text-left">
                      {` ${datas?.user.firstName} ${datas?.user.lastName}`}
                    </h5>
                  </Link>
                  <div className="flex items-center gap-[0.5rem] mb-[0.25rem]">
                    <Image
                      src={Spec}
                      alt="Spec"
                      width={100}
                      height={100}
                      className="object-cover w-[0.875rem] h-fit rounded-full"
                    />
                    <p className="text-[0.875rem] font-normal text-gray-500 mb-0 leading-tight">
                      {datas?.specialization.slice(0, 3).join(",")}...
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem] mb-[0.25rem]">
                    <FaBriefcase className="w-[0.875rem] text-gray-400" />
                    <p className="text-[0.875rem] w-[100px] truncate ... text-ellipsis font-normal text-gray-500 mb-0 leading-tight">
                      {datas?.skills}
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.5rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="#707070"
                    >
                      <path d="M8.86667 0.5H0V9.51695H5.13333V14.5H14V5.48305H8.86667V0.5ZM3.8589 2.63559L2.39438 6.88602H3.38333L3.62151 6.19492H5.13333V8.5678H0.933333V1.44915H7.93333V5.48305H5.98885L5.00792 2.63559H3.8589ZM4.91814 5.24576H3.94853L4.43333 3.8387L4.91814 5.24576ZM13.0667 6.4322V13.5508H6.06667V6.4322H13.0667Z" />
                      <path d="M8.79177 10.7176C8.88104 10.8634 8.97932 11.0033 9.08603 11.1364C8.7477 11.322 8.36346 11.4149 7.93333 11.4153V12.3644C8.63745 12.3644 9.26654 12.1743 9.8 11.8061C10.3335 12.1743 10.9626 12.3644 11.6667 12.3644V11.4153C11.2374 11.4153 10.8532 11.3222 10.514 11.1362C10.6207 11.0032 10.719 10.8634 10.8082 10.7176C11.0772 10.2729 11.2751 9.78752 11.3943 9.27966H11.9V8.33051H10.2667V7.61864H9.33333V8.33051H7.7V9.27966H8.20569C8.32494 9.78752 8.52276 10.2729 8.79177 10.7176ZM10.428 9.27966C10.3314 9.60815 10.1932 9.92243 10.0167 10.2146C9.95078 10.3223 9.87841 10.4258 9.8 10.5245C9.72729 10.4331 9.65981 10.3375 9.59788 10.2382C9.41426 9.93957 9.27099 9.61716 9.17193 9.27966H10.428Z" />
                    </svg>
                    <p className="text-[0.875rem] font-normal text-gray-500 mb-0 leading-tight">
                      {datas?.languages?.slice(0, 3).join(",")}...
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end w-full border-t-[0.0625rem] border-dashed border-gray-300 gap-[1.94rem] pr-[2.5rem]">
                  <div>
                    {/* <p className="text-[0.875rem] font-semibold text-green-500 mb-0">
                    Free
                  </p> */}
                    <p className="text-[0.875rem] font-bold text-green-500 mb-0">
                      {/* {"₹" + fee + "/Min"} */}
                      {"₹" + getPrice(userDetails, datas) + "/Min"}
                    </p>
                  </div>
                  <button
                    className={`flex w-[5.375rem] h-[2rem] py-2 px-3 my-1.5 justify-center items-center rounded-[0.25rem] gap-[0.5rem] ${
                      datas?.callAvailability === "online"
                        ? "cursor-pointer"
                        : "cursor-no-drop"
                    }  font-medium ${
                      datas?.callAvailability === "online"
                        ? " text-white"
                        : datas?.callAvailability === "busy"
                        ? "text-red-500"
                        : "text-[#707070]"
                    } ${
                      datas?.callAvailability === "online"
                        ? "bg-green-500"
                        : "bg-white"
                    } bg-green-500 ${
                      datas?.callAvailability === "online"
                        ? "border-none"
                        : "border border-[#3A3938]"
                    }  hover:scale-105 transition delay-200 duration-200 ease-in-out`}
                    onClick={() => {
                      if (datas?.callAvailability === "online" && loginToken) {
                        callClickedHandler(datas?.user?.guru);
                      } else {
                        setLogin(true);
                      }
                    }}
                  >
                    <IoCall
                      className={`w-[14px] md:w-[16px] ${
                        datas?.callAvailability === "online"
                          ? "text-white"
                          : "text-[#707070]"
                      } `}
                    />
                    {datas?.callAvailability === "online"
                      ? "Call"
                      : capitalizeFirstLetter(datas?.callAvailability)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mx-auto items-center mb-5 mt-10  gap-20 justify-center">
          {currentIndex !== 0 ? (
            <button
              onClick={decrement}
              className="w-fit bg-[#965EFB] rounded-lg text-white p-2"
            >
              See Less
            </button>
          ) : null}
          {!(currentIndex + 12 >= consultAstroData.length) ? (
            <button
              onClick={increment}
              className="w-fit bg-[#965EFB] rounded-lg text-white p-2"
            >
              See More
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ConsultCard;
