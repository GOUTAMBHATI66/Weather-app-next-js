import React from "react";

export interface information {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export default function BarTodayDesc({ icon, title, value }: information) {
  return (
    <div className="w-full h-12 rounded-md bg-slate-400/60 px-10 max-[500px]:px-5 max-[400px]:px-2 py-2 flex justify-between items-center gap-4">
      <h1 className=" text-xl max-[550px]:text-lg max-[450px]:text-sm text-black text-start">
        {title}
      </h1>

      <div className="text-3xl max-[450px]:text-2xl">{icon}</div>
      <p className=" text-xl max-[550px]:text-lg max-[450px]:text-sm text-start font-semibold text-black">
        {value}
      </p>
    </div>
  );
}
