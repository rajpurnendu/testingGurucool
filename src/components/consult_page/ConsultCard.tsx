"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Balkrishna from "../../../public/assets/Balkrishna.jpg";
import Mostchoice from "../../../public/assets/Mostchoice.svg";
import { BsFillStarFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Spec from "../../../public/assets/Spec.svg";
import useFilterStore from "@/store/filterStore";

const ConsultCard = ({ data }: any) => {
  const [astroData, setAstroData] = useState([]);
  const { responseData, setResponseData } = useFilterStore();
  console.log(responseData?.guru?.docs.length);
  // if (responseData?.guru?.docs.length) {
  //   setAstroData(responseData?.guru?.docs);
  // } else {
  //   setAstroData(data);
  // }

  useEffect(() => {
    if (responseData?.guru?.docs.length) {
      setAstroData(responseData?.guru?.docs);
    } else {
      setAstroData(data); // Make sure 'data' is defined or imported
    }
  }, [responseData]);
  console.log(astroData);

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

  // Determine the slice of the array to show
  const displayedData = astroData.slice(0, currentIndex + 12);

  function capitalizeFirstLetter(str: string) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-[15px] md:gap-[20px] mb-5 justify-center mt-[56px]">
        {displayedData.map((datas: any, index: number) => (
          <div
            key={datas?._id}
            className="w-full h-[9.125rem] rounded-[0.25rem] flex items-center justify-center border border-gray-300 md:w-[48%] lg:w-[32%] hover:border-violet-600 hover:shadow-lg transition delay-200 duration-200 ease-in-out cursor-pointer"
          >
            {/* left section of card */}
            <div className="flex flex-col items-center justify-center w-[35%] h-[100%] border-r-[0.0625rem] border-dashed border-gray-300 bg-[#965efb0d] relative">
              <Link href={`/astrologers/${datas.userName}`}>
                <div className="block w-[4.01rem] h-[4.01rem] border-[1.07px] border-solid border-green-500 mb-[0.67rem] rounded-full">
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
                <Link href={`/blogs`}>
                  <h5 className="text-[0.875rem] font-semibold text-black mb-[0.25rem] text-left">
                    {datas?.user.firstName}
                    {datas?.user.lastName}
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
                    {"₹" + datas?.firstOfferPrice?.national?.fee + "/Min"}
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
        {!(currentIndex + 12 >= astroData.length) ? (
          <button
            onClick={increment}
            className="w-fit bg-[#965EFB] rounded-lg text-white p-2"
          >
            See More
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ConsultCard;
