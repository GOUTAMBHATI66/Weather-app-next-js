import React from "react";

type Props = {};

function TodayStatusDesc({}: Props) {
  return (
    <div className="xl:w-[230px] h-[140px] p-4 flex flex-col items-center gap-2 bg-gray-200 rounded-2xl">
      <h1 className=" text-sm text-gray-700">Wind Speed</h1>
      <div className="w-[50px] h-[50px] overflow-hidden">
        <img
          src="https://lordicon.com/icons/wired/lineal/812-wind.svg"
          className="w-full h-full block"
        />
      </div>
      <p className="text-xl font-semibold text-slate-700">15 km/h</p>
    </div>
  );
}

export default TodayStatusDesc;
