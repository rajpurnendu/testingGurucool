"use client"
import Image from "next/image";
import consultation_failed from "../../../public/assets/consultation_failed.webp";
import { redirect } from "next/navigation";
import Link from "next/link";

const ConsultationFailed = () => {
  const openFreshchat = () => {
    //@ts-ignore
    if (window.fcWidget && typeof window.fcWidget.open === "function") {
      //@ts-ignore
      window.fcWidget.open();
    }
  };
  
  return (
    <>
      <div className="flex flex-col items-center gap-[0.5rem]">
        <h3
          className="text-[0.875rem] md:text-[1.375rem] leading-normal font-semibold text-gray-900"
          id="modal-title"
        >
          Consultation{" "}
          <span className="text-[0.875rem] md:text-[1.375rem] leading-normal font-semibold text-red-600">
            Failed
          </span>
        </h3>
        <div className="w-[12rem] md:w-[20rem] h-[12rem] md:h-[20rem]">
          <Image
            src={consultation_failed}
            width={100}
            height={100}
            alt="astro-avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:w-[20rem]">
          <h6 className="md:text-[0.875rem] font-semibold leading-tight text-[#707070]">
            Connection Failed
          </h6>
          <p className= " text-[0.75rem] md:text-[0.75rem] mt-[0.26rem] font-normal leading-tight text-[#707070] text-justify">
            Sorry for the inconvenience caused your consultation could not be
            completed at the moment due to some technical glitch, please try
            after sometime
          </p>
          <Link href={"/call-to-astrologers"} className="self-end">
            <button className="text-violet-600 text-[0.75rem] md:text-[0.75rem] font-semibold mt-1 self-end">
              Try Again
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[80%]  md:w-[20rem] ">
        <button className="w-full text-[0.75rem] rounded-[0.34rem] p-[0.34rem] md:p-[0.54rem] bg-[#965efbb2] text-white  md:text-base font-medium text-center" onClick={openFreshchat}>
          Contact Support Team
        </button>
      </div>
      <div className="w-[80%]  md:w-[20rem] ">
        <Link href={"/"} >
          <button
            className="w-full text-[0.75rem] rounded-[0.34rem] p-[0.34rem]  md:p-[0.54rem] bg-white text-[#3A3938] border border-[#3A3938] md:text-base font-medium text-center"
            // onClick={handleNavigate}
          >
            Go back to Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ConsultationFailed;
