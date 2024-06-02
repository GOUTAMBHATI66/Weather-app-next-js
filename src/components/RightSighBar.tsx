import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import BarForcastDesc from "./BarForcastDesc";
import { format, parseISO } from "date-fns";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";

interface arrayList {
  arrayList: any[];
}

export default function RightSideBar({ arrayList }: arrayList) {
  // Unique date from 3 hours time difference
  const uniqueDates = [
    ...new Set(
      arrayList.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
      )
    ),
  ];

  // filtering data to get the first entry after 6 am for each unique date
  let arrayOfFirstDataForEachDate = uniqueDates.map((date) => {
    return arrayList.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

  const arrayOfNext5Days = arrayOfFirstDataForEachDate.slice(1);

  return (
    <Sheet>
      <SheetTrigger>
        <RiBarChartHorizontalLine
          size={32}
          className="text-start p-1 hover:rounded-full hover:bg-[#b2bbca] sm:hidden "
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-slate-300">
        <SheetHeader>
          <SheetTitle className="border-b-2 py-4 whitespace-nowrap text-start">
            Upcoming Week (5 Days)
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            {arrayOfNext5Days.map((data, i) => (
              <BarForcastDesc
                key={i}
                day={format(parseISO(data?.dt_txt ?? ""), "EEEE")}
                weatherType={data?.weather[0].main}
                weatherIcon={data?.weather[0].icon}
                minTemp={kelvinToCelsius(data?.main.temp_min)}
                maxTemp={kelvinToCelsius(data?.main.temp_max)}
              />
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
