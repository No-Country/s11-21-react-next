"use client";
import { CommentUser } from "@/services/apiCall";
import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";

const OpinionCard = ({ comment }: { comment: CommentUser[] }) => {
  const [visibleOpinions, setVisibleOpinions] = useState(3);
  const [showAllOpinions, setShowAllOpinions] = useState(false);
  const renderStars = (rating: number) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const starClass = rating >= i ? "text-[#FD7B03]" : "text-[#FFCF91]";
      stars.push(<RiStarSFill className={starClass} key={i} />);
    }
    return stars;
  };

  const renderAvatar = (name: string) => {
    const firstLetter = name.charAt(0).toUpperCase();
    return (
      <div className="rounded-full bg-[#FD7B03] text-white w-8 h-8 flex text-center items-center justify-center text-base font-normal">
        {firstLetter}
      </div>
    );
  };

  const toggleOpinions = () => {
    if (showAllOpinions) {
      setVisibleOpinions(3);
    } else {
      setVisibleOpinions(comment.length);
    }
    setShowAllOpinions(!showAllOpinions);
  };

  return (
    <div className="w-11/12 2xl:w-[60vw] my-8 px-8 md:px-10">
      {comment && comment.slice(0, visibleOpinions).map((opinion, index) => (
        <div
          key={index}
          className="my-4 flex flex-col border-t-2 pt-4 border-[#FFF4E0]"
        >
          <div className="flex flex-row mb-2">
            <div>{renderAvatar(opinion.name)}</div>
            <div className="ml-4">
              <h3 className="text-black font-semibold text-xs">
                {opinion.name}
              </h3>
              <h4 className="text-[#FFCF91] text-xs">{opinion.date}</h4>
            </div>
          </div>
          <div className="flex flex-row mb-3">
            {renderStars(opinion.stars)}
          </div>
          <div>
            <h4 className="text-xs text-justify leading-5 tracking-wide">
              {opinion.comment}
            </h4>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        {comment.length > 3 && (
          <button
            className="text-[#FD7B03] mt-4 text-sm md:text-base"
            onClick={toggleOpinions}
          >
            {showAllOpinions
              ? "Ver menos"
              : `Más opiniones (${comment.length - visibleOpinions})`}
          </button>
        )}
        {comment.length == 0 && (
          <p className="text-sm text-center">No hay comentarios, sé el primero en ingresar un comentario</p>
        )}
      </div>
    </div>
  );
};

export default OpinionCard;
