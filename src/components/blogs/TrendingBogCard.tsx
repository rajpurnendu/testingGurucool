import Image from "next/image";
import Link from "next/link";
import React from "react";

const handleNavigate = (title: string) => {
  const formattedTitle = title.trim().replace(/%/g, "-").replace(/\s+/g, "-");
  const lowercaseformattedTitle = formattedTitle.toLowerCase();
  return `/blogs/${lowercaseformattedTitle}/`;
};

const TrendingBogCard = ({ blog }: any) => {
  return (
    <div className="items-center shadow border overflow-hidden p-[9.9px]  border-zinc-200 rounded-[13.97px]  max-w-[376px] flex flex-col md:p-[13.36px] gap-[11.18px] justify-start">
      <div>
        <Link
          href={handleNavigate(blog?.title)}
          className=" overflow-hidden h-[155px] w-[350px] rounded-[6px]"
        >
          <Image
            className=" w-full h-full"
            width={500}
            height={500}
            src={blog?.titleImage?.url}
            alt="Image Blog"
            priority={true}
          />
        </Link>
      </div>

      <Link
        href={handleNavigate(blog?.title)}
        className="text-neutral-800
text-base
leading-none
font-semibold"
      >
        {blog?.title?.slice(0, 20)}...
        {blog?.description?.slice(0, 50)}...
      </Link>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center gap-[5.5px]">
          <div className="rounded-full w-[41px] h-[41px] overflow-hidden flex items-center justify-center bg-black text-white">
            {blog?.author?.firstName[0]}
            {blog?.author?.lastName[0]}
          </div>
          <div className="flex flex-col items-start gap-[4px] justify-start">
            <p
              className="text-neutral-500
text-sm
font-medium
leading-[17.50px]"
            >
              {blog?.author?.firstName}
              {blog?.author?.lastName}
            </p>
            <p
              className="text-stone-300
text-sm
font-medium
leading-[17.50px]"
            >
              {blog?.date.slice(0, 10)}
            </p>
          </div>
        </div>
        {blog?.tags?.map((tag: string, index: number) => (
          <Link key={index} href={`/blogs/category/${tag.replace("/", "-")}`}>
            <button className="p-[5.84px] rounded-[17.46px] border border-violet-500 border-opacity-70 text-sm font-medium text-center">
              {tag}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingBogCard;
