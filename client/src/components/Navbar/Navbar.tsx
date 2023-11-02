"use client";
import React, { useState, useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import { Krona_One } from "next/font/google";
import MenuH from "./MenuH";
import Link from "next/link";
import { Context } from "@/context/Context";

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [userLoged, setUserLoged] = useState<string | null>("");
  const contexto = useContext(Context);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userId");
    setUserLoged(user);
  }, []);

  const openMenu = () => {
    setOpen(!open);
  };
  const toggleUser = () => {
    setUserLoged(null);
    localStorage.removeItem("userId");
    setOpen(false);
  };
  return (
    <nav className="bg-[#FD7B03] w-full text-neutral-200 h-14 flex items-center justify-between p-6">
      <h1 className={`${krona.className} text-[18px] text-white`}>
        <Link href={"/home"}>NearByTour</Link>
      </h1>
      <MenuH user={userLoged} setUser={toggleUser} />
      <div className="xl:absolute xl:-top-16">
        {!open ? (
          <GiHamburgerMenu size={25} color="white" onClick={openMenu} />
        ) : (
          <AiOutlineClose size={25} color="white" onClick={openMenu} />
        )}
      </div>
      <Menu open={open} user={userLoged} setUser={toggleUser} />
    </nav>
  );
};

export default Navbar;
