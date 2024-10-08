const ServicesCard = ({
  img,
  title,
  subtitle,
  index,
  handleClick,
}: {
  img: any;
  title: string;
  subtitle: string;
  index: number;
  handleClick: Function;
}) => {
  return (
    <div
      className="xl:w-[281px] md:w-[250px] bg-blend-darken w-[106px] md:h-[100px] xl:h-[167px]  xl:px-10 px-[6px] py-[12px] xl:py-[45px] bg-black bg-opacity-10 md:rounded-[10px] xl:rounded-[10px] rounded-[3.15px] flex-col justify-start items-center gap-2.5 inline-flex cursor-pointer
      bg-top md:bg-[length:250px_100px] bg-[length:106px_60px] xl:bg-[length:281px_167px]
      "
      style={{
        backgroundImage: `url(${img.src})`,
      }}
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className="flex-col justify-start items-start h-[30px] md:h-auto md:gap-1 xl:gap-1 gap-0 flex">
        <p className="text-white md:text-[22px]  xl:text-[22px] my-auto text-xs font-medium m-auto xl:font-semibold md:leading-7 leading-[15px]">
          {title}
        </p>
        <p className="w-[151px] hidden md:flex xl:flex text-neutral-50 text-sm font-normal leading-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
