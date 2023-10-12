"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-[#FD7B03] w-screen text-neutral-200 h-14 flex items-center justify-between p-6">
      <Image src="/LOGO_NT-01 1.png" alt="logo" width={50} height={50} />
      {!open ? (
        <GiHamburgerMenu size={25} color="white" onClick={openMenu} />
      ) : (
        <AiOutlineClose size={25} color="white" onClick={openMenu} />
      )}
      <Menu open={open} />
    </nav>
  );
};

export default Navbar;
