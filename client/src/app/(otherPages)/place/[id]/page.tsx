"use client"

import React, { useEffect, useState } from "react";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import Description from "@/components/Description/Description";
import Review from "@/components/FormReview/Review";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import OpinionCard from "@/components/OpinionCard/OpinionCard";
import axios from "axios";

export interface PlaceData {
  imagesUrl: string[]
  website: string
  latitude: string
  description: string
  createdBy: string
  zone: string
  socialNetworks: string;
  category: string
  placeName: string
  longitude: string
  comments: Comment[]
  stars: number
  views: number
}

export interface Comment {
  date?: string
  name: string
  comment: string
  id: string
  stars: number
}


const Place = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);

  useEffect(() => {
    if (id !== "") {
      axios
        .get(`https://nearby-back.vercel.app/api/place/getPlace?placeId=${id}`)
        .then((response) => {
          setPlaceData(response.data.placeData);
        })
        .catch((error) => {
          console.error('Error al cargar datos del lugar', error);
        });
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center h-auto w-full">
      {placeData ? (
       <>
       <TouristPlaceCard placeName={placeData.placeName}  zone={placeData.zone} />
       <Description
         description={placeData.description}
         zone={placeData.zone}
         socialNetworks={placeData.socialNetworks}
       />
      <Review idPlace={id}/>       
      <OpinionsResume dataPlace={placeData}/>
      <OpinionCard comment={placeData}></OpinionCard>
     </>
      ) : (
        <div className=" h-[35rem]">
          <p>Cargando datos del lugar...</p>
        </div>
      )}
    </div>
  );
};

export default Place;


 
