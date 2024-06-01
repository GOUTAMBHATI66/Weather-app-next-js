import React from "react";

type Props = {};

const ForcastDesc = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-w-[140px] bg-blue-100 rounded-lg p-2 ">
      <h1>
        Sat <span> (Clouds)</span>
      </h1>
      <div className="w-[50px] h-[50px] overflow-hidden">
        <img
          src="https://lordicon.com/icons/wired/lineal/812-wind.svg"
          className="block w-full h-full"
        />
      </div>
      <p>
        45*C <span className="text-gray-400"> 32*C</span>
      </p>
    </div>
  );
};

export default ForcastDesc;
