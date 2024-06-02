import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars3BottomRight } from "react-icons/hi2";
import BarTodayDesc from "./BarTodayDesc";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetails {
  windSpeed: string;
  humidity: string;
  visibility: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export default function RightBar({
  windSpeed,
  humidity,
  visibility,
  airPressure,
  sunrise,
  sunset,
}: WeatherDetails) {
  return (
    <Sheet>
      <SheetTrigger>
        <HiBars3BottomRight
          size={36}
          className="text-start p-1 hover:rounded-full hover:bg-[#b2bbca] sm:hidden "
        />
      </SheetTrigger>
      <SheetContent side={"right"} className="bg-slate-300">
        <SheetHeader>
          <SheetTitle className="border-b-2 py-4 whitespace-nowrap text-start">
            {"Today's Highlights"}
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            <BarTodayDesc
              icon={<LuEye />}
              title="Visibility"
              value={visibility}
            />
            <BarTodayDesc
              icon={<FiDroplet />}
              title="Humidity"
              value={humidity}
            />
            <BarTodayDesc
              icon={<MdAir />}
              title="Wind speed"
              value={windSpeed}
            />
            <BarTodayDesc
              icon={<ImMeter />}
              title="Air Pressure"
              value={airPressure}
            />
            <BarTodayDesc
              icon={<LuSunrise />}
              title="Sunrise"
              value={sunrise}
            />
            <BarTodayDesc icon={<LuSunset />} title="Sunset" value={sunset} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
