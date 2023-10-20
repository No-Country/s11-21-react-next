import Link from "next/link";
import React from "react";

const MenuH = () => {
  return (
    <div className="absolute -top-20 xl:relative xl:top-0">
      <ul className="flex mb-2 text-[14px] font-medium items-center">
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] py-2 px-8">
          Inicio
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          Búsqueda
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          Favoritos
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <Link href={"/login"}>Iniciar sesión</Link>
        </li>
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
