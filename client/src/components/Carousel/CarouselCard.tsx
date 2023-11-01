import React from "react";
import Image from "next/image";
import { RiRoadMapLine, RiStarSFill } from "react-icons/ri";
import Link from 'next/link';

type Place = {
  id: string;
  placeName: string;
  imagesUrl: string[];
  zone: string;
  stars: number;
};

type CarouselCardProps = {
  data: Place[] | undefined; 
};

const CarouselCard: React.FC<CarouselCardProps> = ({ data }) => {
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
      <div className="carousel-container relative flex gap-2 scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
      {data ? (
        data.map((place, index) => (
          <div key={index} className="carousel-item text-start relative snap-start w-36 h-56 z-10">
           <Link href={`/place/${place.id}`} passHref>
              <div>
                <div className="relative h-56">
                  {place.imagesUrl && place.imagesUrl.length > 0 ? ( 
                    <Image
                      src={place.imagesUrl[0]} 
                      alt="place"
                      className="rounded-xl -z-10 object-cover"
                      fill
                      sizes="144px"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                    }}
                  ></div>
                </div>
                <div className="absolute bottom-2 left-2 ">
                  <h3 className="text-white z-40 text-sm font-normal">
                    {place.placeName}
                  </h3>
                  <span className="flex flex-row text-xs align-baseline justify-start items-baseline font-light">
                    <RiRoadMapLine className="text-white mr-1" />
                    <h3 className="text-white z-40">{place.zone}</h3>
                  </span>
                  <div className="flex flex-row">{renderStars(place.stars)}</div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      </div>
    </div>
  );
};

export default CarouselCard;
