
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CardImage from '../../../public/foto_iglesia-Los-Capuchinos.jpg';
import MapIconImage from '../../../public/map-icon.png';
import HeartImage from '../../../public/heart-image.png';
import { SiMacys } from 'react-icons/si';
import Link from 'next/link';

const SearchResultCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="grid my-5">
      <div className="relative w-[290px] h-[80px] bg-[#FFF4E0] justify-self-center rounded-lg box-border flex gap-[5px]">
        <div className="w-[113px] h-[70px] mt-[5px] ml-[5px]">
          <Image src={CardImage} alt="Card image" priority className="w-[113px] h-[70px] rounded-[3px] items-center" />
        </div>

        <div className="w-[135px] h-[70px] mt-[5px] ml-[5px] text-[14px] relative">
          <div className="text-left flex flex-col gap-1">
            <div className="relative">
              <p
                className={`truncate ${isHovered ? '' : 'truncate'}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Iglesia Jesuitica Los Capuchinos. Ciudad de Córdoba. Argentina.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <Image src={MapIconImage} alt="Map-icon image" className="h-[12px]" />
              <Link href="https://www.google.com/maps/place/Iglesia+del+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+(Iglesia+de+los+Capuchinos)/@-31.4245554,-64.188475,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a28f9b82eb4f:0x5fa116c0073e51e2!8m2!3d-31.42456!4d-64.1859001!16s%2Fg%2F1225dx4w?entry=ttu">
                <p>Como llegar</p>
              </Link>
            </div>

            <div className="flex gap-1 items-center h-[21px]">
              <span className="text-[#FFCF91]">
                <SiMacys />
              </span>
              <span className="text-[#FFCF91]">
                <SiMacys />
              </span>
              <span className="text-[#FFCF91]">
                <SiMacys />
              </span>
              <span className="text-[#FFCF91]">
                <SiMacys />
              </span>
              <span className="text-[#FFCF91]">
                <SiMacys />
              </span>
              <div>
                <p className="text-[#FFCF91]">(10)</p>
              </div>
            </div>
          </div>
          {isHovered && (
            <div className="absolute top-0 left-0 w-full h-full bg-white p-1 z-10">
              <p className="text-left text-[12px]">Iglesia Jesuitica Los Capuchinos. Ciudad de Córdoba. </p>
            </div>
          )}
        </div>

        <div className="w-[15px] h-[70px] mt-[5px] flex flex-col">
          <div className="h-[21px] grid items-center justify-center">
            <Image src={HeartImage} alt="Map-icon image" className="w-[11.25px] h-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;