import { getUserprofile } from "@/lib/data";
import Image from "next/image";
import React from "react";
import Displayuserinfo from "./components/Displayuserinfo";
import Displayeditform from "./components/Displayeditform";

const Userdetails = async ({
  loginToken,
  edit,
}: {
  loginToken: string | undefined;
  edit: boolean;
}) => {
  //   console.log("====================================");
  //   console.log(loginToken);
  //   console.log(edit);
  //   console.log("====================================");
  const userDetails = loginToken && (await getUserprofile(loginToken));
  return (
    <div
      className="max-w-6xl my-0 pr-4 pl-4 pt-8 box-border border border-solid border-[#965efb] rounded-[10px] mb-[15px] mt-[15px] ml-4 mr-4 md:mx-auto"
      style={{ marginTop: "200px" }}
    >
      {/* User Image  */}
      <div>
        {userDetails?.user?.avatar ? (
          <Image
            src={userDetails?.user?.avatar?.url}
            width={100}
            height={100}
            className="text-center m-auto rounded-full md:w-[160px] md:h-[160px]"
            alt="User Profile Image"
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-[#512da8] text-[35px] text-white text-center flex justify-center items-center my-[20px] mx-auto md:w-40 md:h-40">
            {userDetails?.user?.firstName.charAt(0)}
            {userDetails?.user?.lastName.charAt(0)}
          </div>
        )}
      </div>
      {edit ? (
        <Displayeditform userDetails={userDetails} loginToken={loginToken} />
      ) : (
        <Displayuserinfo userDetails={userDetails} />
      )}
    </div>
  );
};

export default Userdetails;
