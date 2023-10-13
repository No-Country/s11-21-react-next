import React from "react";
import { RiStarSFill } from "react-icons/ri";

type Opinion = {
  id: number;
  name: string;
  date: string;
  rating: number;
  explanation: string;
};

const opinions: Opinion[] = [
  {
    id: 1,
    name: "Angelica Martinez",
    date: "05 de Octubre, 2023",
    rating: 5,
    explanation:
      "Coincido al 100%, esta cafetería es una joyita oculta. Vivo 'relativamente' cerca y no sabía que existía, se pierde entre la ciudad pero cuando llegas el olor a café te atrapa completamente. La gente que atiende te hace sentir como en casa, recomiendo a ojos cerrados el chocolate caliente.",
  },
  {
    id: 2,
    name: "Emanuel Navarrete",
    date: "18 de Mayo, 2023",
    rating: 5,
    explanation:
      "Mi nuevo lugar favorito para ir a desayunar, la vibra que da este lugar es mágica, excelentes precios/calidad.",
  },
];

const OpinionCard = () => {
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
  return (
    <div className="px-5 my-8">
      {opinions.map((opinion, index) => (
        <div key={index} className="mb-4 flex flex-col">
          <div className="flex flex-row mb-2">
            <div>{renderAvatar(opinion.name)}</div>
            <div className="ml-4">
              <h3 className="text-black font-semibold text-xs">
                {opinion.name}
              </h3>
              <h4 className="text-[#FFCF91] text-xs">{opinion.date}</h4>
            </div>
          </div>
          <div className="flex flex-row">{renderStars(opinion.rating)}</div>
          <div>
            <h4 className="text-xs text-justify leading-5">
              {opinion.explanation}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpinionCard;
