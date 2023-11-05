"use client";
import React from "react";
import Image from "next/image";

import MapIconImage from "../../../public/map-icon.png";
import HeartImage from "../../../public/heart-image.png";

import { Lugares } from "@/services/apiCall";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  lugar: Lugares;
  setSelected: (lugar: Lugares) => void;
}

const SearchResultCard: React.FC<Props> = ({ lugar, setSelected }) => {
  const handleSelect = () => {
    setSelected(lugar);
  };

  return (
    <div className="grid my-3" onClick={handleSelect}>
      <div className="relative w-[348px] h-[96px] bg-[#FFF4E0] hover:opacity-75 hover:shadow-md justify-self-center rounded-lg box-border flex gap-[5px]">
        <div className="w-[136px] h-[84px] mt-[6px] ml-[6px] mb-[6px]">
          {lugar.imagesUrl && (
            <Image
              src={lugar.imagesUrl[0]}
              width={100}
              height={100}
              alt="Card image"
              priority
              className="w-[136px] h-[84px] rounded-md items-center"
            />
          )}
        </div>

        <div className="w-[162px] m-auto text-[14px] relative">
          <div className="text-left flex flex-col gap-2">
            <div className="relative">
              <p className="truncate">
                {lugar.placeName} - {lugar.zone}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <Image
                src={MapIconImage}
                alt="Map-icon image"
                className="h-[12px]"
              />

              <p className="text-blue-500 hover:font-semibold">Como llegar</p>
            </div>

            <div className="flex gap-1 items-center h-[21px]">
              {Array.from({ length: lugar.stars }, (_, i) => (
                <span key={i} className="text-[#FFCF91]">
                  <AiFillStar />
                </span>
              ))}
              {Array.from({ length: 5 - lugar.stars }, (_, i) => (
                <span key={i} className="text-[#FFCF91]">
                  <AiOutlineStar />
                </span>
              ))}
              <div>
                <p className="text-[#FFCF91]">{`(10)`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[22px] h-[84px] mt-[7px] flex flex-col">
          <div className="h-[25px] grid items-center justify-left">
            <Image
              src={HeartImage}
              alt="Heart image"
              className="w-[14px] h-[13px]"
              width={14}
              height={13}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
