import React from "react";
import ForcastWeatherIcon from "./ForcastWeatherIcon";
import { HiMiniArrowSmallDown, HiMiniArrowSmallUp } from "react-icons/hi2";

interface forcastDesc {
  day: string;
  weatherType: string;
  weatherIcon: string;
  minTemp: number;
  maxTemp: number;
}

function BarForcastDesc({
  day,
  weatherIcon,
  weatherType,
  minTemp,
  maxTemp,
}: forcastDesc) {
  return (
    <div className="w-full h-20 rounded-md bg-slate-400/60 px-10 max-[500px]:px-5 max-[400px]:px-2 py-2 flex justify-between gap-4">
      <div className="flex flex-col gap-2 text-black">
        <h1>{day}</h1>
        <span>({weatherType})</span>
      </div>
      <ForcastWeatherIcon iconName={weatherIcon} />

      <div className="flex flex-col gap-2  text-black ">
        <span className="whitespace-nowrap relative">
          {" "}
          <HiMiniArrowSmallUp size={24} className=" inline-block" />
          {maxTemp}&#x2103;
        </span>
        <span className="whitespace-nowrap relative">
          {minTemp}&#x2103;
          <HiMiniArrowSmallDown size={24} className=" inline-block" />{" "}
        </span>
      </div>
    </div>
  );
}

export default BarForcastDesc;
