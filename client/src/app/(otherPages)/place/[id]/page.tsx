'use client'
import Description from '@/components/Description/Description'
import Review from '@/components/FormReview/Review'
import OpinionCard from '@/components/OpinionCard/OpinionCard'
import OpinionsResume from '@/components/Opinions/OpinionsResume'
import TouristPlaceCard from '@/components/TouristPlaceCard/TouristPlaceCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'sonner'

export interface Root {
  placeData: PlaceData
}

export interface PlaceData {
  imagesUrl: string[]
  website: string
  latitude: string
  description: string
  createdBy: string
  zone: string
  socialNetworks: any[]
  category: string
  placeName: string
  longitude: string
  stars: number
  comments: Comment[]
  views: number
}

export interface Comment {
  date?: string
  name: string
  comment: string
  id: string
  stars: number
}


export default function Page({ params }: { params: { id: string } }) {
  const [dataPlace, setDataPlace] = useState<PlaceData>()
  const {id} = params
  
  useEffect(() => {
    axios
      .get(`https://nearby-back.vercel.app/api/place/getPlace?placeId=${id}`)
      .then((response) => {
        console.log("DATA PLACE", response.data);
        setDataPlace(response.data.placeData); 
      })
      .catch((error) => {
        console.error("Error al cargar los lugares populares", error);
      });
  }, [id]);

  return (
    
    <main className="flex flex-col items-center h-auto w-full">
      <Toaster richColors/>
      <TouristPlaceCard />
      <Description />
      <Review idPlace={id}/>
      <OpinionsResume />
      {dataPlace && <OpinionCard comment={dataPlace}/>}
    </main>
  )
}
