"use client"
import Link from "next/link";
import { useState } from "react";
import OpinionCard from "../OpinionCard/OpinionCard";
import TouristPlaceCard from "../TouristPlaceCard/TouristPlaceCard";

const SelectUserProfile = () => {
    const [showLine1, setShowLine1] = useState<string>("hidden");
    const [textColor1, setTextColor1] = useState<string>("black");
    const [showLine2, setShowLine2] = useState<string>("hidden");
    const [textColor2, setTextColor2] = useState<string>("black");


    const handleSelectOnClick1 = () => {
        setTextColor1("#FD7B03");
        setShowLine1("block");
        setTextColor2("black");
        setShowLine2("hidden");
    }

    const handleSelectOnClick2 = () => {
        setTextColor2("#FD7B03");
        setShowLine2("block");
        setTextColor1("black");
        setShowLine1("hidden");
    }
  return (
    <>
        <div className="w-screen">
            <div className="w-full flex justify-between px-8">
                <div className="w-1/2 text-center">
                    <Link href={"#"}>
                        <p className={`text-xs text-[${textColor1}] mb-2`} onClick={handleSelectOnClick1}>Tus opiniones (1)</p>   
                    </Link>
                    
                    <div className="px-4"><div className={`${showLine1} w-full bg-[#FD7B03] h-[3px]`}></div></div>
                </div>

                <div className="w-1/2 text-center relative">
                    <Link href={"#"}>
                        <p className={`text-xs text-[${textColor2}] mb-2`} onClick={handleSelectOnClick2}>Tus lugares añadidos (1)</p>
                    </Link>

                    <div className="px-4"><div className={`${showLine2} w-full bg-[#FD7B03] h-[3px]`}></div></div>
                </div>
            </div>

            <div className={`w-screen pr-8 ${showLine1}`}>
                <OpinionCard /> {/* Muestro esto hasta que este conectado al Backend  */}
            </div>

            <div className={`${showLine2} mt-7`}>       
                <TouristPlaceCard /> {/* Muestro esto hasta que este conectado al Backend  */}      
            </div>
        </div>
    </>
  )
}

export default SelectUserProfile