import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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
  isLiked: boolean;
  onLikeClick: () => void;
}

const TouristPlaceCard: React.FC<TouristPlaceCardProps> = ({
  placeName,
  zone,
  latitude,
  longitude,
  imagesUrl,
  stars,
  category,
  isLiked,
  onLikeClick,
}) => {
  const renderStars = () => {
    const maxStars = 5;
    const starElements = [];
    const selectedColor = "text-[#FD7B03]";
    const unselectedColor = "text-[#FFCF91]";

    for (let i = 1; i <= maxStars; i++) {
      starElements.push(
        <span
          key={i}
          className={`text-xl ${i <= stars ? selectedColor : unselectedColor}`}
        >
          &#9733;
        </span>
      );
    }
    return starElements;
  };

  return (
    <div className="w-11/12 2xl:w-[60vw] flex flex-col my-3 justify-center">
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
          {placeName}
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
          <div className="flex flex-row gap-1 justify-start items-center h-[21px] font-normal">
            <div>{renderStars()}</div>
            <div className="text-sm lg:text-base text-[#FFCF91]">({stars})</div>
          </div>
        </div>
        <div className="text-right flex flex-col gap-10">
          <div className="text-base lg:text-lg">
            {isLiked ? (
              <AiFillHeart
                onClick={onLikeClick}
                className="text-xl text-red-500"
              />
            ) : (
              <AiOutlineHeart
                onClick={onLikeClick}
                className="text-xl text-gray-400"
              />
            )}
          </div>
          <div className="font-semibold text-xs lg:text-sm">
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </div>
        </div>
      </div>
      <div className="w-full justify-self-center relative flex justify-center">
        <Image
          src={imagesUrl[0]}
          alt="Card image"
          width={1080}
          height={720}
          className="w-11/12 2xl:w-[60vw] rounded-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
        />
      </div>
      <div className="flex gap-1 items-center h-[21px] text-xs lg:text-sm"></div>
    </div>
  );
};

export default TouristPlaceCard;
