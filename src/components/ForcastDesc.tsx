import React from "react";
import ForcastWeatherIcon from "./ForcastWeatherIcon";
import { HiMiniArrowSmallUp, HiMiniArrowSmallDown } from "react-icons/hi2";

interface forcastDesc {
  day: string;
  weatherType: string;
  weatherIcon: string;
  minTemp: number;
  maxTemp: number;
}

const ForcastDesc = ({
  day,
  weatherIcon,
  weatherType,
  minTemp,
  maxTemp,
}: forcastDesc) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-w-[140px] bg-blue-100 rounded-lg p-2 ">
      <h1>
        {day} <span> ({weatherType})</span>
      </h1>
      {/* <WeatherIcon /> */}
      <ForcastWeatherIcon iconName={weatherIcon} />
      <div className="flex gap-2">
        <span className="whitespace-nowrap relative">
          {" "}
          <HiMiniArrowSmallUp
            size={24}
            className=" inline-block absolute right-8 "
          />{" "}
          {maxTemp}
          &#x2103;
        </span>
        <span className="text-gray-400 whitespace-nowrap relative">
          {minTemp}&#x2103;{" "}
          <HiMiniArrowSmallDown
            size={24}
            className=" inline-block absolute left-8"
          />{" "}
        </span>
      </div>
    </div>
  );
};

export default ForcastDesc;
