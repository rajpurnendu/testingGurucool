import Image from "next/image";
import Link from "next/link";
import React from "react";

const handleNavigate = (title: string) => {
  const formattedTitle = title.trim().replace(/%/g, "-").replace(/\s+/g, "-");
  const lowercaseformattedTitle = formattedTitle.toLowerCase();
  return `/blogs/${lowercaseformattedTitle}/`;
};

const TrendingBlogCard = ({ blog }: any) => {
  return (
    <div className="p-1">
      <div className="items-start shadow border overflow-hidden p-[9.9px]  border-zinc-200 rounded-[13.97px]  max-w-[376px] flex flex-col md:p-[13.36px] gap-[11.18px] justify-start">
        <div className="overflow-hidden w-full">
          <Link
            href={handleNavigate(blog?.title)}
            className=" overflow-hidden max-h-[155px] rounded-[6.99px] w-full"
          >
            <Image
              className=" w-full h-[155px] rounded-[6.99px]"
              width={349}
              height={155}
              src={blog?.titleImage?.url}
              alt="Image Blog"
              priority={true}
            />
          </Link>
        </div>

        <Link
          href={handleNavigate(blog?.title)}
          className="md:hidden block text-neutral-800 text-sm
md:text-base
leading-tight
font-semibold"
        >
          {/* {blog?.title?.slice(0, 20)}... */}
          {blog?.description?.slice(0, 100)}...
        </Link>
        <Link
          href={handleNavigate(blog?.title)}
          className="hidden md:block text-neutral-800 text-sm
md:text-base
leading-tight
font-semibold"
        >
          {/* {blog?.title?.slice(0, 20)}... */}
          {blog?.description?.slice(0, 120)}...
        </Link>
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center justify-center gap-[5.5px]">
            <div className="rounded-full w-[41px] h-[41px] overflow-hidden flex items-center justify-center bg-black text-white">
              {blog?.author?.firstName[0]}
              {blog?.author?.lastName[0]}
            </div>
            <div className="flex flex-col items-start md:gap-[4px] justify-start">
              <p
                className="text-neutral-500 text-xs
md:text-sm
font-medium
leading-[17.50px]"
              >
                {blog?.author?.firstName}
                {blog?.author?.lastName}
              </p>
              <p
                className="text-stone-300 text-xs
md:text-sm
font-medium
leading-[17.50px]"
              >
                {blog?.date.slice(0, 10)}
              </p>
            </div>
          </div>
          {blog?.tags?.map((tag: string, index: number) => (
            <button
              key={index}
              className="p-[5.84px] rounded-[17.46px] border border-violet-500 border-opacity-70 text-xs md:text-sm font-medium text-center cursor-default"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogCard;
