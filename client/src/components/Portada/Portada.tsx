import React from "react";
import SearchInput from "../Searcher/searchInput";
import Image from "next/image";
import { Krona_One } from "next/font/google";

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function Portada() {
  return (
    <>
      <div className="border-2 m-auto relative h-[260px] flex justify-center items-center -z-10 w-2/4 max-md:w-full -mt-6">
        <Image
          src="/Portada.jpg"
          alt="image-front-page"
          className="brightness-75"
          fill
          objectFit="cover"
        />
        <span className="absolute bottom-16 left-10">
          <h1 className={`text-[#fff] text-xl font-extralight ${krona.className}`}>NearByTour</h1>
          <p className=" text-lg text-[#FFFFFF] w-72 ">
            Comparte y descubre lugares únicos en todo el mundo.
          </p>
        </span>
      </div>
      <SearchInput></SearchInput>
    </>
  );
}
