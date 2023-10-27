import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface DropdownMenuProps {
  children: React.ReactNode;
  user: string | null;
  setUser: () => void;
}

const DropDown: React.FC<DropdownMenuProps> = ({ children, user, setUser }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useRouter();
  const showMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowMenu(true);
  };
  const handleSession = () => {
    setUser();
    navigate.push("/");
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", closeMenuHandler);
    } else {
      document.removeEventListener("click", closeMenuHandler);
    }

    // Limpia el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("click", closeMenuHandler);
    };
  }, [showMenu]);

  return (
    <div className="relative">
      <button
        className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-10 py-1 flex items-center group relative gap-2"
        onClick={showMenuHandler}
      >
        {children}
      </button>

      {showMenu ? (
        <ul className="menu absolute top-12 w-full bg-[#FD7B03] p-4 flex flex-col cursor-pointer">
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-4 py-2">
            Tu Perfil
          </li>
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-4 py-2">
            Configuración
          </li>
          <li
            className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-4 py-2"
            onClick={handleSession}
          >
            Cerrar sesión
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
