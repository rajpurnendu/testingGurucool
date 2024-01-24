import GodCard from "./godCard";
import { getAllblogs } from "@/lib/data";

const ReaderSection = async () => {
  const data = await getAllblogs(2, 4);

  return (
    <div className="xl:w-[72rem] m-auto mt-[36px] xl:mt-[3.75rem] w-auto">
      <div className="px-[20px]">
        <h3 className="text-center xl:text-[2.125rem] text-base font-semibold xl:mb-[20px]">{`Reader's Section`}</h3>
        <p className="text-center text-sm xl:text-[1.25rem] xl:leading-6 xl:mb-[1.87rem] mb-[1rem] font-normal">
          Welcome to our blog section. Find articles, informative blogs, and
          amazing stories related to your interest on GuruCool.
        </p>
      </div>

      <div className="px-[20px] md:px-[0px] md:pb-4 no-scrollbar flex xl:gap-[30px] xl:overflow-hidden md:overflow-y-hidden overflow-x-scroll gap-[14px] justify-between">
        {data.slice(0, 4).map((d: any, index: any) => (
          <GodCard key={index} data={d} />
        ))}
      </div>
    </div>
  );
};

export default ReaderSection;
