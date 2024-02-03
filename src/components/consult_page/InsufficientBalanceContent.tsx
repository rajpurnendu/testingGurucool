import { IoIosStar } from "react-icons/io";
import Balkrishna from "../../../public/assets/Balkrishna.jpg";
import Insufficient_balance from "../../../public/assets/Insufficient_balance.png";
import Image from "next/image";

const InsufficientBalanceContent = ({
  astroDetails,
  fee,
  minCallDuration,
  userWalletBalance,
}: {
  astroDetails: any;
  fee: string;
  minCallDuration: number;
  userWalletBalance: any;
}) => {

  console.log("Astrodetails>>>>>>>>>", astroDetails );
  console.log("Fee>>>>>>>>>", fee);
  console.log("minCallDuration>>>>>>>>>", minCallDuration);
  console.log("userWalletBalance>>>>>>>>>", userWalletBalance);

  const feeNumber = parseFloat(fee);
const Balance_required = feeNumber * 5;
  
  return (
    <>
      <div className="flex flex-col items-center gap-[0.5rem]">
        <h3
          className="text-[0.875rem] md:text-[1.125rem] leading-normal font-semibold text-gray-900"
          id="modal-title"
        >
          Insufficient Balance
        </h3>
        <div className="w-[9rem] md:w-[13.83rem] h-[5.68rem] md:h-[8.64rem]">
          <Image
            src={Insufficient_balance}
            width={100}
            height={100}
            alt="astro-avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full py-[0.66rem] md:py-[1.38rem] border-t-[0.196px] border-b-[0.196px] border-gray-700 ">
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-[0.5rem]  md:gap-4 p-[0.17rem] md:p-[0.35rem]">
            <h3 className="text-[0.75rem] md:text-[0.875rem] font-normal">
              Available Balance
            </h3>
            <h4 className="text-[0.875rem] md:text-[1.375rem] font-semibold text-red-600 ">
              ₹{Math.round(userWalletBalance)}
            </h4>
          </div>
          <div className="w-[0.196px] bg-gray-700 mx-[0.91rem] md:mx-8"></div>
          <div className="flex flex-col items-center gap-[0.5rem]  md:gap-4 p-[0.17rem] md:p-[0.35rem]">
            <h3 className="text-[0.75rem]  md:text-[0.875rem] font-normal">
              Balance required
            </h3>

            <h4 className="text-[0.875rem]  md:text-[1.375rem] font-semibold text-green-500 ">
              {" "}
              ₹{Balance_required}
            </h4>
          </div>
        </div>
        <h5 className="text-center text-[0.75rem] md:text-[1rem] font-medium text-gray-700 mt-[0.66rem] md:mt-[1.38rem]">
          Astrologer&apos;s consultation charge:
          <span className="text-violet-400 text-[0.75rem] md:text-[1rem] font-medium">
            {" "}
            ₹{fee}/min
          </span>
        </h5>
      </div>
      <div className="w-full bg-[#26C884] p-[0.38rem] md:p-[0.69rem] rounded-[0.17rem] ">
        <h6 className="font-normal leading-tight text-[0.75rem] md:text-[0.875rem] text-white text-justify">
         {` Minimum balance of 5 minutes ₹${Balance_required} is required to start call
          with ${astroDetails?.user?.firstName} ${astroDetails?.user?.lastName} astrologer.`}
        </h6>
      </div>
      <div className="flex w-full">
        <div>
          <h6 className="text-[0.75rem] md:text-[1rem] font-medium leading-normal ">
            Note:{" "}
          </h6>
        </div>
        <div className="w-full ml-[0.27rem] ">
          <h5 className="text-left text-[0.75rem] md:text-[0.875rem] font-normal">
            A note pushing for pushing the user to do a recharge in order to
            recharge the wallet.
          </h5>
        </div>
      </div>
    </>
  );
};

export default InsufficientBalanceContent;
