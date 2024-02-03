"use client";
import clsx from "clsx";
import React from "react";

const Filtertagbutton = ({
  filtername,
  text,
}: {
  filtername: string;
  text: string;
}) => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 70,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <p
      className={clsx(
        "flex appearance-none items-center justify-center md:justify-start select-none relative whitespace-nowrap align-middle rounded-full border md:border-none leading-tight transition-all duration-200 px-2 md:px-4 min-w-24 h-8 w-auto  font-semibold text-xs hover:bg-purple-400 hover:text-white",
        {
          "bg-purple-500 text-white  md:justify-center": filtername === text,
        }
      )}
      onClick={() => {
        scrolltoHash("related_blogs");
      }}
    >
      {text}
    </p>
  );
};

export default Filtertagbutton;
