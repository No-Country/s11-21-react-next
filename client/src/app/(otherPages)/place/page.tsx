"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import Description from "@/components/Description/Description";
import Review from "@/components/FormReview/Review";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import OpinionCard from "@/components/OpinionCard/OpinionCard";
import axios from 'axios';

const Place = () => {
  const router = useRouter();
  const { id } = router.query; // Obtiene el parámetro 'id' de la URL

  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    if (id) {
      // Realiza una solicitud GET para obtener los datos del lugar con 'id'
      axios.get(`https://nearby-back.vercel.app/api/place/getPlace?placeId=${id}`)
        .then((response) => {
          // Establece los datos del lugar en 'placeData'
          setPlaceData(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener los datos del lugar', error);
        });
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center h-auto w-full">
      {placeData ? (
        <>
          <TouristPlaceCard data={placeData} />
          <Description data={placeData} />
          <Review data={placeData} />
          <OpinionsResume data={placeData} />
          <OpinionCard data={placeData} />
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Place;
