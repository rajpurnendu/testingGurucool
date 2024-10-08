import Image from "next/image";
import { TestmonialData, card3 } from "./arraytext";
import TestimonialCard from "./TestimonialCard";

const Testmonial = () => {
  return (
    <div>
      <div className="xl:w-[72rem] w-auto m-auto mt-[36px] xl:mt-[3.75rem]">
        <div className="px-[20px]">
          <h3 className="text-center  xl:text-[2.125rem] text-base font-semibold xl:mb-[20px]">
            Testimonials
          </h3>
          <p
            className="text-center text-neutral-500 text-sm xl:text-xl xl:mb-[1.87rem] mb-[1rem] font-normal
        
        leading-[25px]
        "
          >
            People have shown high trust in us, which can be seen in their
            testimonials which they have shared
          </p>
        </div>
        <div className="card px-5 py-2 xl:py-0  mb-[32px] xl:mb-[3.75rem] no-scrollbar flex m-auto flex-row items-start xl:justify-center xl:gap-[2rem] gap-[0.5rem] xl:overflow-visible md:overflow-y-visible overflow-x-scroll">
          {TestmonialData.map((data, index) => (
            <TestimonialCard key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="md:bg-[#F7F5FF] bg-none xl:py-[12px] xl:px-[20px] py-[3px] px-[12px]">
        <div className="flex mx-auto items-center justify-center xl:gap-[59px] gap-[10.8px] ">
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
    <div className="flex min-w-[108px] md:w-[343px] flex-col gap-[18px]  relative shadow bg-white  xl:rounded-[18px]  rounded-[4.83px] xl:w-[343px] border border-violet-500 border-opacity-70 items-start p-[4.3px]  xl:p-[16px]">
      <div>
        <h3 className="font-semibold  text-violet-500 text-[10px] md:text-[20px] xl:text-[26px]">
          {text1}
        </h3>
        <h3 className="font-semibold leading-none text-neutral-800 text-[10px] md:text-[20px] xl:text-[26px]">
          {text2}
        </h3>
      </div>

      <div>
        <Image
          priority={true}
          className="xl:w-[75px] md:w-[60px] md:h-[60px] xl:h-[75px] w-[40px] h-[40px]"
          src={img}
          alt="call"
        />
        <h3
          className="text-neutral-500
text-base
hidden
xl:block
font-medium
leading-snug"
        >
          {desc.slice(0, 120)}...
        </h3>
      </div>
    </div>
  );
};
