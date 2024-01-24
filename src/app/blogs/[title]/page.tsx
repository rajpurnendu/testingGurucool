import { getSingleBlog } from "@/lib/data";
import Image from "next/image";
import ReactHtmlParser from "html-react-parser";
import { Suspense } from "react";

const Blogsinglepage = async ({ params }: { params: { title: string } }) => {
  const { title } = params;
  // console.log(title)
  const formattedString = title.replace(/-/g, " ");

  console.log(formattedString);
  const data = await getSingleBlog(formattedString);
  const Blog = data?.blogs[0];
  // console.log(data);

  function convertIst(date: any) {
    const utcDate = new Date(date);
    const istDate = new Date(
      utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    return istDate.toLocaleString();
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="container max-w-[72rem] mt-[72px] ps-[1rem] pe-[1rem] mx-auto md:mt-[72px]">
        <div className="hidden md:flex mb-4"></div>

        <div className="flex flex-col justify-center items-start md:w-[1000px]">
          <h1 className="mb-[5px] font-medium text-[30px] md:text-[45px] md:mb-[15px]">
            {Blog?.title}
          </h1>
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-full"
              src={Blog?.author?.avatar?.url}
              alt={Blog?.author?.avatar?.url}
              width={50}
              height={50}
            />
            <div>
              <h2 className="leading-normal text-[16px] font-normal mb-[2px] text-[#2b2b2b] opacity-40 md:mb-[5px]">
                {Blog?.authorName?.charAt(0).toUpperCase() +
                  Blog?.authorName?.slice(1).toLowerCase()}{" "}
                <span className="leading-normal text-[16px] font-normal text-[#2b2b2b] mb-0">
                  |{" "}
                  {Blog?.category
                    ? Blog.category.charAt(0).toUpperCase() +
                      Blog.category.slice(1)
                    : undefined}
                </span>
              </h2>
              <h2 className="leading-normal text-[16px] font-normal mb-[2px] text-[#2b2b2b] opacity-40 md:mb-[5px]">
                {convertIst(Blog?.date)}
              </h2>
            </div>
          </div>
        </div>
        <div className=" mb-[40px] md:mb-[30px]">
          <Image
            className="mx-auto mt-4"
            src={Blog?.titleImage?.url}
            alt={Blog?.titleImage?.url}
            width={500}
            height={500}
          />
        </div>
        {ReactHtmlParser(Blog.htmlContent)}
      </div>
    </Suspense>
  );
};

export default Blogsinglepage;
