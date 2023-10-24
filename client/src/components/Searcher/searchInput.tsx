import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className="flex justify-center items-center -mt-6 w-4/5 md:w-4/5 lg:w-4/5 xl:w-[60vw]">
      <span className="flex flex-row justify-between items-center shadow-lg shadow-zinc-300/50 px-4 h-10 rounded-lg bg-[#FFF4E0] cursor-pointer w-full">
        <input
          type="text"
          className="placeholder:text-[#637381] text-[#000000]  placeholder:font-extralight text-sm bg-[#FFF4E0] outline-none"
          placeholder="Buscar atracción..."
        />
        <FaSearchLocation className="opacity-90"></FaSearchLocation>
      </span>
    </div>
  );
}
