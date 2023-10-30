import OpinionCard from "@/components/OpinionCard/OpinionCard";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import Description from "@/components/Description/page";

import React from "react";

const Place = () => {
  return (
    <div className="flex flex-col items-center h-auto overflow-y-scroll">
      <TouristPlaceCard />
      <Description/>
      <OpinionsResume />
      <OpinionCard />
    </div>
  );
};

export default Place;
