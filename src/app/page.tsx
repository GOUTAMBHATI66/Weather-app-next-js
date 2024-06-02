"use client";

import React, { useEffect, useState } from "react";
import Forcast from "@/components/Forcast";
import TodayStatus from "@/components/TodayStatus";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";
import axios from "axios";
import { format, fromUnixTime, parseISO } from "date-fns";
import { useQuery } from "react-query";
import { meterToKm } from "@/utils/meterToKm";
import { convertWindSpeed } from "@/utils/convertWindSpeed";
import WeatherIcon from "@/components/WeatherIcon";
import { MakeImageFromIcon } from "@/utils/MakeImageFromIcon";
import SearchBox from "@/components/SearchBox";
import RightSideBar from "@/components/RightSighBar";

interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: CityInfo;
}

interface WeatherEntry {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

// export interface Data {
//   arrayList: string[];
// }

export default function Home() {
  const [place, setPlace] = useState("");
  const [city, setCity] = useState(place);

  function handleOnChange(value: string) {
    setCity(value);
  }

  function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPlace(city);
    // console.log(city);
    setCity("");
  }

  const { isLoading, error, data, refetch } = useQuery<WeatherResponse>(
    "repodata",
    async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          place ? place : "Jaipur"
        }&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&cnt=60`
      );

      return data;
    }
  );

  useEffect(() => {
    refetch();
  }, [place, refetch]);

  // console.log(data);

  if (isLoading || !data || !data.list || data.list.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className=" animate-bounce">Loading...</p>
      </div>
    );
  }

  const firstData = data?.list[0];
  const currDate = new Date();

  return (
    <div className="bg-[#f5f5f5] w-full min-h-screen xl:px-20 lg:px-16 md:px-9 px-6 py-2">
      <div className="border rounded-3xl flex gap-5 h-full mx-auto w-full overflow-hidden">
        {/* side bar */}
        <section className="flex flex-col items-center gap-5 max-sm:w-full w-[400px] xl:w-[500px] lg:h-screen bg-slate-200 rounded-l-3xl px-4 lg:px-8 py-5 ">
          {/* search functionality */}
          <div className="flex items-center gap-5 w-full max-sm:h-16 h-9 ">
            <RightSideBar arrayList={data?.list} />
            <SearchBox
              value={city}
              onChange={(e) => handleOnChange(e.target.value)}
              onSubmit={handleSubmitSearch}
            />
          </div>

          {/* weather icon */}
          <WeatherIcon
            iconName={MakeImageFromIcon(firstData?.weather[0].main ?? "")}
          />

          {/* today's temp */}
          <div className="flex flex-col items-center gap-2 border-b-2 w-full pb-2 border-gray-400 ">
            <div className="flex w-full justify-center gap-5 items-center text-4xl">
              <h1>{data?.city.name}</h1>
              <h1>
                {" "}
                {kelvinToCelsius(firstData?.main?.temp ?? 0)}
                <span className=" font-sans">&#x2103;</span>
              </h1>
            </div>
            <h2 className="text-xl">
              <span>{format(parseISO(firstData?.dt_txt ?? ""), "EEEE")} </span>
              <span className="text-gray-400 pl-2">
                {" "}
                {format(currDate, "hh:mm a")}
              </span>
            </h2>
          </div>

          {/* today's temp history and pridiction */}
          <div className=" border w-full h-full sm:h-[520px] overflow-y-scroll main-scrollbar flex flex-col items-center bg-slate-400/70 rounded-3xl ">
            <ul className=" flex flex-col gap-2 w-3/4 py-4">
              {data?.list.slice(0, 10).map((d, i) => (
                <li
                  key={i}
                  className="flex justify-around sm:justify-between  border-b-2 border-gray-300 py-2"
                >
                  <span>{format(parseISO(d.dt_txt ?? ""), "hh.mm a")}</span>
                  <span>
                    {kelvinToCelsius(d.main?.temp ?? 0)}{" "}
                    <span className=" font-sans">&#x2103;</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* right side bar today's highlights and forcast */}
        <section className="hidden sm:flex w-full h-full flex-col gap-4 overflow-hidden ">
          <TodayStatus
            visibility={meterToKm(firstData?.visibility ?? 10000)}
            airPressure={`${firstData?.main.pressure} hPa`}
            humidity={`${firstData?.main.humidity}%`}
            windSpeed={convertWindSpeed(firstData?.wind.speed ?? 3.97)}
            sunrise={format(
              fromUnixTime(data?.city.sunrise ?? 1717199622),
              "hh:mm"
            )}
            sunset={format(
              fromUnixTime(data?.city.sunset ?? 1717249477),
              "hh:mm"
            )}
          />

          <Forcast arrayList={data?.list} />
        </section>
      </div>
    </div>
  );
}
