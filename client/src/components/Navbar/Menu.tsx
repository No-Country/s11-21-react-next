import { getUser } from "@/services/apiCall";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";

interface MenuProps {
  open: boolean;
  user: string | null;
  setUser: () => void;
}

const Menu: React.FC<MenuProps> = ({ open, user, setUser }) => {
  const [usuario, setUsuario] = useState({
    userData: { id: "", name: "", email: "" },
  });
  const activo =
    "absolute top-14 w-full left-0 py-2 bg-[#FD7B03] z-10 transition-opacity duration-200";
  const inactivo =
    "absolute top-14 w-full left-0  py-2 bg-[#FD7B03] opacity-0 transition-opacity duration-200 -z-50";
  useEffect(() => {
    if (user !== null) {
      getUser(user).then((response) => setUsuario(response));
    }
  }, [user]);
  return (
    <div className={open ? activo : inactivo}>
      <ul className="flex flex-col mb-2 text-[14px] font-medium">
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] py-2 px-8">
          <Link href={"/"}>Inicio</Link>
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <Link href={"/searchresult"}>Búsqueda</Link>
        </li>
        <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
          <Link href={"/favorites"}>Favoritos</Link>
        </li>
        {user === null ? (
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
                  {usuario?.userData.name}
                </p>
                <p className="text-white text-xs font-normal">
                  {usuario?.userData.email}
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
            <li
              className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2"
              onClick={setUser}
            >
              Cerrar sesión
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
