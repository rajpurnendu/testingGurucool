import Image from "next/image";
import line from "@/../public/assets/lineImg.webp";
import arrow from "@/../public/assets/arrow.webp";
import Link from "next/link";
import { accordian } from "./arraytext";

const Faq = ({ searchParams }: { searchParams: any }) => {
  const filtername = searchParams.key || "";
  return (
    <div className="w-auto lg:w-[72rem] mx-auto lg:my-[2rem] ">
      <h1 className="text-center lg:mb-[12px] mb-[4px] text-lg lg:text-[22px] font-semibold lg:leading-7">{`FAQ'S`}</h1>
      <Image
        src={line}
        className="w-[38px] h-[2.06px] lg:w-[139.40px] lg:h-[6.82px] mx-auto lg:mx-auto mb-[15px] lg:m-[12px]"
        alt="line"
      />
      <p className="text-center lg:text-xl text-base font-semibold mb-[6.8px]">
        We are here to help you, with most frequent question asked by our users.
      </p>
      {accordian.map((data, index) => (
        <div
          key={data.id}
          className="mb-[6px] md:w-[700px] w-[320px] mx-auto lg:w-[72rem] px-[30px] py-5 bg-white rounded-[25px] border-2  shadow-lg"
        >
          <div className=" w-full items-center justify-between inline-flex">
            <p className="text-neutral-700 md:text-base w-[180px] md:w-[100%] lg:w-auto lg:text-lg text-[12px] font-semibold">
              {data.title}
            </p>
            <div className={`w-[41px] bg-violet-500 rounded-full`}>
              {filtername == data.id ? (
                <Link href={`?filter=${searchParams.filter}`} scroll={false}>
                  <Image
                    className="
                 m-auto w-4 py-[5.41px]"
                    src={arrow}
                    alt="arrow"
                  />
                </Link>
              ) : (
                <Link
                  href={`?filter=${searchParams?.filter}&key=${data.id}`}
                  scroll={false}
                >
                  <Image
                    className="
                    rotate-90
                  m-auto w-4 py-[5.41px]"
                    src={arrow}
                    alt="arrow"
                  />
                </Link>
              )}
            </div>
          </div>

          <div className="w-fit">
            <p
              className={` transition-all duration-500 ease-in-out text-neutral-700 text-lg font-normal ${
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
