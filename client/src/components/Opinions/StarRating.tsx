import React from 'react'

export const StarRating: React.FC<StarRatingProps> = ({ ratings }) => {
  const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);
  return (
    <div className="flex flex-col items-start w-full">
      {ratings.map((count, index) => {
        const percentage = (count / totalRatings) * 100;
        return (
          <>
          <div key={index} className="flex w-full items-center">
            <div className="flex items-center justify-start w-10 font-semibold">
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
