import { PlaceData } from "@/services/apiCall";
import React from "react";

const StarRating: React.FC<StarRatingProps> = ({ comments }) => {
  const maxStars = 5;
  const ratings = Array(maxStars).fill(0);

  comments.forEach((comment) => {
    const stars = comment.stars;
    ratings[stars - 1]++;
  });

  const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);

  return (
    <div className="flex flex-col items-start w-full">
      {Array.from({ length: maxStars }, (_, index) => {
        const rating = index + 1;
        const count = ratings[index] || 0;
        const percentage = (count / totalRatings) * 100;

        return (
          <div key={index} className="flex w-full items-center ">
            <div className="flex items-center justify-end  mr-2 font-semibold">
              {rating}
            </div>
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-3 max-md:w-full">
              <div
                style={{ width: `${percentage}%` }}
                className="bg-[#FD7B03] h-3 rounded-lg"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type StarRatingProps = {
  comments: { stars: number }[];
};

const OpinionsResume = ({ dataPlace }: { dataPlace: PlaceData }) => {
  const renderStars = () => {
    const maxStars = 5;
    const starElements = [];
    const selectedColor = "text-[#FD7B03]";
    const unselectedColor = "text-[#FFCF91]";

    for (let i = 1; i <= maxStars; i++) {
      starElements.push(
        <span
          key={i}
          className={`text-xl ${
            i <= dataPlace.stars ? selectedColor : unselectedColor
          }`}
        >
          &#9733;
        </span>
      );
    }
    return starElements;
  };

  const totalStars: number = dataPlace.comments.reduce(
    (acc, cur) => acc + cur.stars,
    0
  );

  return (
    <section className="w-11/12 2xl:w-[60vw]">
      <div className="px-8 lg:px-10 flex flex-col">
        <p className="text-sm md:text-base lg:text-lg font-semibold">
          Opiniones
        </p>
        <div className="flex gap-x-8 ">
          <StarRating comments={dataPlace.comments} />
          <div className="col-span-4 md:col-span-3 md:row-span-5 md:col-start-10 grid grid-rows-3 items-center justify-center">
            <div className="row-span-2 text-4xl font-bold m-auto">
              <p className="text-[3rem]">
                {dataPlace.comments.length === 0
                  ? "0.0"
                  : (totalStars / dataPlace.comments.length).toFixed(1)}
              </p>
              <div>{renderStars()}</div>
            </div>
            <div className="text-xs text-[#FFCF91] text-center font-medium">
              <div className="flex flex-row">
                (<span className="mr-1">{dataPlace.comments.length}</span>{" "}
                comentarios)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionsResume;
