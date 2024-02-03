import Image from "next/image";
import Link from "next/link";
import React from "react";
import dummyImage from "../../../public/assets/dummy_image.svg";

const handleNavigate = (title: string) => {
  const formattedTitle = title.trim().replace(/%/g, "-").replace(/\s+/g, "-");
  const lowercaseformattedTitle = formattedTitle.toLowerCase();
  return `/blogs/${lowercaseformattedTitle}/`;
};

const BlogCards = ({ blog }: any) => {
  return (
    <div className="max-w-[391px] w-full h-fit border border-zinc-200  bg-white rounded-[6.96px] shadow flex  justify-between lg:justify-start lg:items-start lg:gap-[6.26px] md:p-[12px] p-[8px]">
      <div className="p-[4.18px] flex flex-col gap-[9.6px] md:gap-[6.26px] items-start justify-start">
        <div className="flex justify-center items-center gap-[8.35px]">
          <div className="w-[29px] h-[29px] rounded-full text-white bg-[#965efb] flex justify-center items-center">
            {blog?.author?.firstName[0]}
            {blog?.author?.lastName[0]}
          </div>
          <div className="flex flex-col items-start justify-start">
            <p
              className="text-neutral-800
md:text-[9.74px]
text-xs
leading-[15px]
md:leading-normal
font-normal"
            >
              {blog?.author?.firstName}
              {blog?.author?.lastName}{" "}
              {blog?.authorName ? <strong>in</strong> : null} {blog?.category}
            </p>
            <p
              className="text-neutral-700
md:text-[8.35px]
text-[9.96px]
font-normal
leading-3
md:leading-[13.92px]"
            >
              {blog?.date.slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="md:w-[217px] flex justify-center items-center w-[177px] h-[95px]">
          <Link
            href={handleNavigate(blog?.title)}
            className="text-neutral-800
md:text-sm
text-xs
leading-[15px]
font-semibold
tracking-tighter
md:leading-tight"
          >
            {/* {blog?.title?.slice(0, 25)}... */}
            {blog?.description?.slice(0, 125)}...
          </Link>
        </div>
        {blog?.tags?.map((tag: string, index: number) => (
          <Link
            key={index}
            href={`/blogs/category/${tag.replace("/", "-")}`}
            className="flex text-xs tracking-wide  leading-[15px] md:leading-[25.06px] items-center justify-center gap-[6.96px] border-opacity-70 border-violet-500 border rounded-[20px] px-[4px] md:px-[8.35px] w-fit h-fit md:text-[8.35px]"
          >
            {tag}
          </Link>
        ))}
      </div>

      <Link
        href={handleNavigate(blog?.title)}
        className="rounded-[6.96px]   overflow-hidden shadow w-[135px] h-full md:w-[208px] flex"
      >
        <div className="w-full h-[175px] overflow-hidden">
          {blog?.titleImage?.url ? (
            <Image
              className="w-full h-full object-cover"
              width={500}
              height={500}
              src={blog?.titleImage?.url}
              alt="Image Blog"
              priority={true}
            />
          ) : (
            <Image
              className="w-full h-full object-cover"
              width={500}
              height={500}
              src={dummyImage}
              alt="Image Blog"
              priority={true}
            />
          )}

          {/* <Image
            className="w-full h-full object-cover"
            width={500}
            height={500}
            src={blog?.titleImage?.url}
            alt="Image Blog"
            priority={true}
          /> */}
        </div>
      </Link>
    </div>
  );
};

export default BlogCards;
