"use client";

import Link from "next/link";
import React from "react";

interface PopularsProps {
  popularPlaces: any[];
}

const Populars = ({ popularPlaces }: PopularsProps) => {
  return (
    <div className="mx-0 lg:mx-[13vw] xl:mx-[30vw] 2xl:mx-[32vw]">
      <div className="flex flex-row justify-between mt-4">
        <div className="pl-8 lg:pl-0 xl:pl-0 text-start">
          <h3 className="text-black font-semibold">Populares</h3>
        </div>
        <div className="text-end">
          <Link
            href="/populars"
            className="text-[#FD7B03] text-[12px] flex pr-6 text-end"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Populars;
