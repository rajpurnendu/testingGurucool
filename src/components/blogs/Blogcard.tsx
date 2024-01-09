import Image from "next/image";
import Link from "next/link";

const Blogcard = ({ blog }: { blog: any }) => {
  return (
    <div className="flex justify-between rounded-lg py-[14px] px-[16px] max-w-[395px] h-[175px] md:max-w-[568px] md:h-[284px] shadow-[0_4px_4px_0_rgba(0,0,0,0.2)] border border-solid border[#afafaf66] blog-card">
      <div>
        <div className="flex mb-[3px] gap-[5px] items-center md:mb-[30px] md:gap-[5px]">
          <li className="flex items-start">
            {/* TODO Avatar  */}
            <div className="flex w-[30px] h-[30px] rounded-full justify-center items-center text-white text-sm leading-[3rem] bg-[#965efb] md:w-[40px] md:h-[40px]">
              {blog?.author?.firstName[0]}
              {blog?.author?.lastName[0]}
            </div>
          </li>
          <div>
            <p className="text-[#2b2b2b] mb-0 text-[12px] font-normal">
              {blog?.author?.firstName}
              {blog?.author?.lastName}{" "}
              {blog?.authorName ? <strong>in</strong> : null} {blog?.category}
            </p>
            <p className="text-[#2b2b2b] mb-0 text-[12px] font-normal">
              {blog?.date.slice(0, 10)}
            </p>
          </div>
        </div>
        <p className="mb-0 mt-[3px] text-[16px] font-medium text-[#2b2b2b] block md:hidden">
          {blog?.title?.slice(0, 25)}...
        </p>
        <p className="mr-[30px] mb-0 font-semibold cursor-pointer hidden text-[#2b2b2b] text-[20px] md:block">
          {blog?.title?.slice(0, 40)}...
        </p>
        <p className="mb-0 mt-[3px] mr-[40px] text-[12px] font-medium text-[#2b2b2b] block md:hidden">
          {blog?.description?.slice(0, 50)}...
        </p>
        <p className="mb-0 mr-[50px] text-[12px] font-medium text-[#2b2b2b] cursor-pointer hidden md:block md:mt-[6px]">
          {blog?.description?.slice(0, 100)}...
        </p>

        {/* TODO: Map Tags Array  */}
        {blog?.tags?.map((tag: string, index: number) => (
          <Link href={`/blogs/category/${tag.replace("/", "-")}`} key={index}>
            <div className="h-[25px] text-[#965efb] flex justify-center items-center mr-[4%] border border-solid border-[#965efb] w-fit py-0 px-[10px] cursor-pointer mt-[13px] text-[10px] rounded-2xl md:h-9 md:text-[16px] md:mt-[25px]">
              {tag}
            </div>
          </Link>
        ))}
      </div>

      {/* Image Container  */}
      <div className="flex justify-center flex-col">
        <div className="w-[86px] h-[55px] cursor-pointer md:w-[210px] md:h-[136px]">
          <Image
            src={blog?.titleImage?.url}
            width={200}
            height={200}
            className="w-[100%] h-[100%]"
            style={{ objectFit: "cover" }}
            alt="Image Blog"
            priority={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
