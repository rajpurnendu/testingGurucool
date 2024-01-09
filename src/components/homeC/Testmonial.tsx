import ReusableCard2 from "./reusableCard2";
import Image from "next/image";
import { card3 } from "./arraytext";

const Testmonial = () => {
  return (
    <div className="lg:w-[72rem] w-auto m-auto mt-[36px] lg:mt-[3.75rem]">
      <div className="px-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[0.5rem]">
          Testimonials
        </h1>
        <p className="text-center text-sm lg:text-[1.25rem] lg:mb-[1.87rem] mb-[1rem] font-normal">
          People have shown high trust in us, which can be seen in their
          testimonials which they have shared
        </p>
      </div>
      <div className="card px-5  mb-[32px] lg:mb-[3.75rem] no-scrollbar flex m-auto flex-row items-center lg:justify-center lg:gap-[2rem] gap-[0.5rem] lg:overflow-visible md:overflow-y-visible overflow-x-scroll">
        <ReusableCard2 />
        <ReusableCard2 />
        <ReusableCard2 />
        <ReusableCard2 />
      </div>
      <div className="bg-[#F7F5FF] lg:py-[12px] lg:px-[20px] py-[3px] px-[12px]">
        <div className="flex mx-auto items-center justify-center lg:gap-[59px] gap-[6.8px] ">
          {card3?.map((data, index) => (
            <Cards
              img={data.img}
              text1={data.title}
              text2={data.subtitle}
              desc={data.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testmonial;

const Cards = ({
  img,
  text1,
  text2,
  desc,
}: {
  img: any;
  text1: string;
  text2: string;
  desc: string;
}) => {
  return (
    <div className="flex min-w-[108px] md:w-[343px] flex-col gap-[16px] relative shadow bg-white  lg:rounded-[18px]  rounded-[4.83px] lg:w-[343px] border border-violet-500 border-opacity-70 items-start p-[4.3px] lg:p-[16px]">
      <div>
        <h3 className="font-semibold text-violet-500 text-[10px] md:text-[20px] lg:text-[26px]">
          {text1}
        </h3>
        <h3 className="font-semibold text-neutral-800 text-[10px] md:text-[20px] lg:text-[26px]">
          {text2}
        </h3>
      </div>

      <div>
        <Image
          priority={true}
          className="lg:w-[75px] md:w-[60px] md:h-[60px] lg:h-[75px] w-[40px] h-[40px]"
          src={img}
          alt="call"
        />
        <h3
          className="text-neutral-500
text-base
hidden
lg:block
font-medium
leading-snug"
        >
          {desc.slice(0, 120)}...
        </h3>
      </div>
    </div>
  );
};
