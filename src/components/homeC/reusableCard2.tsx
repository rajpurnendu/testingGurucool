"use client";
import Image from "next/image";
import { useState } from "react";

const ReusableCard2 = ({ data }: any) => {
  const [descLength, setDescLength] = useState(220);
  return (
    <div className="relative rounded-xl xl:rounded-lg shadow xl:shadow hover:xl:shadow-md transition duration-300 ease-in-out  xl:min-w-[281px] min-w-[247px] p-[1rem]">
      <div className="flex flex-col items-center xl:gap-[0.81rem] gap-[23px]">
        <div className="flex flex-row w-full justify-end items-end">
          <svg
            className=" left-[5%] absolute xl:w-[1.03rem] h-auto w-[16px]   xl:h-[0.95rem]"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4311_38306)">
              <path
                d="M7.94009 1.16348V3.70683C7.94009 4.05176 7.63602 4.33125 7.26092 4.33125C5.92261 4.33125 5.19463 5.59349 5.09373 8.08475H7.26092C7.63602 8.08475 7.94009 8.3645 7.94009 8.7093L7.94009 14.0795C7.94009 14.4242 7.63602 14.7037 7.26092 14.7037H1.48274C1.1075 14.7037 0.803711 14.424 0.803711 14.0795L0.803711 8.7093C0.803711 7.51504 0.934474 6.41911 1.19225 5.45159C1.45662 4.45953 1.86245 3.59213 2.39808 2.8734C2.94924 2.13476 3.63867 1.55514 4.44737 1.15134C5.26153 0.745106 6.20831 0.539062 7.26115 0.539062C7.63602 0.539062 7.94009 0.818547 7.94009 1.16348ZM16.6991 4.33129C17.074 4.33129 17.3784 4.05155 17.3784 3.70687V1.16353C17.3784 0.818591 17.0741 0.539106 16.6991 0.539106C15.6467 0.539106 14.6998 0.745194 13.8859 1.15139C13.0771 1.55518 12.3873 2.1348 11.836 2.87344C11.3006 3.59217 10.8947 4.45962 10.6303 5.45189C10.3727 6.41972 10.2419 7.51565 10.2419 8.70934V14.0795C10.2419 14.4243 10.5461 14.7038 10.9211 14.7038H16.6991C17.074 14.7038 17.378 14.424 17.378 14.0795V8.7093C17.378 8.36454 17.074 8.08475 16.6991 8.08475H14.5628C14.6622 5.59353 15.3795 4.33129 16.6991 4.33129Z"
                fill="#26C884"
              />
            </g>
            <defs>
              <clipPath id="clip0_4311_38306">
                <rect
                  width="16.5746"
                  height="15.2417"
                  fill="white"
                  transform="translate(0.803711)"
                />
              </clipPath>
            </defs>
          </svg>

          <p className="text-neutral-500 xl:font-semibold xl:text-base text-xs font-normal leading-[18px] xl:leading-[17.44px]">
            7th May 23
          </p>
        </div>
        {data.desc.length > descLength ? (
          <div className="px-2">
            <p className="xl:text-[1rem] text-justify text-xs font-normal leading-[1.2rem]">
              {`${data.desc.slice(0, descLength)}...`}
            </p>
            <p
              onClick={() => setDescLength(data.desc.length)}
              className="text-[#965EFB] cursor-pointer font-semibold text-xs leading-[25px] xl:text-[1.125rem]"
            >
              View More
            </p>
          </div>
        ) : (
          <div className="px-2">
            <p className="xl:text-[1rem] text-justify text-xs font-normal leading-[1.2rem]">
              {`${data.desc.slice(0, descLength)}`}
            </p>
            <p
              onClick={() => setDescLength(220)}
              className="text-[#965EFB] cursor-pointer font-semibold text-xs leading-[25px] xl:text-[1.125rem]"
            >
              View Less
            </p>
          </div>
        )}

        <div className="w-full m-auto">
          <div className="flex flex-col items-center gap-[0.25rem] justify-center">
            <Image
              priority={true}
              width="200"
              height="200"
              className="w-[63.04px] h-[63.04px] rounded-full border border-violet-500 border-opacity-70"
              src={data.img}
              alt="user"
            />
            <div className="flex flex-row gap-[1px]">
              <svg
                className="w-[10.75px] h-[10.16px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.267 5.89009C12.0778 5.33454 11.6846 4.06516 10.7018 4.06516H8.50293C8.0746 4.06516 7.69384 3.79237 7.55607 3.38681L6.83097 1.25223C6.52372 0.347758 5.24449 0.347755 4.93724 1.25223L4.21214 3.38681C4.07437 3.79237 3.69361 4.06516 3.26528 4.06516H1.06643C0.0835862 4.06516 -0.309586 5.33454 0.501183 5.89009L2.20124 7.05499C2.57159 7.30875 2.72742 7.77822 2.58234 8.20308L1.90554 10.185C1.5939 11.0975 2.62713 11.879 3.42043 11.3308L5.34674 9.99947C5.68889 9.763 6.14169 9.763 6.48384 9.99947L8.36759 11.3014C9.16507 11.8525 10.2016 11.0603 9.87921 10.1461L9.19567 8.20805C9.04512 7.78116 9.20009 7.30638 9.57349 7.05052L11.267 5.89009Z"
                  fill="#965EFB"
                  fillOpacity="0.7"
                />
              </svg>
              <svg
                className="w-[10.75px] h-[10.16px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.267 5.89009C12.0778 5.33454 11.6846 4.06516 10.7018 4.06516H8.50293C8.0746 4.06516 7.69384 3.79237 7.55607 3.38681L6.83097 1.25223C6.52372 0.347758 5.24449 0.347755 4.93724 1.25223L4.21214 3.38681C4.07437 3.79237 3.69361 4.06516 3.26528 4.06516H1.06643C0.0835862 4.06516 -0.309586 5.33454 0.501183 5.89009L2.20124 7.05499C2.57159 7.30875 2.72742 7.77822 2.58234 8.20308L1.90554 10.185C1.5939 11.0975 2.62713 11.879 3.42043 11.3308L5.34674 9.99947C5.68889 9.763 6.14169 9.763 6.48384 9.99947L8.36759 11.3014C9.16507 11.8525 10.2016 11.0603 9.87921 10.1461L9.19567 8.20805C9.04512 7.78116 9.20009 7.30638 9.57349 7.05052L11.267 5.89009Z"
                  fill="#965EFB"
                  fillOpacity="0.7"
                />
              </svg>
              <svg
                className="w-[10.75px] h-[10.16px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.267 5.89009C12.0778 5.33454 11.6846 4.06516 10.7018 4.06516H8.50293C8.0746 4.06516 7.69384 3.79237 7.55607 3.38681L6.83097 1.25223C6.52372 0.347758 5.24449 0.347755 4.93724 1.25223L4.21214 3.38681C4.07437 3.79237 3.69361 4.06516 3.26528 4.06516H1.06643C0.0835862 4.06516 -0.309586 5.33454 0.501183 5.89009L2.20124 7.05499C2.57159 7.30875 2.72742 7.77822 2.58234 8.20308L1.90554 10.185C1.5939 11.0975 2.62713 11.879 3.42043 11.3308L5.34674 9.99947C5.68889 9.763 6.14169 9.763 6.48384 9.99947L8.36759 11.3014C9.16507 11.8525 10.2016 11.0603 9.87921 10.1461L9.19567 8.20805C9.04512 7.78116 9.20009 7.30638 9.57349 7.05052L11.267 5.89009Z"
                  fill="#965EFB"
                  fillOpacity="0.7"
                />
              </svg>
              <svg
                className="w-[10.75px] h-[10.16px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.267 5.89009C12.0778 5.33454 11.6846 4.06516 10.7018 4.06516H8.50293C8.0746 4.06516 7.69384 3.79237 7.55607 3.38681L6.83097 1.25223C6.52372 0.347758 5.24449 0.347755 4.93724 1.25223L4.21214 3.38681C4.07437 3.79237 3.69361 4.06516 3.26528 4.06516H1.06643C0.0835862 4.06516 -0.309586 5.33454 0.501183 5.89009L2.20124 7.05499C2.57159 7.30875 2.72742 7.77822 2.58234 8.20308L1.90554 10.185C1.5939 11.0975 2.62713 11.879 3.42043 11.3308L5.34674 9.99947C5.68889 9.763 6.14169 9.763 6.48384 9.99947L8.36759 11.3014C9.16507 11.8525 10.2016 11.0603 9.87921 10.1461L9.19567 8.20805C9.04512 7.78116 9.20009 7.30638 9.57349 7.05052L11.267 5.89009Z"
                  fill="#965EFB"
                  fillOpacity="0.7"
                />
              </svg>
              <svg
                className="w-[10.75px] h-[10.16px]"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.267 5.89009C12.0778 5.33454 11.6846 4.06516 10.7018 4.06516H8.50293C8.0746 4.06516 7.69384 3.79237 7.55607 3.38681L6.83097 1.25223C6.52372 0.347758 5.24449 0.347755 4.93724 1.25223L4.21214 3.38681C4.07437 3.79237 3.69361 4.06516 3.26528 4.06516H1.06643C0.0835862 4.06516 -0.309586 5.33454 0.501183 5.89009L2.20124 7.05499C2.57159 7.30875 2.72742 7.77822 2.58234 8.20308L1.90554 10.185C1.5939 11.0975 2.62713 11.879 3.42043 11.3308L5.34674 9.99947C5.68889 9.763 6.14169 9.763 6.48384 9.99947L8.36759 11.3014C9.16507 11.8525 10.2016 11.0603 9.87921 10.1461L9.19567 8.20805C9.04512 7.78116 9.20009 7.30638 9.57349 7.05052L11.267 5.89009Z"
                  fill="#965EFB"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 xl:font-semibold font-normal xl:text-base leading-[15px] xl:leading-[17.44px]">
              {data.name}
            </p>
            <div className="flex justify-between">
              <p className="xl:text-sm text-xs leading-[15px] xl:leading-none text-neutral-500 font-normal">
                {data.city}
              </p>
              <svg
                className="absolute right-4 xl:w-[1.03rem] w-[16px] h-[15px]  xl:h-[0.95rem]"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.62165 14.1595L8.56596 11.6554C8.5584 11.3158 8.79701 11.0314 9.0989 11.0201C10.176 10.9796 10.7343 9.71485 10.7609 7.25896L9.01671 7.32447C8.71481 7.33581 8.46396 7.06957 8.45641 6.73008L8.33881 1.44276C8.33126 1.10331 8.56987 0.818906 8.87176 0.807567L13.5222 0.632909C13.8242 0.621566 14.0748 0.887816 14.0824 1.22704L14.2 6.51437C14.2261 7.69021 14.1449 8.77319 13.9586 9.73358C13.7676 10.7183 13.4599 11.5846 13.0446 12.3085C12.6172 13.0524 12.075 13.6439 11.433 14.0659C10.7866 14.4905 10.0291 14.722 9.18175 14.7538C8.88005 14.7651 8.62921 14.4991 8.62165 14.1595ZM1.50273 11.3053C1.20098 11.3167 0.962195 11.6013 0.969743 11.9406L1.02544 14.4448C1.03299 14.7844 1.28399 15.0504 1.58577 15.039C2.43279 15.0072 3.19039 14.7757 3.83652 14.3512C4.47866 13.9291 5.02115 13.3376 5.44864 12.5937C5.86385 11.8699 6.17147 11.0035 6.36255 10.0186C6.54871 9.05788 6.62996 7.9749 6.60381 6.79962L6.48622 1.51229C6.47867 1.17285 6.22774 0.906826 5.92593 0.918162L1.27562 1.09281C0.97388 1.10415 0.73532 1.38877 0.742865 1.728L0.860464 7.01537C0.868014 7.35481 1.11879 7.6211 1.42057 7.60976L3.13991 7.54519C3.11448 10.001 2.56478 11.2654 1.50273 11.3053Z"
                  fill="#26C884"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard2;
