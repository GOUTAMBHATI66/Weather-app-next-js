import React from "react";
import ForcastDesc from "./ForcastDesc";

type Props = {};

export default function Forcast({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full h-full px-4 lg:px-10 py-2 border border-green-600">
      <h1 className="text-xl font-sans font-semibold">Upcoming Week</h1>
      <div className=" w-full border border-yellow-400 flex gap-2">
        <ForcastDesc />
        <ForcastDesc />
        <ForcastDesc />
        <ForcastDesc />
        <ForcastDesc />
      </div>
    </div>
  );
}
