"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import arrow from "../../../public/assets/arrrow2.svg";
import Image from "next/image";

const BreadCrumb = () => {
  const formatCrumbName = (crumb) => {
    if (crumb.includes("%20")) {
      crumb = crumb.replace(/%20/g, " ");
    }
    switch (crumb) {
      case "aboutUs":
        return "About Us";
      case "contactUs":
        return "Contact Us";
      case "termandconditions":
        return "Term & Conditions";
      case "privacy":
        return "Privacy Policy";
      case "refund-policy":
        return "Refund Policy";
      case "disclaimer":
        return "Disclaimer";
      case "call-to-astrologers":
        return "Consult Now";
      case "my-profile":
        return "Profile";
      case "pricelist":
        return "Pricelist";
      case "paymentdetails":
        return "Payment Detail";
      case "web-stories":
        return "Web-Stories";

      // Add more cases as needed
      default:
        return crumb.charAt(0).toUpperCase() + crumb.slice(1); // Capitalize the first letter
    }
  };
  const formatLink = (link) => {
    switch (link) {
      case "astrologers":
        return "call-to-astrologers";
      case "wallet":
        return "wallet/pricelist";
      default:
        return link;
    }
  };
  const path = usePathname();
  let currentLink = "";
  const crumbs = path
    .split("/")
    .filter((crumb) => crumb !== "" && crumb !== "category")
    .map((crumb, index, arr) => {
      currentLink = currentLink + `/${formatLink(crumb)}`;
      const isLast = index === arr.length - 1;
      return (
        <div
          key={index}
          className="flex gap-[12.15px] md:gap-5 text-white font-[500] text-[1
            2px] md:text-[20px] md:font-[600] items-center justify-center"
        >
          {/* <Link href="/">Home</Link> */}
          <Image
            src={arrow}
            className="md:w-[10.87px] w-[6.61px] h-[10.49px] md:h-[17.27px]"
            width="100"
            alt="alt"
          />
          {isLast ? (
            <p className=" cursor-default text-[12px] md:text-[20px]  leading-[24px] underline">
              {formatCrumbName(crumb).length > 14
                ? `${formatCrumbName(crumb).slice(0, 14)}...`
                : formatCrumbName(crumb)}
            </p>
          ) : (
            <Link
              href={currentLink}
              className="hover:scale-105 text-[12px] md:text-[20px]    transition-all ease-in-out duration-500"
            >
              {formatCrumbName(crumb)}
            </Link>
          )}
        </div>
      );
    });
  // console.log(crumbs);

  return (
    <div className="max-w-[72rem] flex items-start justify-start ml-5 xl:mx-auto">
      <div className="flex flex-row  items-center justify-center my-4 md:my-7 md:text-[20px] md:px-[30px] py-[2px] px-[16px] md:py-[4px] gap-[12.15px] md:gap-5 bg-[#965EFB] rounded-full  w-fit">
        <Link
          className=" text-left text-white font-[500] md:font-[600] text-[12px] md:text-[18px]  hover:scale-105 transition-all ease-in-out duration-500"
          href="/"
        >
          Home
        </Link>
        {crumbs}
      </div>
    </div>
  );
};

export default BreadCrumb;
