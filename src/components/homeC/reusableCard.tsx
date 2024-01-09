const ReusableCard = ({
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
      className="lg:w-[281px] md:w-[250px] w-[106px] md:h-[100px] lg:h-[167px]  lg:px-10 px-[6px] py-[12px] lg:py-[45px] bg-black bg-opacity-10 md:rounded-[10px] lg:rounded-[10px] rounded-[3.15px] flex-col justify-start items-center gap-2.5 inline-flex bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${img.src})`, backgroundBlendMode: "hue" }}
      onClick={() => {
        handleClick(index);
      }}
    >
      <div className="flex-col justify-start items-start md:gap-1 lg:gap-1 gap-0 flex">
        <p className="text-white md:text-[22px]  lg:text-[22px] my-auto text-xs font-medium m-auto lg:font-semibold md:leading-7 leading-[15px]">
          {title}
        </p>
        <p className="w-[151px] hidden md:flex lg:flex text-neutral-50 text-sm font-normal leading-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ReusableCard;
