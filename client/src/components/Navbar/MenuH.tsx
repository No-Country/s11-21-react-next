import Link from "next/link";
import React from "react";

const MenuH = () => {
  const user = false;
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
        {user ? (
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
            <Link href={"/login"}>Iniciar sesión</Link>
          </li>
        ) : (
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-6 py-1 flex items-center group">
            <p className="bg-[#FFCF91] w-8 h-8 flex items-center justify-center rounded-full text-[#fff]">
              A
            </p>
            <span className="text-sm pl-2 hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
              <p className="text-white text-sm font-medium hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
                Angelica Martinez
              </p>
            </span>
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
