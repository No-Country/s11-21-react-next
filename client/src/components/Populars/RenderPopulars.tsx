"use client";
import CardFavorite from "@/components/FavoritesRender/CardFavorite/CardFavorite";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Context";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getPopulars } from "@/services/apiCall";

export default function RedenderPopulars() {
  const { userId, setUserId } = useContext(Context);
  const [populars, setPopulars] = useState([]);
  // console.log(userId);

  useEffect(() => {
    const storeUserId = localStorage.getItem("userId");

    if (storeUserId) {
      setUserId(storeUserId);
    }
  }, [setUserId]);

  useEffect(() => {
    if (userId) {
      getPopulars()
        .then((response) => {
          // console.log("Respuesta de getFavorites:", response);
          setPopulars(response.topPlaces);
        })
        .catch((error) => {
          console.error(error, "error obteniendo populares");
        });
    }
  }, [userId]);

  return (
    <div className="px-8 my-4 flex flex-col min-h-[70vh] w-full md:grid md:my-6 md:items-center md:m-auto md:w-11/12 xl:w-4/5">
      <div className="ml-1 mb-3 text-start text-sm font-bold text-black">
        Mas populares ({populars.length})
      </div>
      {populars.length === 0 ? (
        <div className="w-full h-[70vh] flex flex-col justify-center gap-5 items-center text-center text-[#FFCF91]">
          <div className="text-center mt-4 md:mt-8 leading-5">
            <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl">
              Hubo un error obteniendo los sitios populares
            </h1>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-8 xl:grid xl:grid-cols-3 xl:gap-10">
            {populars &&
              populars.map((item) => (
                <CardFavorite
                  key={populars.indexOf(item)}
                  item={item}
                  onRemove={() => {}}
                  onAdd={() => {}}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
