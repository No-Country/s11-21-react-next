"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import TouristPlaceCard from "@/components/TouristPlaceCard/TouristPlaceCard";
import Description from "@/components/Description/Description";
import Review from "@/components/FormReview/Review";
import OpinionsResume from "@/components/Opinions/OpinionsResume";
import OpinionCard from "@/components/OpinionCard/OpinionCard";
import axios from "axios";
import {
  PlaceData,
  addFavorite,
  getFavorites,
  removeFavorite,
} from "@/services/apiCall";
import Logo from "../../../../../public/logoLoader.png";
import { Context } from "@/context/Context";
import { toast } from "sonner";
import { ClimbingBoxLoader } from "react-spinners";

const Place = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [placeData, setPlaceData] = useState<PlaceData>();
  const [isLiked, setIsLiked] = useState(false);
  const { userId } = useContext(Context);

  useEffect(() => {
    if (id !== "") {
      axios
        .get(`https://nearby-back.vercel.app/api/place/getPlace?placeId=${id}`)
        .then(async (response) => {
          setPlaceData(response.data.placeData);
          if (userId) {
            const userFavorites = await getFavorites(userId);
            const isFavorite = userFavorites.some(
              (item) => item.placeId === id
            );
            setIsLiked(isFavorite);
          }
        })
        .catch((error) => {
          console.error("Error al cargar datos del lugar", error);
        });
    }
  }, [id, userId]);

  const handleLikeClick = async () => {
    if (!userId) {
      toast.warning("Por favor, inicia sesión para agregar a tus favoritos");
      return;
    }
    if (isLiked) {
      try {
        await removeFavorite(userId, id);
        setIsLiked(false);
      } catch (error) {
        console.error(error, "error dando dislike");
      }
    } else {
      try {
        await addFavorite(userId, id);
        setIsLiked(true);
        toast.success("Lugar agregado a tus favoritos");
      } catch (error) {
        console.error(error, "error al agregar a favoritos");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-auto w-4/5 m-auto max-md:w-full">
      {placeData ? (
        <>
          <TouristPlaceCard
            placeName={placeData.placeName}
            zone={placeData.zone}
            latitude={placeData.latitude}
            longitude={placeData.longitude}
            imagesUrl={placeData.imagesUrl}
            stars={placeData.stars}
            category={placeData.category}
            isLiked={isLiked}
            onLikeClick={handleLikeClick}
          />

          <Description
            description={placeData.description}
            zone={placeData.zone}
            socialNetworks={placeData.socialNetworks}
          />
          <Review idPlace={id} />
          <OpinionsResume dataPlace={placeData} />
          <OpinionCard comment={placeData.comments}></OpinionCard>
        </>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <ClimbingBoxLoader
              color={"#FD7B03"}
              loading={true}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p className="text-[#FD7B03] text-base md:text-4xl font-medium mt-16">
              Aguarde mientras carga el sitio
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Place;
