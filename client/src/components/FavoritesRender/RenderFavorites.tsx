"use client";
import CardFavorite from "@/components/FavoritesRender/CardFavorite/CardFavorite";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Context";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  Favorite,
  addFavorite,
  getFavorites,
  removeFavorite,
} from "@/services/apiCall";

export default function RedenderFavorites() {
  const { userId, setUserId } = useContext(Context);
  // console.log(userId);

  const [favorite, setFavorite] = useState<Favorite[]>([]);

  useEffect(() => {
    const storeUserId = localStorage.getItem("userId");

    if (storeUserId) {
      setUserId(storeUserId);
    }
  }, [setUserId]);

  useEffect(() => {
    if (userId) {
      getFavorites(userId)
        .then((response) => {
          // console.log("Respuesta de getFavorites:", response);
          setFavorite(response);
        })
        .catch((error) => {
          console.error(error, "error obteniendo favoritos");
        });
    }
  }, [userId]);

  const handleRemoveFavorite = async (cardId: string) => {
    if (userId) {
      const isFavorite = favorite.some((item) => item.placeId === cardId);

      if (isFavorite) {
        try {
          await removeFavorite(userId, cardId);
        } catch (error) {
          console.error(error, "error dando dislike");
        }
      }
    }
  };

  async function handleAddFavorite(cardId: string) {
    if (userId) {
      try {
        await addFavorite(userId, cardId);
      } catch (error) {
        console.error(error, "error al agregar a favoritos");
      }
    }
  }

  return (
    <div className="px-8 my-4 flex flex-col min-h-[70vh] w-full md:grid md:my-6 md:items-center md:m-auto md:w-11/12 xl:w-4/5">
      <div className="ml-1 mb-3 text-start text-sm font-bold text-black">
        Favoritos ({favorite.length})
      </div>
      {favorite.length === 0 ? (
        <div className="w-full h-[70vh] flex flex-col justify-center gap-5 items-center text-center text-[#FFCF91]">
          <div>
            <FaMapMarkerAlt className="w-52 h-24 md:w-72 md:h-40 xl:w-96 xl:h-56" />
          </div>
          <div className="text-center mt-4 md:mt-8 leading-5">
            <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl">
              ¡Todavía no tienes <br /> ningún sitio en favoritos!
            </h1>
            <p className="text-base md:text-2xl xl:text-4xl mt-5">
              Cuando lo agregues se verá en <br /> esta página
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-8 xl:grid xl:grid-cols-3 xl:gap-10">
            {favorite.map((item) => (
              <CardFavorite
                key={item.placeId}
                item={item}
                onRemove={() => handleRemoveFavorite(item.placeId)}
                onAdd={() => handleAddFavorite(item.placeId)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
