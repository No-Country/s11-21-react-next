"use client"

import OpinionCard from "@/components/OpinionCard/OpinionCard";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import React from "react";
import Review from "@/components/FormReview/Review";
import Description from "@/components/Description/Description";
import { useRouter } from "next/navigation";


const Place = () => {
 
  return (
    <div className="flex flex-col items-center h-auto w-full">
        <>
          <TouristPlaceCard  />
          <Description  />
          <Review />
          <OpinionsResume />
          <OpinionCard />
        </>
     
    </div>
  );
};

export default Place;