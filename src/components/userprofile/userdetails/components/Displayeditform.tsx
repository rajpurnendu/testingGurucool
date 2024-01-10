import { updateUser } from "@/lib/actions";
import React, { FormEvent } from "react";

const Displayeditform = ({
  userDetails,
  loginToken,
}: {
  userDetails: any;
  loginToken: string | undefined;
}) => {
  const updateUseraction = updateUser.bind(null, loginToken as string);
  return (
    <form className="text-center" action={updateUseraction}>
      <label className="text-center mt-5">Edit User Details</label>
      {/* 1  */}
      <div className="flex flex-col items-start">
        {/* Flex Input Section  */}
        {/* 1 */}
        <div className="flex items-center flex-col w-[100%]">
          <p className="text-[11px] w-[270px] text-left mb-[1px] md:text-[13px] md:w-[370px]">
            First Name
          </p>
          <div className="w-[270px] md:w-[370px]">
            <input
              type="text"
              name="firstName"
              required
              defaultValue={userDetails?.user?.firstName}
              placeholder="Enter Your First Name"
              className="mr-[2px] mb-1 w-full h-[35px] rounded-[5px] border border-solid border-[#965efb] pl-2 pr-2 outline-none focus:z-[1] focus:border-[#965efb] focus:shadow-[0_0_0_1px_#965efb] focus-visible:z-[1] focus-visible:border-[#965efb] focus-visiable:shadow-[0_0_0_1px_#965efb] md:w-full md:h-10"
            />
          </div>
        </div>
        {/* 2  */}
        <div className="flex items-center flex-col w-[100%]">
          <p className="text-[11px] w-[270px] text-left mb-[1px] md:text-[13px] md:w-[370px]">
            Last Name
          </p>
          <div className="w-[270px] md:w-[370px]">
            <input
              type="text"
              name="lastName"
              required
              defaultValue={userDetails?.user?.lastName}
              placeholder="Enter Your Last Name"
              className="mr-[2px] mb-1 w-full h-[35px] rounded-[5px] border border-solid border-[#965efb] pl-2 pr-2 outline-none focus:z-[1] focus:border-[#965efb] focus:shadow-[0_0_0_1px_#965efb] focus-visible:z-[1] focus-visible:border-[#965efb] focus-visiable:shadow-[0_0_0_1px_#965efb] md:w-full md:h-10"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center flex-col w-[100%]">
          <p className="text-[11px] w-[270px] text-left mb-[1px] md:text-[13px] md:w-[370px]">
            Enter Your Mail ID
          </p>
          <div className="w-[270px] md:w-[370px]">
            <input
              type="text"
              name="email"
              defaultValue={userDetails?.user?.email}
              placeholder="Enter Your Mail ID"
              className="mr-[2px] mb-1 w-full h-[35px] rounded-[5px] border border-solid border-[#965efb] pl-2 pr-2 outline-none focus:z-[1] focus:border-[#965efb] focus:shadow-[0_0_0_1px_#965efb] focus-visible:z-[1] focus-visible:border-[#965efb] focus-visiable:shadow-[0_0_0_1px_#965efb] md:w-full md:h-10"
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col items-center mt-[10px] mb-[10px] w-[100%]">
        <p className="mb-[1px] text-left text-[11px] w-[270px] md:text-[13px] md:w-[370px]">
          Gender
        </p>
        <select
          className="h-[35px] w-[270px] rounded-[5px] border border-solid border-[#965efb] pl-2 pr-2 outline-none focus:z-[1] focus:border-[#965efb] focus:shadow-[0_0_0_1px_#965efb] focus-visible:z-[1] focus-visible:border-[#965efb] focus-visiable:shadow-[0_0_0_1px_#965efb] md:w-[370px] md:h-[40px]"
          defaultValue={userDetails?.user?.gender}
          name="gender"
        >
          <option value="" disabled>
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {/* 3  */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#965efb] text-[16px] py-2 px-4 border-none rounded-[5px] cursor-pointer mb-[10px] text-white font-medium md:w-[180px]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Displayeditform;
