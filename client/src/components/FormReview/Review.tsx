"use client";
import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";

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
  const handleHover = (index: number) => {
    const newHoveredStars = [...hoveredStars];
    for (let i = 0; i < newHoveredStars.length; i++) {
      newHoveredStars[i] = i <= index;
    }
    setHoveredStars(newHoveredStars);
  };

  return (
    <div className="w-11/12 2xl:w-[60vw] h-auto px-6 text-[#000]  justify-center">
      <div className="w-full px-2 border-t-2 border-[#FFCF91] py-8">
        <h1 className="font-semibold text-sm lg:text-base">
          ¿Te gustaría dar tu opinión del lugar?
        </h1>
        <h2 className=" font-medium text-xs lg:text-base">
          ¿Cómo fue tu experiencia?
        </h2>
        <span className="flex my-1">
          {hoveredStars.map((isHovered, index) => (
            <RiStarSFill
              className={`text-${
                isHovered ? "[#FD7B03]" : "[#FFCF91]"
              } hover:text-[#FD7B03] text-lg`}
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            />
          ))}
        </span>
        <p className="font-semibold text-xs lg:text-base">Escribe tu opinión</p>
        <textarea className=" border-2 border-[#777] p-4 w-full h-32 rounded-lg mt-2  max-h-60"></textarea>
        <div className="flex justify-center items-center">
          <button className="bg-[#FD7B03] w-full lg:w-2/4   h-12 mt-2 rounded-lg text-[#fff] text-sm lg:text-base font-semibold">
            Enviar opinión
          </button>
        </div>
      </div>
    </div>
  );
}
