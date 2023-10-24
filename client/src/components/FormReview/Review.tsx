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
    <div className='m-auto w-4/5 h-auto py-8 text-[#000] border-t-2 border-[#FFCF91]'>
      <h1 className='font-semibold'>¿Te gustaría dar tu opinión del lugar?</h1>
      <h2 className=' font-semibold text-sm'>¿Cómo fue tu experiencia?</h2>
      <span className='flex my-1'>
      {hoveredStars.map((isHovered, index) => (
        <RiStarSFill
          className={`text-${isHovered ? '[#FD7B03]' : '[#FFCF91]'} hover:text-[#FD7B03] text-lg`}
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(-1)}
        />
      ))}
      </span>
      <p className='font-semibold'>Escribe tu opinión</p>
      <textarea className=' border-2 border-[#777] p-4 w-full h-32 rounded-lg my-2  max-h-60' ></textarea>
      <button className='bg-[#FD7B03] flex text-center justify-center items-center w-80 h-12 rounded-lg text-[#fff] font-semibold m-auto max-md:w-full'>Enviar opinión</button>
    </div>
  )
}
