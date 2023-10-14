import React from "react";
import Image from "next/image";
import { RiRoadMapLine, RiStarSFill } from "react-icons/ri";

type Place = {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
};

const places: Place[] = [
  {
    id: 1,
    name: "Parque de la Costa",
    image: "/argentina.jpg",
    location: "B.A., Argentina",
    rating: 4,
  },
  {
    id: 2,
    name: "Borde Costero",
    image: "/chile.jpg",
    location: "Viña del Mar, Chile",
    rating: 5,
  },
  {
    id: 3,
    name: "Calle Carabobo",
    image: "/venezuela.jpg",
    location: "Venezuela",
    rating: 3,
  },
  {
    id: 4,
    name: "Cabo San Lucas",
    image: "/mexico.jpg",
    location: "CDM, México",
    rating: 5,
  },
  {
    id: 5,
    name: "Catedral Cuzco",
    image: "/peru.jpg",
    location: "Cuzco, Perú",
    rating: 3,
  },
];
const CarouselCard = () => {
  const renderStars = (rating: number) => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const starClass = rating >= i ? "text-[#FD7B03]" : "text-[#FFCF91]";
      stars.push(<RiStarSFill className={starClass} key={i} />);
    }

    return stars;
  };

  return (
    <div className="carousel my-4 mx-auto px-8 flex">
      <div className="carousel-container relative flex gap-2  scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        {places.map((place, index) => (
          <div
            key={index}
            className="carousel-item text-start relative snap-start w-36 h-56 z-10"
          >
            <div className="">
              <Image
                src={`${place.image}`}
                alt="place"
                fill={true}
                className="rounded-xl -z-10 object-cover"
              />
              <div
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                }}
              ></div>
            </div>
            <div className="absolute bottom-2 left-2 ">
              <h3 className="text-white z-40 text-sm font-normal">
                {place.name}
              </h3>
              <span className="flex flex-row text-xs align-baseline justify-start items-baseline font-light">
                <RiRoadMapLine className="text-white mr-1" />
                <h3 className="text-white z-40">{place.location}</h3>
              </span>
              <div className="flex flex-row">{renderStars(place.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
