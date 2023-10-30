"use client"
import React, { useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { RiStarSFill } from 'react-icons/ri'


export default function Review() {
  const renderStars = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      stars.push(<RiStarSFill className="text-[#FFCF91] text-lg" key={i} />);
    }
    return stars;
  };

  
  const [hoveredStars, setHoveredStars] = useState(Array(5).fill(false));
  const handleHover = (index:number) => {
    const newHoveredStars = [...hoveredStars];
    for (let i = 0; i < newHoveredStars.length; i++) {
      newHoveredStars[i] = i <= index;
    }
    setHoveredStars(newHoveredStars);
  };

  return (
    <div className='m-auto w-80 rounded-lg h-auto px-5 py-10 bg-[#FFF4E0]'>
      <h1 className='text-[#FD7B03] font-semibold text-center mb-8'>Nombre del lugar</h1>
      <div className="flex items-center gap-2">
        <p className='bg-[#FD7B03] w-8 h-8 flex items-center justify-center rounded-full text-[#fff]'>A</p>
        <span className='text-sm'>
          <p className='text-[#000] font-semibold'>Angelica Martinez</p>
          <p className='text-[#777]'>Este contenido será publico</p>
        </span>
      </div>
      <span className='flex justify-center mt-6'>
      {hoveredStars.map((isHovered, index) => (
        <RiStarSFill
          className={`text-${isHovered ? '[#FD7B03]' : '[#FFCF91]'} hover:text-[#FD7B03] text-lg`}
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(-1)}
        />
      ))}
       </span>
      <div className="">
        <p className='text-[#000] my-4 text-sm  font-semibold flex justify-between'>Ubicación <span className='flex'>{renderStars()}</span></p>
        <p className='text-[#000] my-4 text-sm font-semibold flex justify-between'>Servicio <span className='flex'>{renderStars()}</span></p>
        <p className='text-[#000] my-4 text-sm font-semibold flex justify-between'>Ambiente <span className='flex'>{renderStars()}</span></p>
      </div>
      <p className='text-[#FD7B03] text-sm mt-8 font-semibold'>Cuéntanos más sobre tu experiencia:</p>
      <textarea className='p-4 w-full h-32 rounded-lg mt-2  max-h-60' ></textarea>
      <div className="flex flex-col items-center my-4">
        <AiOutlineDownload className="text-4xl text-[#777] cursor-pointer hover:scale-105 transition-all duration-300"></AiOutlineDownload>
        <p className='text-sm text-[#FFCF91] font-semibold'>Añadir fotos</p>
      </div>
      <div className="flex justify-around">
        <button className='bg-[#FD7B03] w-32 h-10 hover:scale-110 transition-all duration-300 rounded-lg text-[#fff]'>Cancelar</button>
        <button className='bg-[#FFCF91] w-32 h-10 hover:scale-110 transition-all duration-300 rounded-lg text-[#FD7B03] font-normal border-2 border-[#FD7B03]'>Publicar</button>
      </div>
    </div>
  )
}
