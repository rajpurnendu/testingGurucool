import React from "react";

const Star = ({ filled, onClick }: { filled: boolean; onClick: any }) => {
  return (
    <div className="mx-[5px]">
      <svg
        onClick={onClick}
        width="50px"
        height="50px"
        viewBox="0 0 60 57"
        cursor="pointer"
        fill={filled ? "#FFD700" : "#D9D9D9"}
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 1.72253L36.4844 21.6795L36.5967 22.025H36.9599H57.9439L40.9675 34.359L40.6736 34.5726L40.7859 34.9181L47.2703 54.875L30.2939 42.5409L30 42.3274L29.7061 42.5409L12.7297 54.875L19.2141 34.9181L19.3264 34.5726L19.0325 34.359L2.05609 22.025H23.0401H23.4033L23.5156 21.6795L30 1.72253Z" />
      </svg>
    </div>
  );
};

export default Star;
