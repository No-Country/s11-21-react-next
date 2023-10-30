"use client";


import React, { useEffect, useState } from "react";
import Portada from "@/components/Portada/Portada";
import CarouselCard from "@/components/Carousel/CarouselCard";
import BestRated from "@/components/Carousel/Headers/BestRated";
import Recently from "@/components/Carousel/Headers/Recently";
import Formulario from "@/components/AlFormulario/AlFormulario";
import axios from "axios";
import Populars from "@/components/Carousel/Headers/Populars";


interface Place {
  placeId: string;
  data: {
    website: string;
    comments: any[]; 
    stars: number;
    category: string;
    description: string;
    imageUrl: string[];
    placeName: string;
    zone: string;
    socialNetworks: { instagram: string }[];
    views: number;
    longitude: string;
    latitude: string;
    createdBy: string;
  };
}

type CarouselPlace = {
  id: number;
  placeName: string;
  imageUrl: string[];
  zone: string;
  stars: number;
};


const convertToCarouselPlace = (place: Place): CarouselPlace => {
  return {
    id: parseInt(place.placeId),
    placeName: place.data.placeName,
    imageUrl: place.data.imageUrl,
    zone: place.data.zone,
    stars: place.data.stars,
  };
};

export default function Home() {
  const [popularPlaces, setPopularPlaces] = useState<CarouselPlace[]>([]);
  const [bestRatedPlaces, setBestRatedPlaces] = useState<CarouselPlace[]>([]);

  useEffect(() => {
    axios
      .get("https://nearby-back.vercel.app/api/place/mostPopulars")
      .then((response) => {
     
        const convertedPlaces = response.data.results.map(convertToCarouselPlace);
        setPopularPlaces(convertedPlaces);
      })
      .catch((error) => {
        console.error("Error al cargar los lugares populares", error);
      });

    axios
      .get("https://nearby-back.vercel.app/api/place/mostRated")
      .then((response) => {
        
        const convertedPlaces = response.data.results.map(convertToCarouselPlace);
        setBestRatedPlaces(convertedPlaces);
      })
      .catch((error) => {
        console.error("Error al cargar los lugares mejor evaluados", error);
      });
  }, []);

  return (
    <main className="flex flex-col h-auto">
      <Portada />
      <Populars popularPlaces={popularPlaces} />
      <div className="flex overflow-x-auto overflow-hidden">
      <CarouselCard places={popularPlaces} />
      </div>
      <BestRated />
      <div className="flex overflow-x-auto overflow-hidden">
      <CarouselCard places={bestRatedPlaces} />
      </div>
      <Recently />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard places={bestRatedPlaces} />
      </div>
      <Formulario />
    </main>
  );
}