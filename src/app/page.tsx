"use client";

import Forcast from "@/components/Forcast";
import TodayStatus from "@/components/TodayStatus";
import axios from "axios";
import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import { useQuery } from "react-query";

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

export default function Home() {
  // const { isLoading, error, data } = useQuery<WeatherResponse>(
  //   "repodata",
  //   async () => {
  //     // const { data } = await axios.get(
  //     //   `https://api.openweathermap.org/data/2.5/forecast?q=jaipur&appid=${process.env.NEXT_WEATHER_APP_API_KEY}&cnt=7`
  //     // );
  //     // return data;
  //   }
  // );

  // if (error) return "Error" + error;

  console.log(process.env.NEXT_WEATHER_API_KEY);
  // console.log(data);

  return (
    <div className="bg-[#f5f5f5] h-screen xl:px-20 lg:px-16 md:px-9 px-6 py-2">
      <div className="border rounded-3xl flex gap-5 h-full mx-auto">
        <aside className="flex flex-col items-center gap-5 md:w-[270px] lg:w-[350px] xl:w-[400px] h-full bg-slate-200 rounded-l-3xl px-4 lg:px-8 py-5">
          {/* search functionality */}
          <div className="flex h-9 items-center border rounded-full  bg-slate-50">
            <input
              className="px-2 lg:px-4 w-5/6 h-full rounded-l-full outline-none "
              type="text"
              placeholder="search for place..."
            />
            <button
              type="submit"
              className=" flex justify-center items-center bg-gray-300 w-1/6 h-full border-l py-1 rounded-r-full hover:bg-gray-400 "
            >
              <SlMagnifier size={20} />
            </button>
          </div>

          {/* image */}
          <div className="w-[230px] min-h-[200px] overflow-hidden ">
            <img
              src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png"
              className="w-full h-full block "
            />
          </div>

          {/* today's temp */}
          <div className="flex flex-col items-center gap-2 border-b-2 w-full pb-2 border-gray-400 ">
            <div className="flex w-full justify-center gap-5 items-center text-4xl">
              <h1>Jaipur</h1>
              <h1>12*C</h1>
            </div>
            <h2 className="text-xl">
              Friday,
              <span className="text-gray-400"> 16:00</span>
            </h2>
          </div>

          {/* today's temp history and pridiction */}
          <div className=" border border-red-700 w-full overflow-y-scroll main-scrollbar flex flex-col items-center">
            <ul className=" flex flex-col gap-2 w-3/4 ">
              <li className="flex justify-between">
                <span>09:00</span>
                <span>30*C</span>
              </li>
              <li className="flex justify-between">
                <span>11:00</span>
                <span>35*C</span>
              </li>
              <li className="flex justify-between">
                <span>13:00</span>
                <span>39*C</span>
              </li>
              <li className="flex justify-between">
                <span>15:00</span>
                <span>44*C</span>
              </li>
              <li className="flex justify-between">
                <span>17:00</span>
                <span>42*C</span>
              </li>
              <li className="flex justify-between">
                <span>19:00</span>
                <span>40*C</span>
              </li>
              <li className="flex justify-between">
                <span>21:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>

              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
              <li className="flex justify-between">
                <span>23:00</span>
                <span>38*C</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* right side bar today's highlights and forcast */}
        <aside className="w-full h-full flex flex-col gap-4">
          <TodayStatus />
          <Forcast />
        </aside>
      </div>
    </div>
  );
}
