import { IoIosStar } from "react-icons/io";
import Balkrishna from "../../../public/assets/Balkrishna.jpg";
import Image from "next/image";
const ConsultationModalContent = ({
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
  console.log(astroDetails);

  return (
    <>
      <div className="flex flex-col items-center gap-[0.5rem]">
        <h3
          className="text-[0.875rem] md:text-[2.125rem] leading-normal font-semibold text-gray-900"
          id="modal-title"
        >
          Consultation Details
        </h3>
        <div className="w-[3.2rem] h-[3.2rem] md:w-[9.375rem] md:h-[9.375rem] rounded-full">
          <Image
            src={astroDetails?.user?.avatar?.url}
            width={100}
            height={100}
            alt="astro-avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3
          className="text-[0.875rem] md:text-[1.625rem] leading-normal font-medium text-gray-900"
          id="modal-title"
        >
          {astroDetails?.user?.firstName} {astroDetails?.user?.lastName}
        </h3>
        <div className="flex justify-center items-center gap-[0.1rem] md:gap-[0.31rem]">
          <IoIosStar className="text-yellow-400 w-[0.70rem] h-[0.70rem] md:w-[2.125rem] md:h-[2.125rem]" />
          <IoIosStar className="text-yellow-400 w-[0.70rem] h-[0.70rem] md:w-[2.125rem] md:h-[2.125rem]" />
          <IoIosStar className="text-yellow-400 w-[0.70rem] h-[0.70rem] md:w-[2.125rem] md:h-[2.125rem]" />
          <IoIosStar className="text-yellow-400 w-[0.70rem] h-[0.70rem] md:w-[2.125rem] md:h-[2.125rem]" />
          <IoIosStar className="text-yellow-400 w-[0.70rem] h-[0.70rem] md:w-[2.125rem] md:h-[2.125rem]" />
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="12"
            // height="13"
            viewBox="0 0 12 13"
            fill="none"
            className="w-3 h-3 lg:w-9 lg:h-9"
          >
            <path
              d="M11.3709 6.4867H10.1493C9.98728 6.4867 9.83192 6.55105 9.71737 6.6656C9.60282 6.78015 9.53847 6.93551 9.53847 7.09751C9.53847 7.25951 9.60282 7.41487 9.71737 7.52942C9.83192 7.64397 9.98728 7.70833 10.1493 7.70833V8.92996H9.42592C9.49833 8.73435 9.53641 8.52771 9.53847 8.31914C9.53853 7.91575 9.40546 7.52361 9.15991 7.20357C8.91435 6.88352 8.57004 6.65346 8.18038 6.54908C7.79073 6.4447 7.37752 6.47183 7.00486 6.62627C6.6322 6.78071 6.32093 7.05381 6.11933 7.40322C6.07884 7.47272 6.05247 7.54953 6.04175 7.62925C6.03102 7.70897 6.03615 7.79002 6.05684 7.86775C6.07752 7.94549 6.11336 8.01837 6.16229 8.08221C6.21122 8.14605 6.27227 8.1996 6.34196 8.23978C6.41164 8.27997 6.48857 8.30599 6.56833 8.31636C6.6481 8.32673 6.72913 8.32124 6.80677 8.3002C6.88441 8.27917 6.95712 8.24301 7.02075 8.19379C7.08437 8.14458 7.13765 8.08328 7.17752 8.01342C7.23117 7.92073 7.30823 7.84376 7.40098 7.79022C7.49373 7.73667 7.59892 7.70843 7.70602 7.70833C7.86802 7.70833 8.02338 7.77268 8.13793 7.88723C8.25248 8.00178 8.31684 8.15714 8.31684 8.31914C8.31684 8.48114 8.25248 8.6365 8.13793 8.75105C8.02338 8.8656 7.86802 8.92996 7.70602 8.92996C7.54402 8.92996 7.38866 8.99431 7.27411 9.10886C7.15956 9.22341 7.09521 9.37877 7.09521 9.54077C7.09521 9.70277 7.15956 9.85813 7.27411 9.97268C7.38866 10.0872 7.54402 10.1516 7.70602 10.1516C7.86802 10.1516 8.02338 10.2159 8.13793 10.3305C8.25248 10.445 8.31684 10.6004 8.31684 10.7624C8.31684 10.9244 8.25248 11.0798 8.13793 11.1943C8.02338 11.3089 7.86802 11.3732 7.70602 11.3732C7.59892 11.3731 7.49373 11.3449 7.40098 11.2913C7.30823 11.2378 7.23117 11.1608 7.17753 11.0681C7.13766 10.9982 7.08438 10.937 7.02075 10.8877C6.95713 10.8385 6.88441 10.8024 6.80677 10.7813C6.72913 10.7603 6.64811 10.7548 6.56834 10.7652C6.48857 10.7755 6.41164 10.8016 6.34196 10.8417C6.27228 10.8819 6.21122 10.9355 6.16229 10.9993C6.11336 11.0632 6.07753 11.136 6.05684 11.2138C6.03616 11.2915 6.03103 11.3726 6.04175 11.4523C6.05248 11.532 6.07884 11.6088 6.11934 11.6783C6.32093 12.0277 6.63221 12.3008 7.00487 12.4553C7.37752 12.6097 7.79073 12.6368 8.18038 12.5324C8.57003 12.4281 8.91434 12.198 9.1599 11.878C9.40545 11.5579 9.53852 11.1658 9.53847 10.7624C9.53641 10.5538 9.49833 10.3472 9.42592 10.1516H10.1493V11.984C10.1493 12.146 10.2136 12.3014 10.3282 12.4159C10.4427 12.5305 10.5981 12.5948 10.7601 12.5948C10.9221 12.5948 11.0775 12.5305 11.192 12.4159C11.3066 12.3014 11.3709 12.146 11.3709 11.984V7.70833C11.5329 7.70833 11.6883 7.64397 11.8028 7.52942C11.9174 7.41487 11.9817 7.25951 11.9817 7.09751C11.9817 6.93551 11.9174 6.78015 11.8028 6.6656C11.6883 6.55105 11.5329 6.4867 11.3709 6.4867ZM4.05963 6.02411C4.09894 6.18121 4.19905 6.31625 4.33793 6.39953C4.4067 6.44077 4.48291 6.46806 4.56222 6.47984C4.64154 6.49162 4.7224 6.48767 4.80018 6.4682C4.87797 6.44874 4.95115 6.41414 5.01557 6.36639C5.07998 6.31864 5.13436 6.25867 5.1756 6.1899C5.21684 6.12113 5.24413 6.04492 5.25591 5.9656C5.26769 5.88629 5.26374 5.80543 5.24427 5.72765L4.17117 1.43375C4.09584 1.13236 3.92193 0.864789 3.67707 0.673592C3.43221 0.482394 3.13046 0.37854 2.8198 0.37854C2.50913 0.37854 2.20738 0.482394 1.96253 0.673592C1.71767 0.864789 1.54375 1.13236 1.46843 1.43375L0.394733 5.72765C0.355419 5.88474 0.380121 6.05102 0.463404 6.1899C0.546687 6.32878 0.68173 6.42889 0.838823 6.4682C0.995917 6.50752 1.16219 6.48281 1.30108 6.39953C1.43996 6.31625 1.54007 6.18121 1.57938 6.02411L1.92192 4.65425H3.71727L4.05963 6.02411ZM2.2274 3.43262L2.65308 1.73021C2.66598 1.69645 2.68883 1.66741 2.7186 1.64692C2.74837 1.62643 2.78366 1.61546 2.8198 1.61546C2.85594 1.61546 2.89123 1.62643 2.921 1.64692C2.95077 1.66741 2.97361 1.69645 2.98652 1.73021L3.41197 3.43262H2.2274ZM7.09521 3.43262H7.70602C7.86797 3.43278 8.02324 3.49719 8.13775 3.6117C8.25227 3.72622 8.31667 3.88149 8.31684 4.04343V4.65425C8.31684 4.81625 8.38119 4.97161 8.49574 5.08616C8.61029 5.20071 8.76565 5.26506 8.92765 5.26506C9.08965 5.26506 9.24501 5.20071 9.35956 5.08616C9.47411 4.97161 9.53847 4.81625 9.53847 4.65425V4.04343C9.53794 3.5576 9.34471 3.09182 9.00117 2.74829C8.65763 2.40475 8.19185 2.21152 7.70602 2.21099H7.09521C6.93321 2.21099 6.77784 2.27534 6.66329 2.38989C6.54874 2.50444 6.48439 2.65981 6.48439 2.8218C6.48439 2.9838 6.54874 3.13917 6.66329 3.25372C6.77784 3.36827 6.93321 3.43262 7.09521 3.43262ZM4.65195 8.92996H4.04113C3.87918 8.92979 3.72391 8.86539 3.6094 8.75087C3.49488 8.63636 3.43048 8.48109 3.43031 8.31914V7.70833C3.43031 7.54633 3.36596 7.39096 3.25141 7.27641C3.13686 7.16186 2.9815 7.09751 2.8195 7.09751C2.6575 7.09751 2.50214 7.16186 2.38759 7.27641C2.27304 7.39096 2.20868 7.54633 2.20868 7.70833V8.31914C2.20921 8.80497 2.40244 9.27075 2.74598 9.61429C3.08952 9.95783 3.5553 10.1511 4.04113 10.1516H4.65195C4.81394 10.1516 4.96931 10.0872 5.08386 9.97268C5.19841 9.85813 5.26276 9.70277 5.26276 9.54077C5.26276 9.37877 5.19841 9.22341 5.08386 9.10886C4.96931 8.99431 4.81394 8.92996 4.65195 8.92996Z"
              fill="#965EFB"
            />
          </svg>

          <h4 className="text-[0.75rem] md:text-[1.375rem] font-normal text-slate-700 ml-[0.32rem]">
            {astroDetails?.languages?.join(", ")}
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[0.75rem] md:gap-4 ">
        {astroDetails?.skills.slice(0, 4).map((curr: any, index: number) => {
          return (
            <div
              key={index}
              className="py-[0.25rem] md:py-[0.75rem] px-[0.5rem] md:px-6 bg-[#D9D9D9] md:text-base text-slate-600 rounded-[1.33rem] md:rounded-[4rem] "
            >
              {curr}
            </div>
          );
        })}
      </div>
      <div className="w-[11.875rem] md:w-full py-[0.66rem] md:py-8 border-t-[0.196px] border-b-[0.196px] border-gray-700 ">
        <div className="w-full flex md:justify-center">
          <div className="flex flex-col items-center gap-[0.5rem] md:gap-6 p-[0.17rem]">
            <h3 className="text-[0.75rem] md:text-xl font-normal">
              Consultation Charges
            </h3>
            <h4 className="text-[0.875rem] md:text-[2.125rem] font-semibold text-violet-600 ">
              ₹{fee}/min
            </h4>
          </div>
          <div className="w-[0.196px] bg-gray-700 mx-[0.66rem] md:mx-8"></div>
          <div className="flex flex-col items-center gap-[0.5rem] md:gap-6 p-[0.17rem]">
            <h3 className="text-[0.75rem] md:text-xl font-normal">
              Your Wallet Balance
            </h3>

            <h4 className="text-[0.875rem] md:text-[2.125rem] font-semibold text-green-500 ">
              {" "}
              ₹{Math.round(userWalletBalance)}
            </h4>
          </div>
        </div>
        <h4 className="text-center text-[0.75rem] md:text-[1.375rem] font-medium text-gray-700 mt-[0.66rem] md:mt-8">
          Maximum call duration:
          <span className="text-violet-400 text-[0.75rem]  md:text-[1.375rem] font-medium">
            {" "}
            {minCallDuration} mins
          </span>
        </h4>
      </div>
      <div className="flex md:w-[88%] md:mx-auto">
        <div>
          <h6 className="text-[0.75rem] md:text-[1.375rem] font-medium leading-normal ">
            Note:{" "}
          </h6>
        </div>
        <div className="w-[11rem] md:w-full ml-[0.27rem] ">
          <h5 className="text-left text-[0.75rem] md:text-[1.25rem] font-normal">
            Based on the amount in your wallet you will be disconnected after{" "}
            <span className="text-red-500 text-[0.75rem] md:text-[1.25rem]  font-normal">
              {minCallDuration} mins
            </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default ConsultationModalContent;
