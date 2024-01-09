import GodCard from "./godCard";

const ReaderSection = () => {
  return (
    <div className="lg:w-[72rem] m-auto mt-[36px] lg:mt-[3.75rem] w-auto">
      <div className="px-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[.5rem]">{`Reader's Section`}</h1>
        <p className="text-center text-sm lg:text-[1.25rem] lg:mb-[1.87rem] mb-[1rem] font-normal">
          We provide a blend of best of all the worlds for our lovely readers,
          where you will get many things to read
        </p>
      </div>

      <div className="px-[20px] no-scrollbar flex lg:gap-[30px] lg:overflow-hidden md:overflow-y-hidden overflow-x-scroll gap-[14px] justify-between">
        <GodCard />
        <GodCard />
        <GodCard />
        <GodCard />
      </div>
    </div>
  );
};

export default ReaderSection;
