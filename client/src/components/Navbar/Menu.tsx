import Link from "next/link";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  const user = false;
  const activo =
    "absolute top-14 w-full left-0 py-2 bg-[#FD7B03] z-10 transition-opacity duration-200";
  const inactivo =
    "absolute top-14 w-full left-0  py-2 bg-[#FD7B03] opacity-0 transition-opacity duration-200 -z-50";
  return (
    <div className={open ? activo : inactivo}>
      <ul className="flex flex-col mb-2 text-[14px] font-medium">
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
          <>
            <hr className="w-[90%] mx-auto" />
            <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2 flex relative items-center">
              <p className="bg-[#FFCF91] w-8 h-8 flex items-center justify-center rounded-full text-[#fff]">
                A
              </p>
              <span className="text-sm pl-2">
                <p className="text-white text-sm font-medium">
                  Angelica Martinez
                </p>
                <p className="text-white text-xs font-normal">
                  angeMar@gmail.com
                </p>
              </span>
              <div className="absolute right-6">
                <AiOutlineBell size={30} />
              </div>
            </li>
            <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
              Tu Perfil
            </li>
            <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
              Configuración
            </li>
            <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
              Cerrar sesión
            </li>
          </>
        )}
      </ul>
      <hr className="w-[90%] mx-auto" />
      <ul className="flex flex-col text-[14px] font-medium">
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <select className="bg-[#FD7B03] py-2 w-full rounded-md text-white">
            <option>Español</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
