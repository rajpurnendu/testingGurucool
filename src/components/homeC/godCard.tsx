import Image from "next/image";
import god from "@/../public/assets/godImg.webp";
import Link from "next/link";
const handleNavigate = (title: string) => {
  const formattedTitle = title.trim().replace(/%/g, "-").replace(/\s+/g, "-");
  const lowercaseformattedTitle = formattedTitle.toLowerCase();
  return `/blogs/${lowercaseformattedTitle}/`;
};
const GodCard = ({ data }: any) => {
  return (
    <div className="mx-auto rounded-xl md:max-w-[300px] min-w-[201px] min-h-[237px] shadow-lg border border-violet-500 border-opacity-40 bg-white p-2 flex flex-col items-center gap-[2.5px] xl:gap-[12px]">
      <Image
        src={data?.titleImage?.url}
        className="xl:w-[260px] md:w-[260px] md:h-[100px] xl:h-[133px] w-[185px] h-[89px] xl:rounded-md rounded-[3px]"
        alt="god"
        width={500}
        height={500}
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
          {data?.author?.firstName} {data?.author?.lastName}
        </h3>
        <div className="px-[4px] py-[0px] md:py-[0px] md:px-[6px]  xl:px-[6px]  rounded-[15px] xl:rounded-[30px] border border-violet-500 border-opacity-60">
          {data?.tags?.map((tag: string, index: number) => (
            <Link
              key={index}
              href={`/blogs/category/${tag.replace("/", "-")}`}
              className="text-neutral-800
          text-xs
          // md:text-[10px]
          font-normal
          leading-none
          "
            >
              {tag}
            </Link>
          ))}
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
        {data?.description?.slice(0, 100)}...
      </p>
      <div className="w-full flex justify-end">
        <div
          className=" p-1 xl:p-2 bg-amber-500 bg-opacity-20 xl:rounded-[30px] rounded-[15px] shadow justify-center items-center
         flex  border "
        >
          <Link
            href={handleNavigate(data?.title)}
            className="text-neutral-800
            text-xs
            xl:font-normal
            font-medium
            leading-[15px]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GodCard;
