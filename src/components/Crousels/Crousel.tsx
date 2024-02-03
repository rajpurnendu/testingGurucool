"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function Carousel({ slides }: { slides: any[] }) {
  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides.length]);
  // useEffect(() => {
  //   // Auto slide every 3 seconds (adjust the interval as needed)
  //   const autoSlideInterval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(autoSlideInterval);
  // }, [nextSlide, slide]);
  return (
    <div className="relative flex items-center max-w-[72rem] w-[100%] h-[400px] mt-[10px] mx-auto mb-3 overflow-hidden">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="drop-shadow-[0px_0px_5px_#555] absolute w-8 h-8 text-white hover:cursor-pointer left-4"
      />
      {slides.map((item, idx) => {
        return (
          <Image
            src={item.src}
            alt={item.alt}
            height={100}
            width={400}
            key={idx}
            className={`rounded-lg w-[100%] h-[100%] shadow-[0px_0px_7px_#666] object-cover block flex-grow-0 flex-shrink-0 transition-opacity duration-500 ${
              slide === idx ? "" : ""
            }`}
            // className={`rounded-lg w-[100%] h-[100%] shadow-[0px_0px_7px_#666] ${
            //   slide === idx ? "" : "hidden"
            // }`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="drop-shadow-[0px_0px_5px_#555] absolute w-8 h-8 text-white hover:cursor-pointer right-4"
      />
      <span className="flex absolute bottom-4">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={`bg-white h-4 w-4 rounded-full border-none outline-none shadow-[0px_0px_7px_#555] my-0 mx-1 cursor-pointer ${
                slide === idx ? "" : "bg-[#0e0e0e]"
              }`}
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
