import React from 'react'
import { FaSearchLocation } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className='relative flex justify-center items-center  m-auto -mt-6  w-80'>
        <input type="text" className=' placeholder:text-[#637381] text-[#000000]  placeholder:font-extralight  text-sm shadow-lg shadow-zinc-300/50 outline-none px-4 w-full h-10 rounded-lg bg-[#FFF4E0]' placeholder='Buscar atracción...'/>
        <FaSearchLocation className="absolute right-5 cursor-pointer opacity-90"></FaSearchLocation>
    </div>
  )
}
