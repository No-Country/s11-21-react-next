import React, { useState, useEffect } from "react";

interface DropdownMenuProps {
  children: React.ReactNode;
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<DropdownMenuProps> = ({ children, user, setUser }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowMenu(true);
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
        className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-6 py-1 flex items-center group relative"
        onClick={showMenuHandler}
      >
        {children}
      </button>

      {showMenu ? (
        <ul className="menu absolute top-12 w-full bg-[#FD7B03] p-4 flex flex-col cursor-pointer">
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
            Tu Perfil
          </li>
          <li className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2">
            Configuración
          </li>
          <li
            className="hover:bg-[#FFCF91] hover:text-[#FD7B03] px-8 py-2"
            onClick={() => setUser(user)}
          >
            Cerrar sesión
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
