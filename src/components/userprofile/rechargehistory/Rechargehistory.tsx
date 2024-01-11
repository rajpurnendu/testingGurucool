"use client";
import Accordian from "@/components/Reuseableaccordian/Accordian";
import React, { useEffect, useState } from "react";
import { Norechargehistory } from "./components/Norechargehistory";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { getUserprofile } from "@/lib/data";
import "./style.css";

function convertIst(date: string): string {
  const utcDate: Date = new Date(date);
  const istDate: Date = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  return istDate.toLocaleString();
}

const Rechargehistory = ({ loginToken }: { loginToken: string }) => {
  const [upi, setUPi] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [paymentdetails, setPaymentdetails] = useState([]);
  const handleUpi = () => {
    setUPi(true);
  };
  const handleCard = () => {
    setUPi(false);
  };
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserprofile(loginToken);
        const userUid = userData?.user?.uid ?? null;

        if (loginToken && userUid) {
          const response = await fetch(
            `https://prod.gurucool.life/api/v1/user/getPaymentsDetails?uid=${userUid}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${loginToken}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setPaymentdetails(data.paymentDetails);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // setUid(0);
        setPaymentdetails([]);
      }
    };

    fetchData();
  }, [loginToken]);

  const rechargeUpiItemsToDisplay = paymentdetails?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <Accordian title={"Recharge History"}>
      {rechargeUpiItemsToDisplay?.length === 0 ? (
        <div className="mt-[10px]">
          <Norechargehistory />
          <p className="text-[20px] text-[gray] font-medium text-center">
            No Recharge Data Available
          </p>
        </div>
      ) : (
        <div className="w-full p-2 bg-[#fafafa] md:py-8 md:px-7">
          <div className="my-0 mx-auto">
            {/* Tab Container  */}
            <div className="flex justify-center">
              <button
                className={clsx(
                  "w-[92px] text-[1rem] outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tl-md rounded-bl-md",
                  {
                    "bg-[#8d66d4] text-white": upi,
                  },
                  {
                    "bg-[#e8dcff] text-[#4a5568]": !upi,
                  }
                )}
                onClick={handleUpi}
              >
                UPI
              </button>
              <button
                className={clsx(
                  "w-[92px] text-[1rem] outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tr-md rounded-br-md",
                  {
                    "bg-[#8d66d4] text-white": !upi,
                  },
                  {
                    "bg-[#e8dcff] text-[#4a5568]": upi,
                  }
                )}
                onClick={handleCard}
              >
                CARD
              </button>
            </div>
            {/* Tab Pannels  */}
            <div className="flex justify-center border-none">
              {upi ? (
                <div>
                  <div className="flex flex-wrap justify-center flex-col gap-[18px] mt-[10px] md:flex-row">
                    {rechargeUpiItemsToDisplay?.length === 0 && (
                      <div className="mt-[10px] text-[gray] text-center">
                        No Data Available
                      </div>
                    )}
                    {rechargeUpiItemsToDisplay.map((curr: any, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-white mt-[10px] w-[300px] p-[9px] border border-solid border-[#965efbb2] rounded-lg md:mt-[unset] md:p-4 md:w-[325px]"
                        >
                          <div className="flex items-center justify-between">
                            <p
                              className={clsx(
                                "mb-0 text-[19px] font-medium",
                                {
                                  "text-[#38CC24]": curr.status === "captured",
                                },
                                {
                                  "text-[#f82828]": curr.status !== "captured",
                                }
                              )}
                            >
                              {curr?.status === "captured"
                                ? "Success"
                                : "Failed"}
                            </p>
                            <p className="mb-0 text-[11px] md:text-[12px]">
                              Txn: {curr._id}
                            </p>
                          </div>
                          <div className="mt-[4px] border-[2px] border-solid border-[#965efbb2]" />
                          <div className="mb-[8px] py-3 px-0">
                            <div className="flex items-center justify-between w-full">
                              <p className="mb-0 text-[16px] text-[#707070]">
                                Time
                              </p>
                              <p className="mb-0 text-[16px] text-[#707070]">
                                {convertIst(curr.createdAt)}
                              </p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                              <p className="mb-0 text-[16px] text-[#707070]">
                                Method
                              </p>
                              <p className="mb-0 text-[16px] text-[#707070]">
                                {curr.method}
                              </p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                              <p className="mb-0 text-[16px] text-[#707070]">
                                Subtotal
                              </p>
                              <p className="mb-0 text-[16px] text-[#707070]">
                                {curr.userAmount}
                              </p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                              <p className="mb-0 text-[16px] text-[#707070]">
                                Tax
                              </p>
                              <p className="mb-0 text-[16px] text-[#707070]">
                                {curr.gst}
                              </p>
                            </div>
                          </div>
                          <div className="mb-2 border-[2px] border-solid border-[#965efbb2]" />
                          <div className="flex items-center justify-between w-full">
                            <p className="mb-0 text-[16px] text-black">Total</p>
                            <p className="mb-0 text-[16px] text-black">
                              ₹ {curr.userAmount + curr.gst}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <ReactPaginate
                    previousLabel="<< Prev"
                    nextLabel="Next >>"
                    pageCount={Math.ceil(paymentdetails.length / itemsPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    previousLinkClassName="pagination__link"
                    nextLinkClassName="pagination__link"
                    disabledClassName="pagination__link--disabled"
                    activeClassName="pagination__link--active"
                    // style={paginationStyles}
                  />
                </div>
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center flex-col gap-[18px] mt-[10px] md:flex-row">
                    <p className="mt-[10px] text-gray-500 text-center">
                      No Data Available
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Accordian>
  );
};

export default Rechargehistory;
