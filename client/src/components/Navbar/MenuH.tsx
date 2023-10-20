"use client";
import Link from "next/link";
import React, { useState } from "react";
import DropDown from "../DropdownMenu";

interface MenuHProps {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuH: React.FC<MenuHProps> = ({ user, setUser }) => {
  return (
    <div className="absolute -top-20 xl:relative xl:top-0">
      <ul className="flex mb-2 text-[14px] font-medium items-center">
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] py-2 px-8">
          <Link href={"/home"}>Inicio</Link>
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <Link href={"/searchresult"}>Búsqueda</Link>
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          Favoritos
        </li>
        {user ? (
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
            <Link href={"/login"}>Iniciar sesión</Link>
          </li>
        ) : (
          <li>
            <DropDown user={user} setUser={setUser}>
              <>
                <p className="bg-[#FFCF91] w-8 h-8 flex items-center justify-center rounded-full text-[#fff]">
                  A
                </p>
                <span className="text-sm pl-2 hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
                  <p className="text-white text-sm font-medium hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
                    Angelica Martinez
                  </p>
                </span>
              </>
            </DropDown>
          </li>
        )}
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <select className="bg-[#FD7B03] w-full rounded-md text-white outline-none">
            <option className="hover:bg-[#FFCF91]">Español</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default MenuH;
