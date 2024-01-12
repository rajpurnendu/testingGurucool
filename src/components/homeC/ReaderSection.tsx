import GodCard from "./godCard";

const ReaderSection = () => {
  return (
    <div className="xl:w-[72rem] m-auto mt-[36px] xl:mt-[3.75rem] w-auto">
      <div className="px-[20px]">
        <h1 className="text-center xl:text-[2.125rem] text-base font-semibold xl:mb-[12px]">{`Reader's Section`}</h1>
        <p className="text-center text-sm xl:text-[1.25rem] xl:mb-[1.87rem] mb-[1rem] font-normal">
          Welcome to our blog section. Find articles, informative blogs, and
          amazing stories related to your interest on GuruCool.
        </p>
      </div>

      <div className="px-[20px] no-scrollbar flex xl:gap-[30px] xl:overflow-hidden md:overflow-y-hidden overflow-x-scroll gap-[14px] justify-between">
        <GodCard />
        <GodCard />
        <GodCard />
        <GodCard />
      </div>
    </div>
  );
};

export default ReaderSection;
