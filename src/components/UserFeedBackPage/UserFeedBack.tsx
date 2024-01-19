import React from "react";

const UserFeedBack = () => {
  return (
    <div className="w-[72rem] mx-auto flex justify-between my-[20px]">
      <div className="w-[50%] px-5 py-[5px]">
        <div className="mb-[30px]">
          <div className="rounded-full h-[140px] flex items-center justify-center w-[140px] text-white bg-black m-auto">
            IM
          </div>
          <h4 className="text-[22px] font-[600] text-center mt-[10px]">
            AstroName
          </h4>
        </div>
        <div className="h-0 border-b w-[95%] m-auto border-[rgb(150,94,251)]"></div>
        <div className="flex justify-between w-full mt-[15px]">
          <div className="w-[48%] flex flex-col items-center justify-center">
            <p className="text-[18px] font-[600] text-[rgb(128,128,128)]">
              Consultaion Charge
            </p>
            <p className="text-[rgb(20,164,0)] text-[25px] font-[600]">
              19.07₹
            </p>
          </div>
          <div className="w-[48%] flex flex-col items-center justify-center">
            <p className="text-[18px] font-[600] text-[rgb(128,128,128)]">
              Call Duration
            </p>
            <p className="text-[rgb(20,164,0)] text-[25px] font-[600]">0 Min</p>
          </div>
        </div>
        <p className="text-[rgb(20, 164, 0)] text-center font-[700] text-[17px] mt-[5px] mb-[15px]">
          Consultation Successfully Completed !!!
        </p>
        <div className="h-0 border-b w-[95%] m-auto border-[rgb(150,94,251)]"></div>
      </div>
      <div className="w-[50%]">
        <h2 className="text-[30px] font-[600] text-center">
          Share Your Feedback
        </h2>
        <div className="w-[90%] m-auto border-b border-[rgb(150,94,251)]"></div>
        <div className="px-[5%] pt-[5px]">
          <h4 className="text-[20px] text-center">
            How do you rate your productivity?
          </h4>
          <div className="flex justify-center mt-1">start</div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedBack;
