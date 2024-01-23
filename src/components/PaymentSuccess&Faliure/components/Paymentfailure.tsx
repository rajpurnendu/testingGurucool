import Image from "next/image";
import FailureIcon from "../../../../public/images/wallet/Group 52346.svg";

const Paymentfailure = ({ data }: { data: any }) => {
  return (
    <div className="w-[90%] mx-auto my-10 p-8 rounded-lg text-center shadow-[0_0_20px_rgba(0,0,0,0.2)] mt-[100px]">
      <div className="flex mb-5 justify-center">
        <Image src={FailureIcon} height={80} width={150} alt="Succes Icon" />
      </div>
      <h2 className="font-bold text-red-500 leading-tight text-[1.25rem] mb-5">
        Yeah! Payment Successfull
      </h2>
      <div className="flex">
        <div className="flex flex-col justify-center items-end mb-5 w-[48%]">
          <p className="font-bold text-[#767676] text-[12px] md:text-[16px] mb-4 mt-0">
            Amount :{" "}
          </p>
          <p className="font-bold text-[#767676] text-[12px] md:text-[16px] mb-4 mt-0">
            Transaction ID :
          </p>
        </div>
        <div className="flex flex-col justify-center items-start mb-5 w-[48%]">
          <p className="font-bold text-[#767676] text-[12px] md:text-[16px] mb-4 mt-0">
            &nbsp;{data?.userAmount}
          </p>
          <p className="font-bold text-[#767676] text-[12px] md:text-[16px] mb-4 mt-0">
            &nbsp;{data?.orderId}
          </p>
        </div>
      </div>
      {/* <Link href={"/call-to-astrologers"}> */}
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Contact Support Team
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Paymentfailure;
