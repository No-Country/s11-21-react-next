"use client";
import React, { useEffect, useState } from "react";
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
    comments: CommentsData[]; // Inicializar como un arreglo vacío
  };
}

interface CommentsData {
  date: string;
  comment: string;
}

export default function UsersOpinions() {
  const {
    userId,
    setUserId,
    addPlacesNumber,
    setAddPlacesNumber,
    addCommentsNumber,
    setAddCommentsNumber,
  } = useContext(Context);

  const [userData, setUserData] = useState<UserData>({
    userData: {
      updateData: {},
      name: "",
      lastname: "",
      email: "",
      // password: "",
      phone: "",
      favorites: [],
      comments: [], // Inicializar como un arreglo vacío
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
          if (response.data.userData.comments) {
            setAddPlacesNumber(response.data.userData.comments.length);
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  const firstLetter = userData.userData.name.charAt(0).toUpperCase();

  useEffect(() => {
    if (userData.userData.comments) {
      setAddCommentsNumber(userData.userData.comments.length);
    }
  }, [userData]);

  return (
    <div className="w-full flex flex-wrap justify-left px-8 mt-8">
      {userData.userData.comments &&
        userData.userData.comments.map((comment, index) => (
          <div key={index} className="w-full mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-[#FD7B03] text-white w-[35px] h-[35px] flex text-center items-center justify-center text-xl semibold">
                {firstLetter}
              </div>
              <p className="text-sm md:text-base lg:text-lg font-medium">
                {userData.userData.name}
              </p>
            </div>
            <p className="text-xs text-[#FD7B03] mb-2 ml-1">{comment.date}</p>
            <p className="ml-1 text-sm md:text-base">{comment.comment}</p>
          </div>
        ))}
    </div>
  );
}
