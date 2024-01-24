import Link from "next/link";

const Displayuserinfo = ({ userDetails }: { userDetails: any }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center rounded-lg mt-2 md:rounded-[18px] md:mt-3">
        <h2 className="text-[16px] font-medium mb-0 md:text-[24px]">
          {userDetails?.user?.firstName} {userDetails?.user?.lastName}
        </h2>
        <Link href={"?edit=true"}>
          <button className="w-[35px] h-[35px] flex items-center justify-center bg-[#8d66d4] rounded-full ml-[10px] cursor-pointer hover:bg-[#a35a20] md:w-[40px] md:h-[40px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.988 2.01199L21.988 5.01199L19.701 7.29999L16.701 4.29999L18.988 2.01199ZM8 16H11L18.287 8.71299L15.287 5.71299L8 13V16Z"
                fill="#eae4e4"
              />
              <path
                d="M19 19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.896 3 5V19C3 20.104 3.897 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V10.332L19 12.332V19Z"
                fill="#eae4e4"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        {/* 1  */}
        <div className="flex justify-between w-80 md:w-[468px] md:mb-6">
          <h5 className="mb-0 text-[14px] font-medium text-[#838383] md:text-[16px]">
            <span className="flex items-center mr-3">
              {userDetails?.user?.gender === "Male" ? (
                <svg width="30" height="30" viewBox="0 0 512 512" fill="none">
                  <path
                    d="M442 48H352C346.165 48 340.569 50.3178 336.444 54.4436C332.318 58.5694 330 64.1652 330 70C330 75.8348 332.318 81.4306 336.444 85.5564C340.569 89.6822 346.165 92 352 92H388.89L328.5 152.39C260.31 99.53 161.5 104.39 98.96 166.96C31.12 234.81 31.12 345.19 99 413C131.656 445.558 175.887 463.84 222 463.84C268.113 463.84 312.344 445.558 345 413C407.57 350.42 412.43 251.65 359.57 183.46L420 123.11V160C420 165.835 422.318 171.431 426.444 175.556C430.569 179.682 436.165 182 442 182C447.835 182 453.431 179.682 457.556 175.556C461.682 171.431 464 165.835 464 160V70C464 67.1109 463.431 64.2501 462.325 61.581C461.22 58.9118 459.599 56.4865 457.556 54.4436C455.513 52.4008 453.088 50.7803 450.419 49.6747C447.75 48.569 444.889 48 442 48ZM313.92 381.92C289.524 406.266 256.466 419.938 222 419.938C187.534 419.938 154.476 406.266 130.08 381.92C79.39 331.24 79.39 248.76 130.08 198.08C180.77 147.4 263.24 147.39 313.92 198.08C364.6 248.77 364.61 331.24 313.92 381.92Z"
                    fill="#545454"
                  />
                </svg>
              ) : (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M430 190C430 94.06 351.94 16 256 16C160.06 16 82 94.06 82 190C82 278.49 148.4 351.77 234 362.61V394H198C192.165 394 186.569 396.318 182.444 400.444C178.318 404.569 176 410.165 176 416C176 421.835 178.318 427.431 182.444 431.556C186.569 435.682 192.165 438 198 438H234V474C234 479.835 236.318 485.431 240.444 489.556C244.569 493.682 250.165 496 256 496C261.835 496 267.431 493.682 271.556 489.556C275.682 485.431 278 479.835 278 474V438H314C319.835 438 325.431 435.682 329.556 431.556C333.682 427.431 336 421.835 336 416C336 410.165 333.682 404.569 329.556 400.444C325.431 396.318 319.835 394 314 394H278V362.61C363.6 351.77 430 278.49 430 190ZM126 190C126 118.32 184.32 60 256 60C327.68 60 386 118.32 386 190C386 261.68 327.68 320 256 320C184.32 320 126 261.68 126 190Z"
                    fill="#545454"
                  />
                </svg>
              )}
              <span className="ml-[7px]">Gender</span>
            </span>
          </h5>
          <h2 className="text-[14px] font-medium text-[#3f3f3f] mb-0 md:text-[16px]">
            {userDetails?.user?.gender}
          </h2>
        </div>
        {/* 2  */}
        <div className="flex justify-between w-80 md:w-[468px] md:mb-6">
          <h5 className="mb-0 text-[14px] font-medium text-[#838383] md:text-[16px]">
            <span className="flex items-center mr-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                  fill="#545454"
                />
              </svg>
              <span className="ml-[7px]">Email ID</span>
            </span>
          </h5>
          <h5 className="text-[14px] font-medium text-[#3f3f3f] mb-0 md:text-[16px]">
            {userDetails?.user?.email}
          </h5>
        </div>
        {/* 3  */}
        <div className="flex justify-between w-80 md:w-[468px] md:mb-6">
          <h5 className="mb-0 text-[14px] font-medium text-[#838383] md:text-[16px]">
            <span className="flex items-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0f0"
                  d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
                ></path>
                <path
                  fill="#fff"
                  d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
                ></path>
              </svg>
              <span className="ml-[7px]">Mobile No</span>
            </span>
          </h5>
          <h5 className="text-[14px] font-medium text-[#3f3f3f] mb-0 md:text-[16px]">
            {userDetails?.user?.phone}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Displayuserinfo;
