import React from "react";

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
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
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          Iniciar sesión
        </li>
      </ul>
      <hr />
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
