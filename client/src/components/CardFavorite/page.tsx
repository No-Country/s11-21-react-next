"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import CardImage1 from '../../../public/españa.jpg';
import { MdFavorite } from 'react-icons/md';


export default function Page() {
  const [isFavorite, setFavorite] = useState(true);
  const [rating, setRating] = useState(0);

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
  };

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl cursor-pointer ${
            i <= rating ? 'text-[#FD7B03]' : 'text-[#FFCF91]'
          }`}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };
  
  


  return (
    <div className="grid my-3">
   <div className="w-[382px] h-[240px] relative ">


   <div className="rounded-lg shadow-md overflow-hidden" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}>
  <Image
    src={CardImage1}
    alt="Card image 1"
    priority
    layout="fill"
    objectFit="cover"
  />
</div>

        <div className="absolute top-0 right-0 p-4">
  <button
    className={`text-2xl cursor-pointer ${
      isFavorite ? 'text-[#FD7B03]' : 'text-[#FFCF91]'
    }`}
    onClick={toggleFavorite}
  >
    <MdFavorite />
  </button>
</div>


        <div className="absolute bottom-0 left-0 p-4 text-white">
  <p className="text-sm font-medium font-inter text-black-500 leading-6">
    <span>Parque nacional natural Tayrona</span><br/>
    <span>Magdalena, Colombia</span>
  </p>
  <div className="flex gap-1 items-center h-[18px]">
    {renderStars()}
  </div>
</div>

      </div>
    </div>
  );
}
