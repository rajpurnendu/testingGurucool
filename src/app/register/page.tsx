"use client";
import { registerNewUser } from "@/lib/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

function sendEmail(newUserEnteredEmail: string) {
  if (newUserEnteredEmail.trim() === "") {
    return undefined;
  } else {
    return newUserEnteredEmail;
  }
}

interface Formdata {
  file: File | null;
  firstName: string;
  lastName: string;
  email: string | undefined;
  code: string;
  isInternational: boolean;
  website: string;
  gender: string;
  referralCode: string | undefined;
}

const Register = () => {
  //   const [image, setImage] = useState<File | null>(null);
  const [formData, setFormdata] = useState<Formdata>({
    file: null,
    firstName: "",
    lastName: "",
    email: undefined,
    code: "+91",
    isInternational: false,
    website: "gurucool",
    gender: "",
    referralCode: undefined,
  });
  const router = useRouter();
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];

    if (selectedImage) {
      setFormdata({ ...formData, file: selectedImage });
    }
  };

  const registerNewUserHandler = async () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.gender === ""
    ) {
      toast.error(
        "Please Enter Your First Name , Last Name and Gender It's Required!"
      );
      return;
    }

    // TODO: Registration process
    registerNewUser(formData)
      .then((result) => {
        // console.log(result);
        if (result?.success) {
          toast.success(result.message);
          router.push("/");
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      });
  };
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0 box-border">
      {/* Image Box  */}
      <div
        className="w-[100%] relative bg-[rgba(150, 94, 251, 0.7)] pt-8 pr-0 pb-[15px] pl-0 text-center flex flex-col items-center mt-10"
        // style={{ marginTop: "100px" }}
      >
        {formData.file ? (
          <Image
            width={100}
            height={100}
            alt="User Image"
            className="rounded-[50%] h-[100px] w-[100px] object-cover border border-solid border-white"
            src={URL.createObjectURL(formData.file)}
          />
        ) : (
          <div>
            <FaUserCircle size={55} />
          </div>
        )}
        <label
          htmlFor="fileInput"
          className="cursor-pointer inline-flex items-center justify-center select-none mt-4 relative whitespace-nowrap align-middle outline-none transition-all duration-200 min-w-4 bg-transparent border-2 border-[#edf2f7] py-[9px] px-[19px] rounded-[5px] text-base text-[#b0cdeb] font-medium"
        >
          Choose Your Pic
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <h5 className="flex items-center mt-8 mb-2 justify-center text-[22px] font-semibold">
        Registration
      </h5>
      {/* Form Container  */}
      <div className="flex justify-center items-center flex-col mb-3">
        {/* Lower Box  */}
        <div className="flex flex-col justify-center">
          {/* Lower Container  */}
          <div className="grid grid-cols-1 pt-[15px] pr-[18px] pb-[21px] pl-[18px] md:place-items-center md:grid-cols-2">
            <div className="relative">
              <h5 className="mt-[26px] text-[#3a3938] font-semibold">
                First Name<span className="text-[#965efbb2]">*</span>
              </h5>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => {
                  setFormdata({ ...formData, firstName: e.target.value });
                }}
                required
                placeholder="Enter Your Name"
                className="w-[283px] py-[13px] px-[0px] border-0 border-b border-solid border-[#c4c4c4] rounded-none md:rounded-md md:w-[360px] md:border md:border-solid md:border-[#965efbb2] md:bg-white md:pt-[13px] md:pr-0 md:pb-[14px] md:pl-[14px]"
              />
            </div>
            <div className="relative">
              <h5 className="mt-[26px] text-[#3a3938] font-semibold">
                Last Name<span className="text-[#965efbb2]">*</span>
              </h5>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => {
                  setFormdata({ ...formData, lastName: e.target.value });
                }}
                placeholder="Enter Your Last Name"
                className="w-[283px] py-[13px] px-[0px] border-0 border-b border-solid border-[#c4c4c4] rounded-none md:rounded-md md:w-[360px] md:border md:border-solid md:border-[#965efbb2] md:bg-white md:pt-[13px] md:pr-0 md:pb-[14px] md:pl-[14px]"
              />
            </div>
            {/* Radio Box  */}
            <div className="w-auto ml-0 mb-0 relative md:w-[381px] md:ml-[5%] md:mb-[28px]">
              <h5 className="mt-[26px] text-[#3a3938] font-semibold">
                Gender <span className="text-[#965efbb2]">*</span>
              </h5>
              <div className="flex flex-row gap-[16px] items-center">
                <input
                  id="Male"
                  type="radio"
                  value="Male"
                  checked={formData.gender == "Male"}
                  onChange={(e) => {
                    setFormdata({ ...formData, gender: e.target.value });
                  }}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Male"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
                <input
                  id="Female"
                  type="radio"
                  value="Female"
                  checked={formData.gender == "Female"}
                  onChange={(e) => {
                    setFormdata({ ...formData, gender: e.target.value });
                  }}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Female"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
                <input
                  id="Other"
                  type="radio"
                  value="Other"
                  checked={formData.gender == "Other"}
                  onChange={(e) => {
                    setFormdata({ ...formData, gender: e.target.value });
                  }}
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Other"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Other
                </label>
              </div>
            </div>
            <div className="relative">
              <h5 className="mt-[26px] text-[#3a3938] font-semibold">
                Email Id
              </h5>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => {
                  setFormdata({ ...formData, email: e.target.value });
                }}
                placeholder="Enter your email id"
                className="w-[283px] py-[13px] px-[0px] border-0 border-b border-solid border-[#c4c4c4] rounded-none md:rounded-md md:w-[360px] md:border md:border-solid md:border-[#965efbb2] md:bg-white md:pt-[13px] md:pr-0 md:pb-[14px] md:pl-[14px]"
              />
            </div>
          </div>
        </div>
        {/* Button  */}
        <button
          className="font-[20px] mt-[10px] md:text-[white] bg-[#965efbb2] rounded-md text-white px-3 py-1 md:rounded-md md:text-[22px] md:font-semibold md:py-[10px] md:px-[114px] md:mb-6 md:mt-5 md:bg-[#965efbb2]"
          onClick={registerNewUserHandler}
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
