"use client";
import Image from "next/image";
import userByDefault from "../../../public/images/registration/userbydefault.svg";
import { ChangeEvent, useState } from "react";
import { handleRegistration } from "@/lib/actions";
import toast, { Toaster } from "react-hot-toast";

const Registration = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Use FileReader to read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRegistrationAction = (formData: FormData) => {
    toast.promise(handleRegistration(formData), {
      loading: "Saving...",
      success: <b>Registration Successfully!</b>,
      error: <b>Could not save...</b>,
    });
  };

  return (
    <form
      className="max-w-6xl mx-auto px-4 md:px-0 box-border"
      style={{ marginTop: "100px" }}
      action={handleRegistrationAction}
    >
      {/* Image Section  */}
      <div className="w-full h-[212px] bg-[#965efbb2] rounded-md flex flex-col items-center justify-center gap-7">
        <div className="relative w-[75px] h-[75px]">
          <Image
            src={selectedImage || userByDefault}
            alt="User By Default Image"
            fill
            className=""
          />
        </div>
        <label
          htmlFor="fileInput"
          className="w-[212px] h-[42px] border-white border-[2px] px-[19px] py-[9px] rounded-md text-white text-[20px] font-semibold flex justify-center items-center"
        >
          Choose Your Pic
        </label>
        <input
          id="fileInput"
          type="file"
          name="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <h2 className="my-[16px] text-[20px] text-center font-semibold">
        Registration
      </h2>
      <div className="w-full rounded-xl border-[0.85px] border-[#965efbb2] opacity-70 bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.14)] h-auto flex flex-col items-center py-[15px] gap-7 md:flex-row md:flex-wrap md:justify-center">
        {/* 1.First Name */}
        <div className="w-[90%] md:w-[45%]">
          <label
            htmlFor="first_name"
            className="block text-[16px] font-semibold text-[#1e1d1d] md:text-[18px] md:font-semibold"
          >
            First Name<span className="text-[#965EFB]">*</span>
          </label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            className="bg-white border-b border-gray-300 text-gray-900 text-sm block w-full py-2.5 focus:border-b focus:outline-none md:border md:border-[#965efbb2] md:rounded-md md:px-4 md:py-3.5"
            placeholder="Enter Your First Name"
            required
          />
        </div>
        {/* 2.Last Name  */}
        <div className="w-[90%] md:w-[45%]">
          <label
            htmlFor="last_name"
            className="block text-[16px] font-semibold text-[#1e1d1d] md:text-[18px] md:font-semibold"
          >
            Last Name<span className="text-[#965EFB]">*</span>
          </label>
          <input
            type="text"
            id="last_name"
            name="lastName"
            className="bg-white border-b border-gray-300 text-gray-900 text-sm block w-full py-2.5 focus:border-b focus:outline-none md:border md:border-[#965efbb2] md:rounded-md md:px-4 md:py-3.5"
            placeholder="Enter Your Last Name"
            required
          />
        </div>
        {/* 3.Gender  */}
        <div className="w-[90%] md:w-[45%]">
          <div className="block text-[16px] font-semibold text-[#1e1d1d] md:text-[18px] md:font-semibold">
            Gender<span className="text-[#965EFB]">*</span>
          </div>
          <div className="flex flex-row items-center">
            <input
              id="Male"
              type="radio"
              value="Male"
              name="gender"
              className="w-5 h-5 bg-gray-100 border-gray-300 md:h-7 md:w-7"
            />
            <label
              htmlFor="Male"
              className="w-full py-3 ms-2 text-sm font-semibold text-[#222] md:text-[16px]"
            >
              Male
            </label>
            <input
              id="Female"
              type="radio"
              value="Female"
              name="gender"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 md:h-7 md:w-7"
            />
            <label
              htmlFor="Female"
              className="w-full py-3 ms-2 text-sm font-semibold text-[#222] md:text-[16px]"
            >
              Female
            </label>
            <input
              id="Other"
              type="radio"
              value="Other"
              name="gender"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 md:h-7 md:w-7"
            />
            <label
              htmlFor="Other"
              className="w-full py-3 ms-2 text-sm font-semibold text-[#222] md:text-[16px]"
            >
              Other
            </label>
          </div>
        </div>
        {/* 4. Email  */}
        <div className="w-[90%] md:w-[45%]">
          <label
            htmlFor="last_name"
            className="block text-[16px] font-semibold text-[#1e1d1d] md:text-[18px] md:font-semibold"
          >
            Email Id
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white border-b border-gray-300 text-gray-900 text-sm block w-full py-2.5 focus:border-b focus:outline-none md:border md:border-[#965efbb2] md:rounded-md md:px-4 md:py-3.5"
            placeholder="Enter Your Email"
          />
        </div>
      </div>
      <div className=" md:flex md:justify-center">
        <button
          className="w-full h-[44px] mt-6 mb-8 rounded-md bg-[#26C884] text-white text-[16px] font-semibold md:w-[30%]"
          type="submit"
        >
          Submit
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
};

export default Registration;
