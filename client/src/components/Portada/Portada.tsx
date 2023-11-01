import React from "react";
import { SearchInput } from "../Searcher/searchInput";
import Image from "next/image";
import { Krona_One } from "next/font/google";
import Link from "next/link";

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function Portada() {
  return (
    <>
      <div className="border-2 m-auto relative w-full  h-96 max-md:h-[260px] flex justify-center items-center -z-10 md:w-full -mt-6">
        <Image
          src="/Portada.jpg"
          alt="image-front-page"
          className="brightness-75 object-cover"
          fill
          priority
        />
        <span className="absolute bottom-24 max-md:bottom-16 left-10 md:left-0 md:w-full">
          <h1
            className={`text-[#fff] text-4xl  font-extralight md:text-center max-md:text-xl ${krona.className}`}
          >
            NearByTour
          </h1>
          <p className=" text-lg text-[#FFFFFF] w-72 md:w-full md:text-center">
            Comparte y descubre lugares únicos en todo el mundo.
          </p>
        </span>
      </div>
      <div className="relative flex justify-center items-center  m-auto -mt-6 w-3/5 max-md:w-80">
        <div className="flex shadow-lg shadow-zinc-300/50 outline-none px-4 w-full h-10 text-xs rounded-lg bg-[#FFF4E0] items-center my-auto">
          <Link className="items-center" href="/searchresult">
            Buscar atracción...
          </Link>
        </div>
      </div>
    </>
  );
}
