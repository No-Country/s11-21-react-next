import Link from "next/link";
import React from "react";

const BestRated = () => {
  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="pl-8">
        <h3
          className="text-black font-semibold 
        "
        >
          Mejor evaluados
        </h3>
      </div>
      <Link
        href="/bestRanqued"
        className="text-[#FD7B03] text-[12px] flex pr-6"
      >
        Ver más
      </Link>
    </div>
  );
};

export default BestRated;
