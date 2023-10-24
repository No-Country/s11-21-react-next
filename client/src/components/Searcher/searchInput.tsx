import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export default function SearchInput() {
  return (
<<<<<<< HEAD
    <div className="relative flex justify-center items-center  m-auto -mt-6 w-3/5 max-md:w-80">
      <input
        type="text"
        className=" placeholder:text-[#637381] text-[#000000]  placeholder:font-extralight  text-sm shadow-lg shadow-zinc-300/50 outline-none px-4 w-full h-10 rounded-lg bg-[#FFF4E0]"
        placeholder="Buscar atracción..."
      />
      <FaSearchLocation className="absolute right-5 cursor-pointer opacity-90"></FaSearchLocation>
=======
    <div className="flex justify-center items-center -mt-6 w-4/5 md:w-4/5 lg:w-4/5 xl:w-[60vw]">
      <span className="flex flex-row justify-between items-center shadow-lg shadow-zinc-300/50 px-4 h-10 rounded-lg bg-[#FFF4E0] cursor-pointer w-full">
        <input
          type="text"
          className="placeholder:text-[#637381] text-[#000000]  placeholder:font-extralight text-sm bg-[#FFF4E0] outline-none"
          placeholder="Buscar atracción..."
        />
        <FaSearchLocation className="opacity-90"></FaSearchLocation>
      </span>
>>>>>>> 19423cc65c260c7bceb10e19a52d67127a46217f
    </div>
  );
}
