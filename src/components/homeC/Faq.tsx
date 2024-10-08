import Image from "next/image";
import line from "@/../public/assets/lineImg.webp";
import arrow from "@/../public/assets/arrow.webp";
import Link from "next/link";
import { accordian } from "./arraytext";

const Faq = ({ searchParams }: { searchParams: any }) => {
  const filtername = searchParams.key || "";
  return (
    <div className="w-auto xl:w-[72rem] mx-auto xl:my-[2rem] px-5 md:px-[0px] flex flex-col items-center justify-center">
      <h3 className="text-center xl:mb-[12px] mb-[4px] text-lg xl:text-[22px] font-semibold xl:leading-7">{`FAQ'S`}</h3>
      <Image
        src={line}
        className="w-[38px] h-[2.06px] xl:w-[139.40px] xl:h-[6.82px] mx-auto xl:mx-auto mb-[15px] xl:m-[12px]"
        alt="line"
      />
      <div className="">
        <p className="text-center  text-neutral-500 xl:text-xl text-base font-semibold mb-[14px]">
          We are here to help you, with most frequent question asked by our
          users.
        </p>
      </div>
      {accordian.map((data, index) => (
        <div
          key={data.id}
          className="mb-[6px]  md:w-[700px] w-full mx-auto xl:w-[72rem] px-[30px] py-5 bg-white rounded-[25px] border-2  shadow-lg"
        >
          <div className=" w-full items-center justify-between inline-flex">
            <p className="text-neutral-700 md:text-base w-[180px] md:w-[100%] xl:w-auto xl:text-lg text-[12px] font-semibold">
              {data.title}
            </p>
            <div
              className={`xl:w-[41px] w-[25px] md:w-[35px] bg-violet-500 rounded-full`}
            >
              <Link
                href={`?filter=${searchParams.filter}${
                  filtername == data.id ? "" : "&key=" + data.id
                }`}
                scroll={false}
              >
                <Image
                  className="
                 m-auto xl:w-4 w-2 md:w-3 py-[5.41px]"
                  style={{
                    transform:
                      filtername == data.id ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "all 0.4s ease-in-out",
                  }}
                  src={arrow}
                  alt="arrow"
                />
              </Link>
            </div>
          </div>

          <div className="w-fit">
            <p
              className={` transition-all duration-500 ease-in-out text-neutral-700 text-[13px] md:text-[13px] xl:text-lg font-normal ${
                filtername === data.id
                  ? " opacity-100 block"
                  : "opacity-0 hidden"
              }`}
            >
              {data.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
