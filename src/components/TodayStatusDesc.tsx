import React from "react";

export interface information {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function TodayStatusDesc(props: information) {
  return (
    <div className="h-[140px] p-4 flex flex-col items-center gap-2 bg-gray-200 rounded-2xl">
      <h1 className=" text-sm text-gray-700">{props.title}</h1>
      <div className="text-5xl opacity-70">{props.icon}</div>

      <p className="text-xl font-semibold text-slate-700">{props.value}</p>
    </div>
  );
}
