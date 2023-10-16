import OpinionCard from "@/components/OpinionCard/OpinionCard";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import React from "react";

const Place = () => {
  return (
    <div className="flex flex-col h-auto overflow-y-scroll">
      <TouristPlaceCard />
      
      <OpinionCard />
    </div>
  );
};

export default Place;
