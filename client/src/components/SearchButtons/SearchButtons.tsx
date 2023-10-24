import React from "react";
import { TiTree } from "react-icons/ti";
import { CgMenuHotdog } from "react-icons/cg";
import { BiPaint } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";

export const SearchButtons = () => {
  return (
    <div className="flex flex-row justify-center md:flex md:justify-between text-xs  md:text-lg lg:text-xl mb-10 sm:w-[75vw] xl:w-[60vw]">
      <button className="flex flex-row text-black hover:text-[#FD7B03] font-semibold p-1 text-center">
        <TiTree className="text-lg md:text-2xl" />
        <span className="ml-1">Parques</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] font-semibold p-1 justify-center items-center">
        <CgMenuHotdog className="text-lg md:text-2xl" />
        <span className="ml-1">Comidas</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] font-semibold p-1 justify-center items-center">
        <BiPaint className="text-lg md:text-2xl" />
        <span className="ml-1">Cultura</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] font-semibold p-1">
        <FaTheaterMasks className="text-lg md:text-2xl" />
        <span className="ml-1">Entretenimiento</span>
      </button>
    </div>
  );
};
