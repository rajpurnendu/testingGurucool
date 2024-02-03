import Image from "next/image";
import Link from "next/link";
import { getAllWebstories } from "@/lib/data";
import WebStoriesCard from "@/components/web-stories/WebStoriesCard";
import clsx from "clsx";
import Script from "next/script";

const page = async () => {
  const data = await getAllWebstories();
  const AllWebStories = data?.webStories?.docs;
  // console.log(AllWebStories);

  return (
    <div className="max-w-6xl  mb-5  mx-auto mt-2.5">
      <h2
        className="text-neutral-800
text-opacity-10
text-[34px]
text-center
font-semibold"
      >
        WebStories
      </h2>
      <div className="mx-auto w-auto gap-5  flex flex-col md:flex-row px-4 box-border mt-[20px] md:mt-[45px] overflow-hidden md:px-0">
        {/* <div className=" pr-2 flex md:flex-col h-fit items-[self-end]  md:pb-20 mt-47 md:overflow-visible overflow-scroll no-scrollbar ">
          <div className="w-full mx-1 flex items-center  justify-start mb  py-3">
            <h1
              className="
          text-neutral-800
          text-opacity-10
          text-[22px]
          font-semibold
         
          leading-7
w-max
hidden
md:block
"
            >
              Category Topics
            </h1>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Home
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Meditaion
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                data
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Black Magic Removal
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Entertainment
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Hindu Gods and Goddesses
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Current Affairs
              </p>
            </Link>
          </div>
          <div className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3">
            <Link
              scroll={false}
              href={"/"}
              // href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
            >
              <p
                className={clsx(
                  "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                  {
                    //   "bg-purple-500 text-white": filtername === text,
                  }
                )}
              >
                Astrology
              </p>
            </Link>
          </div>
        </div> */}
        <div className="flex flex-wrap items-center justify-center w-full  lg:gap-[43px] gap-5">
          {/* <div className="w-full  lg:gap-[43px] gap-5 mx-auto flex-wrap flex justify-center items-center xl:justify-center xl:items-center"> */}
          {AllWebStories.map((curr, index) => (
            <WebStoriesCard key={index} data={curr} />
          ))}
          {/* </div> */}
        </div>
      </div>
     
    </div>
  );
};

export default page;
