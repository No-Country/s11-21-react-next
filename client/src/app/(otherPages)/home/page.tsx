"use client";
import React, { useEffect, useState } from "react";
import Portada from "@/components/Portada/Portada";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Populars from "@/components/Carousel/Headers/Populars";
import BestRated from "@/components/Carousel/Headers/BestRated";
import Recently from "@/components/Carousel/Headers/Recently";
import Formulario from "@/components/AlFormulario/AlFormulario";
import axios from "axios";

export default function Home() {
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [ratedPlaces, setRatedPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://nearby-back.vercel.app/api/place/mostPopulars")
      .then((response) => {
        console.log("API Response populars:", response.data);
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
        console.log("API Response rated:", response.data);
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
      <Populars popularPlaces={popularPlaces} /> {/* Pasa popularPlaces al componente Populars */}
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard data={popularPlaces} />
      </div>
      <BestRated />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard data={ratedPlaces} />
      </div>
      <Recently />
      <div className="flex overflow-x-auto overflow-hidden">
        <CarouselCard data={ratedPlaces} />
      </div>
      <Formulario />
    </main>
  );
}
