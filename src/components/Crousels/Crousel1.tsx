"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Dot from "../../../public/dot-svgrepo-com.svg";
import Dotgrey from "../../../public/dot-svgrepo-com-greay.svg";
import "./style.css";
export default function Carousel1({
  slides,
  dot,
  icon,
  bottom,
}: {
  slides: any[];
  dot: boolean;
  icon: boolean;
  bottom: any;
}) {
  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    // Auto slide every 3 seconds (adjust the interval as needed)
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(autoSlideInterval);
  }, [nextSlide, slide]);
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {slides.map((img, idx) => (
          <Image
            src={img.src}
            alt={img.alt}
            width={500}
            height={200}
            className="object-cover w-full h-full block flex-shrink-0 flex-grow-0"
            key={"slide" + idx}
            style={{
              translate: `${-100 * slide}%`,
              transition: "translate 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      {icon && (
        <>
          <button
            className="block absolute top-0 bottom-0 p-2 md:p-4 cursor-pointer left-0 hover:bg-[rgb(0,0,0,0.2)] img-slider-btn focus-visible:bg-[rgb(0,0,0,0.2)]"
            style={{
              transition: "background-color 100ms ease-in-out",
              //   all: "unset",
            }}
            onClick={prevSlide}
          >
            <BsArrowLeftCircleFill className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </button>
          <button
            className="block absolute top-0 bottom-0 p-2 md:p-4 cursor-pointer right-0 hover:bg-[rgb(0,0,0,0.2)] img-slider-btn focus-visible:bg-[rgb(0,0,0,0.2)]"
            style={{
              transition: "background-color 100ms ease-in-out",
              //   all: "unset",
            }}
            onClick={nextSlide}
          >
            <BsArrowRightCircleFill className="w-6 md:w-8 h-6 md:h-8 text-white" />
          </button>
        </>
      )}
      {dot && (
        <div
          className={`absolute  ${bottom} left-2/4 translate-x-[-50%] flex gap-2 items-center`}
        >
          {slides.map((_, index) => (
            <button
              className={`block relative cursor-pointer hover:scale-125 focus-visible:bg-scale-125 ${
                index === slide ? "w-3 h-3" : "w-3 h-3"
              }`}
              key={"dot" + index}
              onClick={() => {
                setSlide(index);
              }}
              style={{
                transition: "scale 100ms ease-in-out",
                //   all: "unset",
              }}
            >
              <Image
                src={index === slide ? Dot : Dotgrey}
                alt="Dot Icon"
                fill
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
