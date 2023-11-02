import { CommentUser } from "@/services/apiCall";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { RiStarSFill } from "react-icons/ri";

const OpinionsResume = ({ dataPlace }: { dataPlace: CommentUser[] }) => {
  const [starsComment, setStarsComment] = useState<number[]>([])
  useEffect(()=>{
    const startCant = () => {
      const starsCount: number[] = [0, 0, 0, 0, 0];
      dataPlace.forEach((value) => {
        const stars = value.stars;
        if (stars >= 1 && stars <= 5) {
          starsCount[stars - 1]++;
        }
      });
      setStarsComment(starsCount);
    };

    startCant()
  },[dataPlace])

  const renderStars = (rating: number) => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const starClass = rating >= i ? "text-[#FD7B03]" : "text-[#FFCF91]";
      stars.push(<RiStarSFill className={starClass} key={i} />);
    }


    return stars;
  };

  const totalStars: number = dataPlace.reduce((acc, cur) => acc + cur.stars, 0)


   return (
    <section className="w-11/12 2xl:w-[60vw] ">
      <div className="px-8 lg:px-10 flex flex-col ">
        <p className=" font-semibold">Opiniones</p>
        <div className="flex gap-x-10 justify-center items-center">
          <StarRating ratings={starsComment} />
          <div className="flex flex-col justify-center items-center w-2/12 max-md:w-5/12">
              <p className="text-[3rem] row-span-2 text-4xl font-bold m-auto flex flex-col justify-center items-center">{dataPlace.length === 0 ?"0.0" :(totalStars / dataPlace.length).toFixed(1)}</p>
              <div className="flex">{renderStars(Number(totalStars/dataPlace.length))}</div>
              <p className="row-span-2 mx-auto text-xs text-[#FFCF91] self-start font-medium">
              ({dataPlace.length} comentarios)
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionsResume;
