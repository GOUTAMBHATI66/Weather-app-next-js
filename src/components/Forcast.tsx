import React from "react";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";
import ForcastDesc from "./ForcastDesc";
import { format, parseISO } from "date-fns";

interface arrayList {
  arrayList: any[];
}

export default function Forcast({ arrayList }: arrayList) {
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
    <div className="flex flex-col gap-5 w-full h-full px-4 lg:px-10 py-2 ">
      <h1 className="text-xl font-sans font-semibold">
        Upcoming Week (5 Days)
      </h1>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 w-full">
        {arrayOfNext5Days.map((data, i) => (
          <ForcastDesc
            key={i}
            day={format(parseISO(data?.dt_txt ?? ""), "EEEE").slice(0, 3)}
            weatherType={data?.weather[0].main}
            weatherIcon={data?.weather[0].icon}
            minTemp={kelvinToCelsius(data?.main.temp_min)}
            maxTemp={kelvinToCelsius(data?.main.temp_max)}
          />
        ))}
      </div>
    </div>
  );
}
