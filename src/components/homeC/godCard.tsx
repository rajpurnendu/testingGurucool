import Image from "next/image";
import god from "@/../public/assets/godImg.webp";
const GodCard = () => {
  return (
    <div className="mx-auto rounded-xl min-w-[201px] min-h-[237px] shadow-lg border border-violet-500 border-opacity-40 bg-white p-2 flex flex-col items-center gap-[2.5px] xl:gap-[12px]">
      <Image
        src={god}
        className="xl:w-[260px] md:w-[260px] md:h-[100px] xl:h-[133px] w-[185px] h-[84px] xl:rounded-md rounded-[3px]"
        alt="god"
        priority
      />
      <div className="flex justify-between items-center w-full">
        <h3
          className="text-neutral-800
xl:text-lg
xl:font-semibold
text-xs
font-medium
leading-[15px]
"
        >
          Hanuman Chaalisa
        </h3>
        <div className="px-[4px] py-[5px] md:py-[3px] md:px-[6px]  xl:px-[6px] xl:py-[3px] rounded-[15px] xl:rounded-[30px] border border-violet-500 border-opacity-60">
          <p
            className="text-neutral-800
          text-xs
          md:text-[10px]
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
opacity-60
"
      >
        A blog by Mr. abc which will help you to know about your year which is
        coming so you can plang your year accordingly and wisely.
      </p>
      <div className="w-full flex justify-end">
        <div
          className=" p-1 xl:p-2 bg-amber-500 bg-opacity-20 xl:rounded-[30px] rounded-[15px] shadow justify-center items-center
         flex  border "
        >
          <p
            className="text-neutral-800
            text-xs
            xl:font-normal
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
