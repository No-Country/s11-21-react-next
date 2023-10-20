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
    name: "Sara Ulloa",
    date: "02 de Septiembre, 2023",
    rating: 5,
    explanation:
      "Visitar el jardín Japonés en Buenos Aires fue una experiencia verdaderamente encantadora.",
  },
  {
    id: 2,
    name: "Luis Ossandón",
    date: "27 de Julio, 2023",
    rating: 5,
    explanation:
      "La tranquilidad que se siente al caminar por los senderos junto a los estantes llenos de peces koi es incomparable. A cierta hora se llena el lugar.",
  },
  {
    id: 3,
    name: "Úrsula Vial",
    date: "8 de Junio, 2023",
    rating: 5,
    explanation:
      "Los jardines cuidadosamente diseñados, repletos de vegetación exuberante y elegantes elementos arquitectónicos, transportan a los visitantes a un rincón de Japón en plena Argentina.",
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
    <div className="px-8 my-8">
      {opinions.map((opinion, index) => (
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
            {renderStars(opinion.rating)}
          </div>
          <div>
            <h4 className="text-xs text-justify leading-5 tracking-wide">
              {opinion.explanation}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpinionCard;
