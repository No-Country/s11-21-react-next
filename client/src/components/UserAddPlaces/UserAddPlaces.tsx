"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Context } from "../../context/Context";
import { useContext } from "react";
import axios from "axios";

interface UserData {
  userData: {
    updateData: {};
    name: string;
    lastname: string;
    email: string;
    // password: string;
    phone: string;
    favorites: [];
    myPlaces: PlaceData[];
  };
}

interface PlaceData {
  imagesUrl: string[];
  placeName: string;
  zone: string;
}

export default function UserAddPlaces() {
  const { userId, setUserId, addPlacesNumber, setAddPlacesNumber } =
    useContext(Context);

  const [userData, setUserData] = useState<UserData>({
    userData: {
      updateData: {},
      name: "",
      lastname: "",
      email: "",
      // password: "",
      phone: "",
      favorites: [],
      myPlaces: [],
    },
  });

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `https://nearby-back.vercel.app/api/user/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          setUserData(response.data);
          // console.log(response.data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  useEffect(() => {
    if (userData.userData.myPlaces) {
      setAddPlacesNumber(userData.userData.myPlaces.length);
    }
  }, [userData]);

  return (
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 justify-center w-full gap-3">
      {userData.userData.myPlaces.map((place, index) => (
        <div key={index} className=" p-4">
          <div className="relative">
            {place.imagesUrl[0] && (
              <div className="aspect-square relative">
                <Image
                  src={place.imagesUrl[0].replace(/ /g, "%20")}
                  alt={`Card image 0`}
                  width={1080}
                  height={760}
                  className="w-full h-full -z-10 rounded-lg"
                />
                <div
                  className="absolute top-0 left-0 z-0 w-full h-full rounded-lg"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
                  }}
                ></div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 text-white pl-2 pb-2">
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-2">
                  {place.placeName}
                </p>
                <p className="text-xs font-medium leading-1">{place.zone}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
