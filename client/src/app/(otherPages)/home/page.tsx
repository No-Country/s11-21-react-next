"use client";
import React, { useEffect, useState } from "react";
import Portada from "@/components/Portada/Portada";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Populars from "@/components/Carousel/Headers/Populars";
import BestRated from "@/components/Carousel/Headers/BestRated";
import Recently from "@/components/Carousel/Headers/Recently";
import Formulario from "@/components/AlFormulario/AlFormulario";
import axios from "axios";
import SkelettonCard from "@/components/Carousel/SkelettonCard";

export default function Home() {
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [ratedPlaces, setRatedPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://nearby-back.vercel.app/api/place/mostPopulars")
      .then((response) => {
        if (response.data.topPlaces && Array.isArray(response.data.topPlaces)) {
          setPopularPlaces(response.data.topPlaces.slice(0, 5)); 
        } else {
          console.error("No se encontraron resultados en la respuesta de lugares más populares");
        }
      })
      .catch((error) => {
        console.error("Error al cargar los lugares populares", error);
      });

    axios
      .get("https://nearby-back.vercel.app/api/place/mostRated")
      .then((response) => {
        
        if (response.data.results && Array.isArray(response.data.results)) {
          setRatedPlaces(response.data.results.slice(0, 5)); 
        } else {
          console.error("No se encontraron resultados en la respuesta de lugares mejor evaluados");
        }
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
        {popularPlaces.length == 0 ?
        <SkelettonCard/>
        :<CarouselCard data={popularPlaces} />}
      </div>
      <BestRated />
      <div className="flex overflow-x-auto overflow-hidden">
        {popularPlaces.length == 0 ?
          <SkelettonCard/>
          :<CarouselCard data={ratedPlaces} />}
      </div>
      <Recently />
      <div className="flex overflow-x-auto overflow-hidden">
        {popularPlaces.length == 0 ?
          <SkelettonCard/>
          :<CarouselCard data={ratedPlaces} />}
      </div>
      <Formulario />
    </main>
  );
}
