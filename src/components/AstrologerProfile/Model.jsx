import Image from "next/image";
import "./style.css";
import arrow from "@/../public/assets/arrow.webp";
const Model = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <Image src={clickedImg} width={1000} height={1000} alt="bigger pic" />

        <div
          onClick={handelRotationLeft}
          className="overlay-arrows_left rounded-[50%] hover:shadow-lg items-center justify-center flex"
        >
          <Image
            className="
                 m-auto xl:w-4 w-2 md:w-3 bg-transparent rotate-180 py-[5.41px]"
            src={arrow}
            alt="arrow"
          />
        </div>
        <div
          onClick={handelRotationRight}
          className="overlay-arrows_right rounded-[50%] hover:shadow-lg items-center flex justify-center"
        >
          <Image
            className="
                 m-auto xl:w-4 w-2 md:w-3 py-[5.41px] box-shadow-none"
            src={arrow}
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Model;
