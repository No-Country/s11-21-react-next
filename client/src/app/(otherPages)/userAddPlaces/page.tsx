"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Context } from "./../../../context/Context";
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
          console.log(response.data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    if (userData.userData.myPlaces) {
      setAddPlacesNumber(userData.userData.myPlaces.length);
    }
  }, [userData]);

  return (
    <div className="flex flex-wrap justify-center w-full px-8">
      {userData.userData.myPlaces.map((place, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="relative">
            {place.imagesUrl[0] && (
              <Image
                src={place.imagesUrl[0].replace(/ /g, "%20")}
                alt={`Card image 0`}
                width={280}
                height={280}
                className="w-full h-full -z-10 rounded-lg mb-6"
              />
            )}
            <div className="absolute bottom-0 left-0 text-white pb-8 pl-4">
              <p className="text-sm font-medium leading-6">{place.placeName}</p>
            </div>
            <div className="absolute bottom-0 left-0 text-white pb-2 pl-4">
              <p className="text-xs font-medium leading-6">{place.zone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
