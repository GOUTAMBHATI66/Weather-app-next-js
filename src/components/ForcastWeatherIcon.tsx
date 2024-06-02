import React from "react";
import Image from "next/image";

interface props {
  iconName: string;
}

const ForcastWeatherIcon: React.FC<props> = ({ iconName }) => {
  return (
    <div className=" w-[70px] h-[60px] overflow-hidden ">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover"
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
        alt="weather-icon"
      />
    </div>
  );
};

export default ForcastWeatherIcon;
