"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropDown from "../DropdownMenu";
import { getUser } from "@/services/apiCall";

interface MenuHProps {
  user: string | null;
  setUser: () => void;
}

const MenuH: React.FC<MenuHProps> = ({ user, setUser }) => {
  const [usuario, setUsuario] = useState({
    userData: { id: "", name: "", email: "" },
  });

  useEffect(() => {
    if (user !== null) {
      getUser(user).then((response) => setUsuario(response));
    } else {
      setUsuario({
        userData: { id: "", name: "", email: "" },
      });
    }
  }, [user]);
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
          <Link href={"/favorites"}>Favoritos</Link>
        </li>
        {usuario === null ? (
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
            <Link href={"/login"}>Iniciar sesión</Link>
          </li>
        ) : (
          <li>
            <DropDown user={user} setUser={setUser}>
              <>
                <p className="bg-[#FFCF91] w-8 h-8 flex items-center justify-center rounded-full text-[#fff]">
                  {usuario.userData.name.slice(0, 1)}
                </p>
                <span className="text-sm pl-2 hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
                  <p className="text-white text-sm font-medium hover:bg-[#FFCF91] group-hover:text-[#FD7B03]">
                    {usuario.userData.name}
                  </p>
                </span>
              </>
            </DropDown>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuH;
