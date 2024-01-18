import Image from "next/image";
import laptop from "../../../public/assets/photo-1593642532744-d377ab507dc8.jpeg";
import mountain from "../../../public/assets/Mountain.jpeg";
import Link from "next/link";
import { getAllWebstories } from "@/lib/data";

const page = async () => {
  const webStory = [1, 2, 3, 4, 5, 6, 7];
  const data = await getAllWebstories();
  const AllWebStories = data?.webStories?.docs;
  console.log(AllWebStories);

  function convertUtcToIst(utcTimeString) {
    const utcTime = new Date(utcTimeString);
    const istTime = new Date(
      utcTime.getTime() + 5 * 60 * 60 * 1000 + 30 * 60 * 1000
    );

    const formattedDate = istTime
      .toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();

    return formattedDate;
  }
  return (
    <div className="max-w-[72rem] mt-4 px-2 py-2 mx-auto ">
      <div className="w-full">
        <h1 className="text-[28px] text-gray-800 font-[700] text-center mb-[22px] mt-[24px] xl:text-[36px] xl:mb-[35px] xl:mt-[35px] pb-2 border-b-2 border-gray-700">
          Web Stories
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:justify-between  lg:justify-center gap-3 md:gap-y-5 lg:gap-4">
        {AllWebStories.map((curr, index) => {
          console.log(curr?.webStoryImage?.url);
          return (
            <Link
              href={`/web-stories/${curr?.webStoryTitle}`}
              className="block w-full lg:w-[23%] md:w-[48%]"
              key={index}
            >
              <div className=" rounded-lg hover:shadow-lg transition duration-300 ease-in-out hover:bg-white bg-slate-50 border border-gray-800 hover:border-violet-600 cursor-pointer">
                <div className="relative overflow-hidden bg-cover bg-no-repeat p-2">
                  {/* <div className="w-full h-[10rem] rounded-lg"> */}

                  <Image
                    className="rounded-lg object-cover w-full h-auto"
                    src={curr?.webStoryImage?.url}
                    alt="story-image"
                    width={100}
                    height={100}
                  />
                  {/* </div> */}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-neutral-600 lg:text-lg md:text-sm">
                    {convertUtcToIst(curr?.createdAt)}
                  </p>
                  <h3 className=" text-neutral-600 font-medium lg:text-lg md:text-sm">
                    {curr?.webStoryTitle}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
