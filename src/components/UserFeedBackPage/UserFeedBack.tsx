"use client";
import React, { useEffect, useState } from "react";
import profileimg from "../../../public/assets/Balkrishna.jpg";
import Image from "next/image";
import Star from "./Star";
import Link from "next/link";
import { G_GET_SINGLE_ASTROLOGER_BY_TOKEN, TESTING_URL } from "@/lib/apilinks";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const UserFeedBack = ({
  astroDetails,
  callPurchasedId,
  amount,
  callDuration,
  guruToken,
  userId,
}: {
  astroDetails: any;
  callPurchasedId: string;
  amount: number;
  callDuration: number;
  guruToken: string;
  userId: string;
}) => {
  const [rating, setRating] = useState(0);
  const [checkedState, setCheckedState] = useState<string[]>([]);
  const [feedbacktext, setFeedbacktext] = useState("");
  const [guruData, setGuruData] = useState<any>();
  // console.log(guruToken);
  const router = useRouter();
  useEffect(() => {
    fetch(G_GET_SINGLE_ASTROLOGER_BY_TOKEN(guruToken))
      .then((response) => response.json())
      .then((data) => setGuruData(data.guru));
  }, []);

  // console.log(guruData);
  // console.log(callPurchasedId);
  // console.log(amount);
  // console.log(callDuration);

  const handleCheckboxChange = (feedback: any, isChecked: any) => {
    if (isChecked) {
      setCheckedState([...checkedState, feedback]);
    } else {
      setCheckedState(checkedState.filter((item) => item !== feedback));
    }
  };
  const starRatings = [
    [
      "Didn't Get Consultation",
      "Wrong Prediction",
      "Call Didn't Work",
      "Web Had Problems",
    ],
    [
      "Partial Consultation",
      "Some Predictions Wrong",
      "Calls Dropped Sometimes",
      "Web Glitched a Bit",
    ],

    [
      "Okay Consultation",
      "Mostly Right Predictions",
      "Calls Had Hiccups",
      "Web Worked Normally",
    ],

    [
      "Good Consultation",
      "Predictions Were Good",
      "Minor Call Issues",
      "Web Worked Well",
    ],
    [
      "Amazing Consultation",
      "Predictions Were Perfect",
      "Calls Worked Great",
      "Web Worked Perfectly",
    ],
  ];

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log(rating, checkedState, feedbacktext);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${TESTING_URL}guru/addFeedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include other headers if necessary
        },
        body: JSON.stringify({
          user: userId,
          astrologer: astroDetails?.user?._id,
          rating: rating,
          bad: rating <= 2 ? checkedState.join(", ") : "",
          good: rating > 2 ? checkedState.join(", ") : "",
          badFeedback: rating <= 2 ? feedbacktext : "",
          goodFeedback: rating > 2 ? feedbacktext : "",
          purchaseId: callPurchasedId,
        }),
      });

      if (response.ok) {
        setRating(0);
        setCheckedState([]);
        setFeedbacktext("");
        // alert("Feedback submitted!!!");
        toast.success("Feedback Submitted!!!");
        router.push("/");
      } else {
        // Handle non-200 responses
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  console.log(astroDetails);

  return (
    <div className="max-w-[72rem] mx-auto flex justify-between xl:flex-row flex-col mt-[90px] my-[20px]">
      <Toaster/>
      <div className="xl:w-[50%] w-full px-5 py-[5px]">
        <div className="mb-[30px]">
          <div className="rounded-full h-[140px] overflow-hidden flex items-center justify-center w-[140px] text-white m-auto">
            <Image
              src={astroDetails?.user?.avatar?.url}
              className="w-full h-full"
              width="300"
              height="300"
              alt="AstroImg"
            />
          </div>
          <h4 className="text-[22px] font-[600] text-center mt-[10px]">
            {astroDetails.user.firstName} {astroDetails.user.lastName}
          </h4>
        </div>
        <div className="h-0 border-b w-[95%] m-auto border-[rgb(150,94,251)]"></div>
        <div className="flex justify-between w-full mt-[15px]">
          <div className="w-[48%] flex flex-col items-center justify-center">
            <p className="text-[18px] font-[600] text-[rgb(128,128,128)]">
              Consultaion Charge
            </p>
            <p className="text-[rgb(20,164,0)] text-[25px] font-[600]">
              ₹ {amount ? parseFloat(amount.toString()).toFixed(2) : "0"}
            </p>
          </div>
          <div className="w-[48%] flex flex-col items-center justify-center">
            <p className="text-[18px] font-[600] text-[rgb(128,128,128)]">
              Call Duration
            </p>
            <p className="text-[rgb(20,164,0)] text-[25px] font-[600]">
              {Math.round(callDuration)} Min
            </p>
          </div>
        </div>
        <p className="text-[rgb(20,164,0)]  text-center font-[700] text-[17px] mt-[5px] mb-[15px]">
          Consultation Successfully Completed !!!
        </p>
        <div className="h-0 border-b w-[95%] m-auto border-[rgb(150,94,251)]"></div>
      </div>
      <div className="xl:w-[50%] w-full md:px-5 md:py-[5px]">
        <h2 className="text-[30px] font-[600] text-center">
          Share Your Feedback
        </h2>
        <div className="w-[90%] m-auto border-b border-[rgb(150,94,251)]"></div>
        <div className="px-[5%] pt-[5px]">
          <h4 className="text-[20px] text-center">
            How do you rate your productivity?
          </h4>
          <div className="flex justify-center mt-1">
            <div className="mx-[5px]"></div>

            {[1, 2, 3, 4, 5].map((number, index) => (
              <Star
                filled={index < rating}
                key={number}
                onClick={() => {
                  setRating(number);
                  setCheckedState([]);
                }}
              />
            ))}
          </div>
          <div className="flex mt-[10px] flex-wrap justify-between">
            {rating > 0 &&
              starRatings[rating - 1].map((feedback: any, index: number) => (
                <div
                  key={index}
                  className={`m-[7px] mx-0 text-[17px] border-gray-400 w-[48%]  rounded-[11px] flex items-center border  ${
                    checkedState.includes(feedback)
                      ? "bg-green-500 text-white"
                      : "bg-transparent text-black"
                  }`}
                >
                  <input
                    id={`feedback-${rating}-${index}`}
                    type="checkbox"
                    value={feedback}
                    className="hidden"
                    onChange={(e) =>
                      handleCheckboxChange(feedback, e.target.checked)
                    }
                  />
                  <label
                    htmlFor={`feedback-${rating}-${index}`}
                    className="cursor-pointer h-full w-full flex justify-center items-center px-3 py-0.2"
                  >
                    {feedback}
                  </label>
                </div>
              ))}
          </div>
          <textarea
            placeholder="Write Your Feedback..."
            value={feedbacktext}
            onChange={(e) => setFeedbacktext(e.target.value)}
            className="w-full border border-[rgb(150,94,251)] rounded-[12px] h-[200px] mt-[15px] p-[10px] outline outline-transparent outline-offset-[2px] resize-none"
          ></textarea>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="cursor-pointer flex justify-center items-center text-[rgb(38,200,132)] h-[2.5rem] w-[45%] rounded-[0.375rem] outline-transparent outline outline-offset-[1.2] hover:opacity-[0.9] font-[600] bg-white border border-[rgb(38,200,132)] mt-2"
            >
              Skip For Now
            </Link>
            <button
              onClick={handleSubmit}
              disabled={
                rating < 1 ||
                !(checkedState.length > 0 || feedbacktext.length >= 2)
              }
              className="text-white h-[2.5rem] w-[45%] rounded-[0.375rem] outline outline-transparent outline-offset-[2px] leading-[1.2] font-[600] bg-[#26c884] mt-[8px] hover:opacity-[0.9] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBack;
