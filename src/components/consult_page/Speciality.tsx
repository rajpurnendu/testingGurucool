"use client";
import { FaHeart, FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";
import { MdBusiness, MdBusinessCenter } from "react-icons/md";
import { GiBigDiamondRing, GiCardRandom } from "react-icons/gi";
import filter from "../../../public/assets/filter(2).svg";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import useFilterStore from "@/store/filterStore";
import Image from "next/image";
import SideBar from "../sideBar/SideBar";
import { useEffect, useRef, useState } from "react";
import { GET_Spec_Astrologer2 } from "@/lib/data";

const Speciality = () => {
  const {
    name,
    setName,
    consultAstroData,
    totalPage,
    setTotalPage,
    setConsultAstroData,
  } = useFilterStore();
  const pathname = usePathname();
  // const modalRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const handleOutSide = (event: MouseEvent) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //     setSidebarOpen(false);
  //   }
  // };

  // useEffect(
  //   ()=>{

  //     const data =  GET_Spec_Astrologer2(spec);
  //     setConsultAstroData(data?.guru?.docs);
  //   }
  // },[names])

  const specFunction = async (n: string) => {
    const data = await GET_Spec_Astrologer2(n);
    setConsultAstroData(data?.guru?.docs);
    console.log(data);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // useEffect(() => {
  //   document.addEventListener("click", handleOutSide);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     document.removeEventListener("click", handleOutSide);
  //   };
  // }, [modalRef]);

  const colorMapping: { [key: string]: string } = {
    "/call-to-astrologers/Love": "text-red-500",
    "/call-to-astrologers/Business": "text-blue-500",
    // Add other routes and their corresponding colors here
  };

  // const colorClass: string = colorMapping[pathname] || "";

  const Specialization = [
    {
      id: 1,
      name: (
        <p
          className={clsx(
            `text-[14px] md:text-[20px] text-gray-600 font-semibold`,
            {
              "text-red-500": pathname === `/call-to-astrologers/Love`,
            }
          )}
        >
          Love
        </p>
      ),
      icon: (
        <FaHeart
          className={clsx(`w-[20px] md:w-[24px] h-auto text-gray-600`, {
            "text-red-500": pathname === `/call-to-astrologers/Love`,
          })}
        />
      ),
      names: "Love",
      url: "/call-to-astrologers/Love",
    },
    {
      id: 2,
      names: "Marriage",
      name: (
        <p
          className={`text-[14px] md:text-[20px] font-semibold ${
            pathname === "/call-to-astrologers/Marriage"
              ? "text-[#34ebd8]"
              : "text-gray-600"
          }`}
        >
          Marriage
        </p>
      ),
      icon: (
        <GiBigDiamondRing
          className={`w-[20px] md:w-[24px] h-auto ${
            pathname === `/call-to-astrologers/Marriage`
              ? "text-[#34ebd8]"
              : "text-gray-600"
          }`}
        />
      ),
      url: "/call-to-astrologers/Marriage",
    },
    {
      id: 3,
      names: "career",
      name: (
        <p
          className={`text-[14px] md:text-[20px] font-semibold ${
            pathname === "/call-to-astrologers/Career"
              ? "text-[#a834eb]"
              : "text-gray-600"
          }`}
        >
          Career
        </p>
      ),
      icon: (
        <MdBusinessCenter
          className={`w-[20px] md:w-[24px] h-auto ${
            pathname === `/call-to-astrologers/Career`
              ? "text-[#a834eb]"
              : "text-gray-600"
          }`}
        />
      ),
      url: "/call-to-astrologers/Career",
    },
    {
      id: 4,
      names: "Business",
      name: (
        <p
          className={`text-[14px] md:text-[20px] font-semibold ${
            pathname === "/call-to-astrologers/Business"
              ? "text-[#1e88e5]"
              : "text-gray-600"
          }`}
        >
          Business
        </p>
      ),
      icon: (
        <MdBusiness
          className={`w-[20px] md:w-[24px] h-auto ${
            pathname === `/call-to-astrologers/Business`
              ? "text-[#1e88e5]"
              : "text-gray-600"
          }`}
        />
      ),
      url: "/call-to-astrologers/Business",
    },
    {
      id: 5,

      names: "Life",
      name: (
        <p
          className={clsx(
            `text-[14px] md:text-[20px] text-gray-600 font-semibold`,
            {
              "text-pink-800": pathname === `/call-to-astrologers/Life`,
            }
          )}
        >
          Life
        </p>
      ),
      icon: (
        <FaHandHoldingHeart
          className={clsx(`w-[20px] md:w-[24px] h-auto text-gray-600`, {
            "text-pink-800": pathname === `/call-to-astrologers/Life`,
          })}
        />
      ),
      url: "/call-to-astrologers/Life",
    },
    {
      id: 6,
      names: "Health",
      name: (
        <p
          className={clsx(
            `text-[14px] md:text-[20px] text-gray-600 font-semibold`,
            {
              "text-yellow-600": pathname === `/call-to-astrologers/Health`,
            }
          )}
        >
          Health
        </p>
      ),
      icon: (
        <FaHeartbeat
          className={clsx(`w-[20px] md:w-[24px] h-auto text-gray-600`, {
            "text-yellow-600": pathname === `/call-to-astrologers/Health`,
          })}
        />
      ),
      url: "/call-to-astrologers/Health",
    },
    {
      id: 7,
      names: "Tarot",
      name: (
        <p
          className={clsx(
            `text-[14px] md:text-[20px] text-gray-600 font-semibold`,
            {
              "text-lime-600": pathname === `/call-to-astrologers/Tarot`,
            }
          )}
        >
          Tarot
        </p>
      ),
      icon: (
        <MdBusiness
          className={clsx(`w-[20px] md:w-[24px] h-auto text-gray-600`, {
            "text-lime-600": pathname === `/call-to-astrologers/Tarot`,
          })}
        />
      ),
      url: "/call-to-astrologers/Tarot",
    },
  ];

  return (
    <>
      <div
        // ref={modalRef}
        className="lg:mt-[37px] mb-[20px] md:mb-[20px] lg:mb-[21px] md:px-1 lg:sticky lg:top-[5px] pb-2 bg-white z-10"
      >
        <h6 className="mb-[10px] md:mb-[24px] text-[20px] sm:text-[20px] md:text-[26px] font-medium text-[#3D3D3D] text-left md:block">
          Specialities
        </h6>

        <div className="w-full flex lg:justify-between items-center md:gap-7 lg:gap-0">
          <div
            className="w-[88%] md:w-[90%] lg:w-[94%] flex justify-between items-center gap-5 md:gap-7 lg:gap-0 overflow-x-auto  no-scrollbar lg:overflow-x-hidden pr-2 md:pr-0"
            style={{}}
          >
            {/* 8d66d4 */}
            <Link href={"/call-to-astrologers"} scroll={false}>
              <div
                onClick={() => {
                  specFunction("All");
                }}
                className={clsx(
                  `text-sm md:text-[20px] text-gray-600 font-semibold border-[1px] border-gray-600 rounded-md px-2 py-1 md:border-0`,
                  {
                    "text-violet-600": pathname === `/call-to-astrologers`,
                  }
                )}
              >
                All
              </div>
            </Link>

            {Specialization.map((curr, index) => {
              return (
                <Link href={curr.url} key={curr.id} scroll={false}>
                  <div
                    onClick={() => {
                      specFunction(curr.names);
                    }}
                    className={
                      "flex items-center cursor-pointer gap-[8px] border-[1px] md:border-0 border-gray-600 rounded-md px-2 py-1 md:gap-[8px] lg:gap-[10px]"
                    }
                  >
                    {curr.icon}
                    {curr.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div
            onClick={toggleSidebar}
            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] p-2 border-[1px] border-violet-600 rounded-lg cursor-pointer"
          >
            <Image src={filter} width={100} height={100} alt="filter" />
          </div>
        </div>
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Speciality;
