"use client";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import React, { ReactNode, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type AccordionProps = {
  children: ReactNode;
  title: string;
  isExpand?: boolean;
};

const Accordian: React.FC<AccordionProps> = ({
  children,
  title,
  isExpand = false,
}) => {
  const [expand, setExpand] = useState(isExpand);
  return (
    <div className="max-w-6xl my-0 box-border border border-solid border-[#965efb] rounded-[10px] mb-[15px] ml-4 mr-4 md:mx-auto">
      <div
        className="cursor-pointer border border-solid border-[white] rounded-[inherit] hover:bg-[#e2e8f0]"
        onClick={() => {setExpand((expand) => !expand)
          sendGTMEvent({
            event: "buttonClicked",
            value: `${title}`,
          });
          sendGAEvent({
            event: "buttonClicked",
            value: `${title}`,
          });
        }}
      >
        <h2 className="flex justify-center items-center w-[calc(100%-20px)] text-center text-[18px] mt-2 mb-2 md:text-[24px]">
          {title}
          <span className="flex text-[#965efb] float-right">
            <RiArrowDropDownLine
              style={{
                transform: !expand ? "rotate(-90deg)" : "rotate(0deg)",
                transition: "all 0.2s ease-in-out",
                width: "38px",
                height: "38px",
              }}
            />
          </span>
        </h2>
        <div className="clear-both"></div>
      </div>
      {expand && <div className="p-[15px]">{children}</div>}
    </div>
  );
};

export default Accordian;
