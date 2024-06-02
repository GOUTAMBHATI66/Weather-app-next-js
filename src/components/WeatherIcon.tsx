import React from "react";
import Image from "next/image";

interface props {
  iconName: string;
}

const WeatherIcon: React.FC<props> = ({ iconName }) => {
  return (
    <div className=" w-[180px] h-[170px] overflow-hidden">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover"
        src={`/${iconName}`}
        alt="weather-icon"
      />
    </div>
  );
};

export default WeatherIcon;
