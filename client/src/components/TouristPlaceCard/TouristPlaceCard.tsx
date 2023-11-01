import React, { useState } from "react";
import Image from "next/image";
import { LiaCameraSolid } from "react-icons/lia";
import { SiMacys } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { TiTree } from "react-icons/ti";
import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";

interface TouristPlaceCardProps {
  placeName: string;
  zone: string;
  latitude: number;
  longitude: number;
  imagesUrl: string[];
  stars: number;
  category: string;
}

const TouristPlaceCard: React.FC<TouristPlaceCardProps> = ({
  placeName,
  zone,
  latitude,
  longitude,
  imagesUrl,
  stars,
  category,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const renderStars = () => {
    const maxStars = 5;
    const starElements = [];
    const selectedColor = "text-[#FD7B03]"
    const unselectedColor = "text-[#FFCF91]";
  
    for (let i = 1; i <= maxStars; i++) {
      starElements.push(
        <span
          key={i}
          className={`text-xl ${
            i <= stars ? selectedColor : unselectedColor
          }`}
        >
          &#9733;
        </span>
      );
    }
    return starElements;
  };

  return (
    <div className="w-11/12 xl:w-auto flex flex-col my-3 justify-center">
      <div className="w-full justify-self-center flex justify-start mt-4 mb-6 px-6">
        <Link
          href={"/searchresult"}
          className="flex flex-row items-center gap-2 font-semibold hover:text-[#FD7B03] text-xs lg:text-sm"
        >
          <HiOutlineChevronLeft />
          <span>Buscador</span>
        </Link>
      </div>
      <div className="flex flex-row mb-3 px-6 justify-between">
        <div className="text-left font-bold flex flex-col gap-2">
          <div className="w-full flex items-center">
            <p className="text-base lg:text-lg">
              {placeName}
              <AiOutlineHeart
                className={`text-xl cursor-pointer ${
                  isLiked ? "text-red-500" : "text-gray-400"
                }`}
                onClick={handleLikeClick}
              />
              <span className="text-right text-xs lg:text-sm ml-auto">
      {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
    </span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <GrMapLocation className="text-base xl:text-lg" />
            <Link
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-black text-xs lg:text-sm font-medium hover:text-blue-500">
                {zone}
              </p>
            </Link>
          </div>
          <div className="flex gap-1 items-center h-[21px] text-xs lg:text-sm">
            {renderStars()}
            <span>({stars})</span>
          </div>
        </div>
      </div>
      <div className="w-full justify-self-center relative grid 2xl:flex justify-center px-6 md:px-0">
        <Image
          src={imagesUrl[0]}
          alt="Card image"
          layout="responsive"
          width={1080}
          height={720}
          priority
          className="h-[216px] sm:h-full rounded-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
        />
      </div>
      <div className="flex gap-1 items-center h-[21px] text-xs lg:text-sm">
       
      </div>
    </div>
  );
};

export default TouristPlaceCard;
