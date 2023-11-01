import { PlaceData } from "@/app/(otherPages)/place/[id]/page";
import Image from "next/image";
import React, { useState } from "react";

const StarRating: React.FC<StarRatingProps> = ({ ratings }) => {
  const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);
  return (
    <div className="flex flex-col items-start w-full">
      {ratings.map((count, index) => {
        const percentage = (count / totalRatings) * 100;
        return (
          <>
          <div key={index} className="flex w-full items-center">
            <div className="flex items-center justify-start w-1/6 font-semibold">
              {index + 1}
            </div>
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-3 max-md:w-full">
              <div style={{ width: `${percentage}%` }}
                className="bg-[#FD7B03] h-3 rounded-lg"></div>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

type StarRatingProps = {
  ratings: number[];
}

const OpinionsResume = ({ dataPlace }: { dataPlace: PlaceData }) => {
  const ratings: number[] = [5,1,3,10,2];
  const starsCount: { [key: number]: number } = {};
  
  const startCant = () => {
    dataPlace.comments.forEach((value) => {
      const stars = value.stars;
      if (starsCount[stars]) {
        starsCount[stars]++;
      } else {
        starsCount[stars] = 1;
      }
    });
  
  };

  const totalStars: number = dataPlace.comments.reduce((acc, cur) => acc + cur.stars, 0)

   return (
    <section className="w-11/12 2xl:w-[60vw] ">
      <div className="px-8 lg:px-10 flex flex-col">
        <p className=" font-semibold">Opiniones</p>
        <h1 onClick={startCant}>Hola</h1>
        <div className="flex gap-x-8">
          <StarRating ratings={ratings} />
          <div className="col-span-4 md:col-span-3 md:row-span-5 md:col-start-10 grid grid-rows-3 items-center justify-center">
              <div className="row-span-2 text-4xl font-bold m-auto">
                <p className="text-[3rem]">{dataPlace.comments.length === 0 ?"0.0" :(totalStars / dataPlace.comments.length).toFixed(1)}</p>
                <Image src="/Frame.png" alt="estrellas" width={60} height={100} />
              </div>
              <div className="row-span-2 mx-auto text-xs text-[#FFCF91] self-start font-medium">
                ({dataPlace.comments.length} comentarios)
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default OpinionsResume;
