import React from "react";
import "./style.css";

const Solar = () => {
  return (
    <div className=" bg sticky top-0 right-0 z-[-10] h-full ">
      <div>
        <div className="sun" />
        <div className="mercury-outline">
          <div className="mercury"></div>
        </div>
        <div className="venus-outline-1">
          <div className="venus"></div>
        </div>
        <div className="earth-outline-1">
          <div className="earth">
            <div className="earth-circle">
              <div className="earth-inner" />
            </div>
          </div>
        </div>
        <div className="mars-outline-1">
          <div className="mars"></div>
        </div>
        <div className="jupiter-outline-1">
          <div className="jupiter"></div>
        </div>
        <div className="saturn-outline-1">
          <div className="saturn"></div>
        </div>
        <div className="uranus-outline-1">
          <div className="uranus"></div>
        </div>
        <div className="neptune-outline-1">
          <div className="neptune"></div>
        </div>
      </div>
    </div>
  );
};

export default Solar;
