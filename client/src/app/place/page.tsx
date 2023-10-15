import OpinionCard from "@/components/OpinionCard/OpinionCard";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import React from "react";

const Place = () => {
  return (
    <div className="flex flex-col items-center h-auto overflow-y-scroll">
      <OpinionsResume />
      <OpinionCard />
    </div>
  );
};

export default Place;
