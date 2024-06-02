import React from "react";
import { SlMagnifier } from "react-icons/sl";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex h-full items-center border max-sm:w-[80%] rounded-full bg-slate-50"
    >
      <input
        value={props.value}
        onChange={props.onChange}
        className="px-4 py-2 w-5/6 h-full max-[450px]:text-sm max-[450px]:px-2 rounded-l-full outline-none "
        type="text"
        placeholder="search for place..."
      />
      <button
        type="submit"
        className=" flex justify-center items-center bg-gray-300 w-1/6 h-full border-l py-1 rounded-r-full hover:bg-gray-400 "
      >
        <SlMagnifier size={20} />
      </button>
    </form>
  );
}
