"use client";
import { Context } from "@/context/Context";
import { Comment, createComment } from "@/services/apiCall";
import React, { useContext, useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { toast } from "sonner";

export default function Review({idPlace}:{ idPlace: string }) {
  const {userId, setUserId} = useContext(Context)
  useEffect(()=>{
    const storedUserId = localStorage.getItem("userId")
    if(storedUserId){
      setUserId(storedUserId)
    }
  },[userId])

  const [formComment, setFormComment] = useState<Comment>({
    comment: "",
    stars:1
  })
  const registerComment  =  async (e:React.FormEvent) =>{
    e.preventDefault() 
    if(userId == ""){
      toast.warning('El usuario debe iniciar sesión.')
    }else{
      toast.success("El comentario fue registrado")
      setFormComment({ ...formComment, comment: "" })
      const response = await createComment(formComment, idPlace, userId)
      console.log(response)
      console.log(userId)
    }
  }

  const updateComment = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setFormComment({...formComment, comment: e.target.value})
  }

  const [hoveredStars, setHoveredStars] = useState(Array(5).fill(false));
  const handleHover = (index: number) => {
    const newHoveredStars = [...hoveredStars];
    for (let i = 0; i < newHoveredStars.length; i++) {
      newHoveredStars[i] = i <= index;
    }
    setHoveredStars(newHoveredStars);
    setFormComment({...formComment, stars: index+1})
  };

  return (
    <div className="w-11/12 2xl:w-[60vw] h-auto px-6 text-[#000]  justify-center">
      <form className="w-full px-2 border-t-2 border-[#FFCF91] py-8" onSubmit={registerComment}>
        <h1 className="font-semibold text-sm lg:text-base">
          ¿Te gustaría dar tu opinión del lugar?
        </h1>
        <h2 className=" font-medium text-xs lg:text-base">
          ¿Cómo fue tu experiencia?
        </h2>
        <span className="flex ">
          {hoveredStars.map((isHovered, index) => (
            <RiStarSFill 
              className={`text-${
                isHovered ? "[#FD7B03]" : "[#FFCF91]"
              } hover:text-[#FD7B03] text-lg`}
              key={index}
              onMouseEnter={() => handleHover(index)}
              onClick={() => handleHover(index)}
            />
          ))}
        </span>
        <p className="font-semibold text-xs lg:text-base">Escribe tu opinión</p>
        <textarea required value={formComment.comment} minLength={20} className=" border-2 border-[#777] p-2 w-full h-32 rounded-lg mt-2  max-h-60" onChange={updateComment}></textarea>
        <div className="flex justify-center items-center">
          <button className="bg-[#FD7B03] w-full lg:w-2/4   h-12 mt-2 rounded-lg text-[#fff] text-sm lg:text-base font-semibold">
            Enviar opinión
          </button>
        </div>
      </form>
    </div>
  );
}
