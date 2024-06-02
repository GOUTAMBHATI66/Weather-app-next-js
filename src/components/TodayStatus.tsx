import React from "react";
import TodayStatusDesc from "./TodayStatusDesc";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { ImMeter } from "react-icons/im";
import { MdAir } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";

export interface WeatherDetails {
  windSpeed: string;
  humidity: string;
  visibility: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function TodayStatus(props: WeatherDetails) {
  return (
    <div className="flex flex-col gap-5 w-full h-full px-4 lg:px-10 py-5">
      <h1 className="text-xl font-sans font-semibold">
        Today&apos;s Highlights
      </h1>
      <div className=" grid grid-cols-2 min-[800px]:grid-cols-3 gap-x-4 gap-y-2">
        <TodayStatusDesc
          icon={<LuEye />}
          title="Visibility"
          value={props.visibility}
        />
        <TodayStatusDesc
          icon={<FiDroplet />}
          title="Humidity"
          value={props.humidity}
        />
        <TodayStatusDesc
          icon={<MdAir />}
          title="Wind speed"
          value={props.windSpeed}
        />
        <TodayStatusDesc
          icon={<ImMeter />}
          title="Air Pressure"
          value={props.airPressure}
        />
        <TodayStatusDesc
          icon={<LuSunrise />}
          title="Sunrise"
          value={props.sunrise}
        />
        <TodayStatusDesc
          icon={<LuSunset />}
          title="Sunset"
          value={props.sunset}
        />
      </div>
    </div>
  );
}
