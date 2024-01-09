import Image from "next/image";
import god from "@/../public/assets/godImg.webp";
const GodCard = () => {
  return (
    <div className="mx-auto rounded-xl min-w-[201px] min-h-[237px] shadow-lg border border-violet-500 border-opacity-70 bg-whtie p-2 flex flex-col items-center gap-[2.5px] lg:gap-[12px]">
      <Image
        src={god}
        className="lg:w-[260px] md:w-[260px] md:h-[100px] lg:h-[133px] w-[185px] h-[84px] lg:rounded-md rounded-[3px]"
        alt="god"
        priority
      />
      <div className="flex justify-between items-start w-full">
        <h3
          className="text-neutral-800
lg:text-lg
lg:font-semibold
text-xs
font-medium
leading-[15px]
"
        >
          Hanuman Chaalisa
        </h3>
        <div className="px-[4px] py-[5px]  lg:px-[4px] lg:py-[4px] rounded-[15px] lg:rounded-[30px] border border-violet-500 border-opacity-70">
          <p
            className="text-neutral-800
          text-xs
          font-normal
          leading-[15px]"
          >
            Aarti
          </p>
        </div>
      </div>
      <p
        className="text-neutral-700
text-xs
font-normal
leading-[15px]
"
      >
        A blog by Mr. abc which will help you to know about your year which is
        coming so you can plang your year accordingly and wisely.
      </p>
      <div className="w-full flex justify-end">
        <div
          className=" p-1 lg:p-2 bg-amber-500 bg-opacity-20 lg:rounded-[30px] rounded-[15px] shadow justify-center items-center
         flex  border "
        >
          <p
            className="text-neutral-800
            text-xs
            lg:font-normal
            font-medium
            leading-[15px]"
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default GodCard;
