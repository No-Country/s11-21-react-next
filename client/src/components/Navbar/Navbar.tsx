"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import Image from "next/image";
import { Krona_One } from "next/font/google";
import MenuH from "./MenuH";

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-[#FD7B03] w-full text-neutral-200 h-14 flex items-center justify-between p-6">
      {/* <Image src="/LOGO_NT-01 1.png" alt="logo" width={50} height={50} /> */}
      <h1 className={`${krona.className} text-[18px] text-white`}>
        NearByTour
      </h1>
      <MenuH />
      <div className="xl:absolute xl:-top-16">
        {!open ? (
          <GiHamburgerMenu size={25} color="white" onClick={openMenu} />
        ) : (
          <AiOutlineClose size={25} color="white" onClick={openMenu} />
        )}
      </div>
      <Menu open={open} />
    </nav>
  );
};

export default Navbar;
