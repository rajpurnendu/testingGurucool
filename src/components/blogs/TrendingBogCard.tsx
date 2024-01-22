import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingBogCard = ({ blog }: any) => {
  return (
    <div className="items-start rounded-[13.97px] shadow  max-w-[376px] flex flex-col p-[13.36px] gap-[11.18px] justify-start">
      <div className=" overflow-hidden w-full">
        <Image
          className="w-full h-[165px] object-cover"
          width={500}
          height={500}
          src={blog?.titleImage?.url}
          alt="Image Blog"
          priority={true}
        />
      </div>
      <p
        className="text-neutral-800
text-base
font-semibold"
      >
        {blog?.title?.slice(0, 25)}...
        {blog?.description?.slice(0, 50)}...
      </p>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-center gap-[5.5px]">
          <div className="rounded-full w-[41px] h-[41px] overflow-hidden flex items-center justify-center bg-black text-white">
            {blog?.author?.firstName[0]}
            {blog?.author?.lastName[0]}
          </div>
          <div className="flex flex-col items-start justify-start">
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
