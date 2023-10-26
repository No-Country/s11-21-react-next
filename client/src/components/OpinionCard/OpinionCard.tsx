"use client";
import React, { useState } from "react";
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
    rating: 4,
    explanation:
      "Visitar el jardín Japonés en Buenos Aires fue una experiencia verdaderamente encantadora.",
  },
  {
    id: 2,
    name: "Luis Ossandón",
    date: "27 de Julio, 2023",
    rating: 4,
    explanation:
      "La tranquilidad que se siente al caminar por los senderos junto a los estantes llenos de peces koi es incomparable. A cierta hora se llena el lugar.",
  },
  {
    id: 3,
    name: "Úrsula Vial",
    date: "8 de Junio, 2023",
    rating: 4,
    explanation:
      "Los jardines cuidadosamente diseñados, repletos de vegetación exuberante y elegantes elementos arquitectónicos, transportan a los visitantes a un rincón de Japón en plena Argentina.",
  },
  {
    id: 4,
    name: "Carlos Rodríguez",
    date: "15 de Mayo, 2023",
    rating: 4,
    explanation:
      "El jardín japonés es un remanso de paz en medio de la ciudad. Me encantó la armonía que se respira allí.",
  },
  {
    id: 5,
    name: "Ana Gómez",
    date: "10 de Abril, 2023",
    rating: 4,
    explanation:
      "Si buscas un lugar para relajarte y disfrutar de la naturaleza, este jardín es el lugar perfecto.",
  },
  {
    id: 6,
    name: "Eduardo Martínez",
    date: "25 de Marzo, 2023",
    rating: 4,
    explanation:
      "Increíblemente hermoso. Los jardines están muy bien cuidados y la arquitectura japonesa es fascinante.",
  },
  {
    id: 7,
    name: "María Silva",
    date: "12 de Febrero, 2023",
    rating: 4,
    explanation:
      "El jardín japonés es un rincón de serenidad en medio de la ciudad. Muy recomendado para desconectar.",
  },
  {
    id: 8,
    name: "Pedro Torres",
    date: "29 de Enero, 2023",
    rating: 4,
    explanation:
      "Me sorprendió gratamente la belleza de este lugar. No esperaba encontrar algo así en Buenos Aires.",
  },
  {
    id: 9,
    name: "Laura Pérez",
    date: "14 de Diciembre, 2022",
    rating: 4,
    explanation:
      "He visitado muchos jardines en todo el mundo, y este definitivamente está entre los mejores. Vale la pena la visita.",
  },
  {
    id: 10,
    name: "Fernando González",
    date: "1 de Noviembre, 2022",
    rating: 4,
    explanation:
      "El jardín japonés es un lugar encantador en todas las estaciones del año. La atención al detalle es impresionante.",
  },
];

const OpinionCard = () => {
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
      setVisibleOpinions(opinions.length);
    }
    setShowAllOpinions(!showAllOpinions);
  };

  return (
    <div className="w-11/12 2xl:w-[60vw] my-8 px-8 md:px-10">
      {opinions.slice(0, visibleOpinions).map((opinion, index) => (
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
      <div className="flex justify-center">
        {opinions.length > 3 && (
          <button
            className="text-[#FD7B03] mt-4 text-sm md:text-base"
            onClick={toggleOpinions}
          >
            {showAllOpinions
              ? "Ver menos"
              : `Más opiniones (${opinions.length - visibleOpinions})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default OpinionCard;
