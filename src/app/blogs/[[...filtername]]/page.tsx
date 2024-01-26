import { getAllblogs, getAllTrendingblogs } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogCards from "@/components/blogs/BlogCards";
import Pagination from "@/components/ui/pagination";
import TrendingGod from "@/components/trendingCardCrousel/trendingGod";

const Blogmain = async ({
  params,
  searchParams,
}: {
  params: { filtername: string[] };
  searchParams?: { query?: string; page?: string };
}) => {
  //Get All Blogs from this Action
  const data = await getAllblogs(1, 250);
  const data1 = await getAllTrendingblogs();
  // Published Blogs will be show in the browser which filter out all
  const publishedBlog = Array.isArray(data)
    ? data.filter((item: any) => item.isPublished)
    : [];
  // Create a set of Tags of all blogs
  const Alltags = new Set<string>(["All"]);
  //Push All Tags
  publishedBlog.map((item: any) => {
    item.tags.map((tag: string) => {
      Alltags.add(tag.replace("/", "-"));
    });
  });

  //Convert to Array from set
  const Categories = Array.from(Alltags);

  // Decode URL for Category
  const filtername = decodeURIComponent(
    JSON.stringify(params) !== "{}" ? params.filtername[1] : "All"
  );

  // Filter Out Specific Tag Data when use click any tag
  const filteredData =
    filtername === "All"
      ? publishedBlog
      : publishedBlog?.filter((blog) =>
          blog?.tags.some(
            (tag: string) =>
              tag.toLowerCase() === filtername.replace("-", "/").toLowerCase()
          )
        );
  const ITEMS_PER_PAGE: number = 12;

  let totalPages = Math.ceil(Number(filteredData.length) / ITEMS_PER_PAGE);
  const currentPage = Number(searchParams?.page) || 1;
  // If user go wrong route then Not Found Page will be Open
  if (
    (JSON.stringify(params) !== "{}" && params.filtername.length > 2) ||
    !Alltags.has(filtername)
  ) {
    notFound();
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div
        className="max-w-6xl gap-5 mb-5 overflow-hidden mx-auto px-4 flex flex-col md:flex-row  md:px-0 box-border"
        style={{ marginTop: "80px" }}
      >
        {/* <div> */}
        {/* Filter Section  */}
        <div className="  flex md:flex-col h-fit items-[self-end]  md:pb-20 mt-47 md:overflow-visible overflow-scroll no-scrollbar  md:border-r-2">
          <h1
            className="text-neutral-800
text-[22px]
hidden
md:block
font-semibold
leading-7"
          >
            Category Topics
          </h1>
          {Categories.map((text, index) => {
            return (
              <div
                key={index}
                className="w-full mx-1 flex items-center  justify-start mb md:border-b-2 py-3"
              >
                <Link
                  scroll={false}
                  href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
                >
                  <p
                    className={clsx(
                      "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
                      {
                        "bg-purple-500 text-white": filtername === text,
                      }
                    )}
                  >
                    {text}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Blog Card UI */}
        <div className="flex flex-col gap-5 items-start overflow-hidden justify-start">
          <h2
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Trending Blogs
          </h2>
          <div className="xl:w-[90%] w-full mx-auto flex items-start justify-center">
            <TrendingGod data1={data1} />
          </div>
          <h2
            className="text-neutral-800
text-[26px]
font-semibold"
          >
            Related Blog
          </h2>
          <div className="flex flex-wrap gap-x-[0px] xl:gap-x-[97px] gap-y-[40px] w-fit justify-start items-start">
            {filteredData
              .splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
              .map((blog: any, index) => (
                <BlogCards key={index} blog={blog} />
              ))}
          </div>
        </div>

        {/* </div> */}
      </div>
      <div className="flex justify-center mt-7 mb-10">
        <Pagination totalPages={totalPages} />
      </div>
      <div className="px-[20px] pb-[20px] max-w-[72rem] mx-auto">
        <p className="text-center text-lg font-semibold leading-snug mb-6">
          ASTROLOGY BLOGS
        </p>
        <p className="text-center font-semibold md:text-lg  text-base mb-8">
          Trending Topics and News About Astrology
        </p>
        <p className="text-center  font-medium leading-[17.50px] md:text-base text-sm mb-1">
          {` At Gurucool, we offer a wide range of astrology services to provide you
        with insightful guidance and help you navigate through life's
        challenges. Our expert astrologers, who are considered the best in
        India, are dedicated to delivering accurate and reliable online
        astrology predictions. With a deep understanding of planetary
        configurations and constellations, our astrologers analyze the influence
        of celestial bodies on various aspects of human life. Astrology, an
        ancient science and spiritual discipline, delves into the intricate
        connection between planetary movements and human behavior. Our esteemed
        gurus at Gurucool have honed their skills to offer you profound insights
        into your life's journey. Through their mastery of studying planetary
        movements and the subtle energies surrounding individuals, they can
        unravel the secrets of your aura and reveal your hidden potentials.`}
        </p>
      </div>
    </Suspense>
  );
};

export default Blogmain;
