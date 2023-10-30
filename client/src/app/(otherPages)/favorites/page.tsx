"use client";
import AlFormulario from "@/components/AlFormulario/AlFormulario";
import CardFavorite from "@/components/CardFavorite/CardFavorite";
import { useState } from "react";

type Favorite = {
  id: number; //tocará cambiar por el uuid
  imagesUrl: string;
  placeName: string;
  zone: string;
  stars: number;
};

const favoriteData: Favorite[] = [
  {
    id: 1,
    zone: "Magdalena, Colombia",
    placeName: "Parque nacional Tayrona",
    stars: 4,
    imagesUrl: "/españa.jpg",
  },
  {
    id: 2,
    placeName: "Borde Costero",
    imagesUrl: "/chile.jpg",
    zone: "Viña del Mar, Chile",
    stars: 5,
  },
  {
    id: 3,
    placeName: "Calle Carabobo",
    imagesUrl: "/venezuela.jpg",
    zone: "Venezuela",
    stars: 3,
  },
  {
    id: 4,
    placeName: "Cabo San Lucas",
    imagesUrl: "/mexico.jpg",
    zone: "CDM, México",
    stars: 5,
  },
  {
    id: 5,
    placeName: "Catedral Cuzco",
    imagesUrl: "/peru.jpg",
    zone: "Cuzco, Perú",
    stars: 3,
  },
  {
    id: 6,
    placeName: "Calle Carabobo",
    imagesUrl: "/venezuela.jpg",
    zone: "Venezuela",
    stars: 4,
  },
  {
    id: 7,
    placeName: "Cabo San Lucas",
    imagesUrl: "/mexico.jpg",
    zone: "CDM, México",
    stars: 5,
  },
  {
    id: 8,
    placeName: "Catedral Cuzco",
    imagesUrl: "/peru.jpg",
    zone: "Cuzco, Perú",
    stars: 3,
  },
];

export default function Page() {
  const [favorite, setFavorite] = useState<Favorite[]>(favoriteData);

  const handleRemoveFavorite = (cardId: number) => {
    const updatedFavorites = favorite.filter((item: any) => item.id !== cardId);
    setFavorite(updatedFavorites);
  };

  return (
    <div className="h-auto">
      <div className="px-8 my-4 flex flex-col min-h-[70vh] w-full md:grid md:my-6 md:items-center md:m-auto md:w-11/12 xl:w-4/5">
        {favorite.length === 0 ? (
          <div className="w-11/12 h-[70vh] justify-center items-center text-center">
            <div>No hay favoritos. Puedes agregar algunos.</div>
          </div>
        ) : (
          <div className="">
            <div className="ml-1 mb-3 text-start text-sm font-bold text-black">
              Favoritos ({favorite.length})
            </div>
            <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-8 xl:grid xl:grid-cols-3 xl:gap-10">
              {favorite.map((item) => (
                <CardFavorite
                  key={item.id}
                  favoriteData={item}
                  onRemove={() => handleRemoveFavorite(item.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <AlFormulario />
    </div>
  );
}
