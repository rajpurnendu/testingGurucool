import GodCard from "./godCard";

const ReaderSection = () => {
  return (
    <div className="lg:w-[72rem] m-auto mt-[36px] lg:mt-[3.75rem] w-auto">
      <div className="px-[20px]">
        <h1 className="text-center lg:text-[2.125rem] text-base font-semibold lg:mb-[.5rem]">{`Reader's Section`}</h1>
        <p className="text-center text-sm lg:text-[1.25rem] lg:mb-[1.87rem] mb-[1rem] leading-[30px] font-normal">
          Welcome to our blog section. Find articles, informative blogs, and
          amazing stories related to your interest on GuruCool.
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
