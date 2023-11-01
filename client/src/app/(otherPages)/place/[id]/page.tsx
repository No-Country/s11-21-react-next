"use client"

import React, { useEffect, useState } from "react";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import Description from "@/components/Description/Description";
import Review from "@/components/FormReview/Review";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import OpinionCard from "@/components/OpinionCard/OpinionCard";
import { useParams } from "next/navigation";
import axios from "axios";

interface PlaceData {
  description: string;
  zone: string;
  placeName: string;
  socialNetworks: string;
  latitude:number;
  longitude:number;
  imagesUrl: string[];
  stars: number;
  category:string;
  
}

const Place = () => {
  const params = useParams();
  const { id } = params;
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);

  useEffect(() => {
    if (id) {
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
      <TouristPlaceCard placeName={placeData.placeName} zone={placeData.zone} latitude={placeData.latitude} longitude={placeData.longitude} imagesUrl={placeData.imagesUrl} stars={placeData.stars} category={placeData.category} />

       <Description
         description={placeData.description}
         zone={placeData.zone}
         socialNetworks={placeData.socialNetworks}
       />
       <Review  />
       <OpinionsResume  />
       <OpinionCard  />
     </>
      ) : (
        <p>Cargando datos del lugar...</p>
      )}
    </div>
  );
};

export default Place;


 