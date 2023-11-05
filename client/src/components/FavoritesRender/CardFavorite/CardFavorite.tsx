"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { RiStarSFill, RiRoadMapLine } from "react-icons/ri";
import { Favorite } from "@/services/apiCall";

export default function CardFavorite({
  item,
  onRemove,
  onAdd,
}: {
  item: Favorite;
  onRemove: () => void;
  onAdd: () => void;
}) {
  const [isFavorite, setFavorite] = useState(true);

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
    if (isFavorite) {
      onRemove();
    } else {
      onAdd();
    }
  };

  const renderStars = (stars: number) => {
    const maxRating = 5;
    const rating = [];

    for (let i = 1; i <= maxRating; i++) {
      const starClass = stars >= i ? "text-[#FD7B03]" : "text-[#FFCF91]";
      rating.push(<RiStarSFill className={starClass} key={i} />);
    }

    return rating;
  };

  return (
    <div className="flex my-4 justify-center w-full">
      <div className="aspect-square relative shadow-md">
        <Image
          src={item.imagesUrl[0]}
          alt="Card image 1"
          priority
          width={280}
          height={280}
          className="w-full h-full -z-10 rounded-lg"
        />
        <div
          className="absolute top-0 left-0 z-0 w-full h-full rounded-lg"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
          }}
        ></div>
        <div className="absolute top-0 right-0 p-4 z-40">
          <button
            className={`text-2xl cursor-pointer ${
              isFavorite ? "text-[#FD7B03]" : "text-[#FFCF91]"
            }`}
            onClick={toggleFavorite}
          >
            <MdFavorite />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="text-sm font-medium leading-6">
            <span>{item.placeName}</span>
            <br />
            <p className="flex flex-row text-xs align-baseline justify-start items-baseline font-light">
              <RiRoadMapLine className="text-white mr-1" />
              <span className="text-white z-40">{item.zone}</span>
            </p>
          </div>
          <div className="flex gap-0.5 items-center h-5">
            {renderStars(item.stars)}
          </div>
        </div>
      </div>
    </div>
  );
}
