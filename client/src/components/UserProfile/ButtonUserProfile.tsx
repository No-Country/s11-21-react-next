"use client"
import React, { useState, useContext, useEffect } from 'react';
import { Context } from './UserContext';



const ButtonUserProfile = () => {
    const { showIconEdit, setShowIconEdit, showInformation, setShowInformation, textButton, setTextButton } = useContext(Context);
    
    //console.log(showIconEdit);

    const handleButtonOnClick = () => {
        setTextButton("Guardar");
        setShowIconEdit("block");
        setShowInformation("hidden");
    }  

  return (
    <>
        <div className="w-screen px-8 mb-5">
            {
                showIconEdit === "hidden" ? 
            <button className="w-full h-[40px] bg-[#FD7B03]  text-white font-medium mt-5 rounded-md text-sm" 
            onClick={handleButtonOnClick}
            type="button">
                {textButton}
            </button>
            : 
            <button className="w-full h-[40px] bg-[#FD7B03]  text-white font-medium mt-5 rounded-md text-sm" 
            onClick={handleButtonOnClick}
            type="submit">
                {textButton}
            </button>
            }
        </div>

    </>
  )
}

export default ButtonUserProfile;
