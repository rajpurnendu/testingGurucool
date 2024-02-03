"use client"
import Image from "next/image";
import god from "@/../public/assets/godImg.webp";
import Link from "next/link";
import dummyImage from "../../../public/assets/dummy_image.svg";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const handleNavigate = (title: string) => {
  const formattedTitle = title.trim().replace(/%/g, "-").replace(/\s+/g, "-");
  const lowercaseformattedTitle = formattedTitle.toLowerCase();
  return `/blogs/${lowercaseformattedTitle}/`;
};
const GodCard = ({ data, loginToken }: {data:any, loginToken:any}) => {
  return (
    <div className="mx-auto rounded-xl  min-w-[201px]  shadow hover:shadow-xl border transition duration-300 ease-in-out border-violet-500 border-opacity-40 bg-white p-2 flex flex-col items-center gap-[2.5px] xl:gap-[12px]"
    onClick={() => {
      if(loginToken) {
        sendGTMEvent({ event: 'buttonClicked', value: 'Home_Blogs_' })
        sendGAEvent({
          event: "buttonClicked",
          value: `Home_Blogs_${data?.title}`,
        });
      } else {
        sendGTMEvent({ event: 'buttonClicked', value: 'Blogs_Enter_Nologin' })
        sendGAEvent({
          event: "buttonClicked",
          value: `Blogs_Enter_Nologin_${data?.title}`,
        });
      }
    }}
    >
      <Link href={handleNavigate(data?.title)}>
        {data?.titleImage?.url ? (
          <Image
            src={data?.titleImage?.url}
            className="xl:w-[260px] md:w-[260px] md:h-[100px] xl:h-[133px] w-[185px] h-[89px] xl:rounded-md rounded-[3px]"
            alt="god"
            width={500}
            height={500}
            priority
          />
        ) : (
          <Image
            src={dummyImage}
            className="xl:w-[260px] md:w-[260px] md:h-[100px] xl:h-[133px] w-[185px] h-[89px] xl:rounded-md rounded-[3px]"
            alt="god"
            width={500}
            height={500}
            priority
          />
        )}
      </Link>

      <div className="flex gap-1 cursor-pointer items-center w-full">
        <Link href={handleNavigate(data?.title)}>
          <h3
            className="text-neutral-800
xl:text-md
xl:font-semibold
text-xs
font-medium
leading-[15px]
"
          >
            {data?.title}
          </h3>
        </Link>

        <div className="px-[4px] flex justify-normal items-center py-[0px] md:py-[0px] md:px-[6px]  xl:px-[6px]  rounded-[15px] xl:rounded-[30px] border border-violet-500 border-opacity-60 w-fit">
          {data?.tags?.map((tag: string, index: number) => (
            <Link
              key={index}
              href={`/blogs/category/${tag.replace("/", "-")}`}
              className="text-neutral-800
          text-xs
w-max
         
          font-normal
          leading-0
          "
            >
              {tag.length > 7 ? `${tag.slice(0, 7)}..` : `${tag}`}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={handleNavigate(data?.title)}
        className="w-full  overflow-hidden"
      >
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
      </Link>

      <div className="w-full flex justify-end">
        <div
          className=" p-1 cursor-pointer xl:px-2 xl:py-1.5 bg-amber-500 bg-opacity-20 xl:rounded-[30px] rounded-[15px] shadow justify-center items-center
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
