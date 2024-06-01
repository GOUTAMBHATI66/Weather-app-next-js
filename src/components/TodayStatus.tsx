import React from "react";
import TodayStatusDesc from "./TodayStatusDesc";

type Props = {};

export default function TodayStatus({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full h-full px-4 lg:px-10 py-5 border border-red-600">
      <h1 className="text-xl font-sans font-semibold">Today's Highlights</h1>
      <div className=" grid grid-cols-3 gap-x-4 gap-y-2 ">
        <TodayStatusDesc />
        <TodayStatusDesc />
        <TodayStatusDesc />
        <TodayStatusDesc />
        <TodayStatusDesc />
        <TodayStatusDesc />
      </div>
    </div>
  );
}
