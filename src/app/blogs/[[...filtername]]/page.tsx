import { getAllblogs } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Blogcard from "@/components/blogs/Blogcard";
import Pagination from "@/components/ui/pagination";

const Blogmain = async ({
  params,
  searchParams,
}: {
  params: { filtername: string[] };
  searchParams?: { query?: string; page?: string };
}) => {
  //Get All Blogs from this Action
  const data = await getAllblogs(1, 50);

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
  const ITEMS_PER_PAGE: number = 6;

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
        className="max-w-6xl mx-auto px-4 md:px-0 box-border"
        style={{ marginTop: "30px" }}
      >
        <div>
          {/* Filter Section  */}
          <div className="flex flex-wrap overflow-auto items-center justify-center mt-47 mb-42 gap-12 scrollbar-hidden md:overflow-visible md:justify-center md:gap-y-1.5 md:gap-x-3">
            {Categories.slice(0, 12).map((text, index) => {
              return (
                <Link
                  key={index}
                  href={index === 0 ? "/blogs" : `/blogs/category/${text}`}
                >
                  <button
                    className={clsx(
                      "inline-flex appearance-none items-center justify-center select-none relative whitespace-nowrap align-middle outline-none leading-tight transition-all duration-200 px-16 min-w-24 h-8 w-auto rounded-full border-2 border-solid border-purple-500 font-semibold text-xs hover:bg-purple-400 hover:text-white",
                      {
                        "bg-purple-500 text-white": filtername === text,
                      }
                    )}
                  >
                    {text}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Blog Card UI */}
          <div className="flex flex-wrap gap-0.5 items-center justify-center md:gap-3.5 mt-[36px]">
            {filteredData
              .splice((currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE)
              .map((blog: any, index) => (
                <Blogcard key={index} blog={blog} />
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-7 mb-10">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </Suspense>
  );
};

export default Blogmain;
