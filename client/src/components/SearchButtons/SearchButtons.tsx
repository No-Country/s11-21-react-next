import React from "react";
import { TiTree } from "react-icons/ti";
import { CgMenuHotdog } from "react-icons/cg";
import { BsBrush } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";

export const SearchButtons = () => {
  return (
    <div className="relative flex  m-auto my-10">
      <button className="flex flex-row text-black hover:text-[#FD7B03] text-xs font-semibold p-1">
        <TiTree className="text-base" />
        <span className="ml-1">Parques</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] text-xs font-semibold p-1">
        <CgMenuHotdog className="text-base" />
        <span className="ml-1">Comidas</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] text-xs font-semibold p-1">
        <BsBrush className="text-base" />
        <span className="ml-1">Cultura</span>
      </button>
      <button className="flex flex-row text-black hover:text-[#FD7B03] text-xs font-semibold p-1">
        <FaTheaterMasks className="text-base" />
        <span className="ml-1">Entretenimiento</span>
      </button>
    </div>
  );
};
