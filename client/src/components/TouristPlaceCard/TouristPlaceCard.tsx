"use client";
import React, { useState } from "react";
import Image from "next/image";
import CardImage1 from "../../../public/jardin_japones_1.jpg";
import CardImage2 from "../../../public/jardin_japones_2.jpg";
import CardImage3 from "../../../public/jardin_japones_3.jpg";
import { LiaCameraSolid } from "react-icons/lia";
import { SiMacys } from "react-icons/si";
import HeartImage from "../../../public/heart-image.png";
import { TiTree } from "react-icons/ti";
import MapIconImage from "../../../public/map-icon.png";
import Link from "next/link";

const TouristPlaceCard = () => {
  const [bgColor1, setBgColor1] = useState("bg-[#FD7B03]");
  const [bgColor2, setBgColor2] = useState("bg-white");
  const [bgColor3, setBgColor3] = useState("bg-white");

  const [showImage, setShowImage] = useState<number>(1);

  const handleSelectImage1 = () => {
    setBgColor1("bg-[#FD7B03]");
    setBgColor2("bg-white");
    setBgColor3("bg-white");

    setShowImage(1);
  };

  const handleSelectImage2 = () => {
    setBgColor2("bg-[#FD7B03]");
    setBgColor1("bg-white");
    setBgColor3("bg-white");

    setShowImage(2);
  };

  const handleSelectImage3 = () => {
    setBgColor3("bg-[#FD7B03]");
    setBgColor1("bg-white");
    setBgColor2("bg-white");

    setShowImage(3);
  };

  const renderImage = () => {
    if (showImage === 1) {
      return (
        <Image
          src={CardImage1}
          alt="Card image 1"
          priority
          className="h-[216px] sm:h-full rounded-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
        />
      );
    } else if (showImage === 2) {
      return (
        <Image
          src={CardImage2}
          alt="Card image 2"
          priority
          className="h-[216px] sm:h-full rounded-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
        />
      );
    } else if (showImage === 3) {
      return (
        <Image
          src={CardImage3}
          alt="Card image 3"
          priority
          className="h-[216px] sm:h-full rounded-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="w-4/5 grid my-3">
      <div className="w-full justify-self-center flex justify-between mb-3 px-6">
        <div className="text-left text-base font-bold flex flex-col gap-2">
          <div className="w-full">
            <p className="">Jardín Japonés</p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src={MapIconImage}
              alt="Map-icon image"
              className="h-[12px]"
            />
            <Link href="https://www.google.com/maps/place/Jard%C3%ADn+Japon%C3%A9s+de+Escobar,+B1625+Bel%C3%A9n+de+Escobar,+Provincia+de+Buenos+Aires/@-34.3524909,-58.79789,16z/data=!4m6!3m5!1s0x95bb61b90c949f8d:0x957ce105f51ea2dd!8m2!3d-34.3524909!4d-58.79789!16s%2Fg%2F1hc8ms9lw">
              <p className="text-blue-500 text-xs hover:font-semibold">
                Buenos Aires. Argentina
              </p>
            </Link>
          </div>

          <div className="flex gap-1 items-center h-[21px] text-xs">
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

        <div className="w-[115px] flex flex-col justify-between">
          <div className="w-[115px] h-[21px] grid items-center justify-end">
            <Image
              src={HeartImage}
              alt="Heart image"
              className="w-[14px] h-[13px]"
              width={14}
              height={13}
            />
          </div>

          <div className="w-full">
            <div className="flex items-center gap-1 justify-end">
              <span>
                <TiTree />
              </span>
              <div className="">
                <p className="text-xs">Parque</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-self-center relative grid px-6">
        {renderImage()}

        <div className="absolute bg-[#FD7B03] rounded-lg bottom-3 left-10 z-10 flex items-center gap-1 px-2 py-1">
          <span className="text-white text-[24px]">
            <LiaCameraSolid />
          </span>
          <span className="text-white">3</span>
        </div>

        <div className="absolute bottom-3 z-10 p-2 justify-self-center">
          <div className="flex gap-3">
            <div
              onClick={handleSelectImage1}
              className={`w-[10px] h-[10px] rounded-full ${bgColor1}`}
            ></div>

            <div
              onClick={handleSelectImage2}
              className={`w-[10px] h-[10px] rounded-full ${bgColor2}`}
            ></div>

            <div
              onClick={handleSelectImage3}
              className={`w-[10px] h-[10px] rounded-full ${bgColor3}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristPlaceCard;
