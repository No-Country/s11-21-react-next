import React from 'react'
import SearchInput from '../Searcher/searchInput'
import Image from "next/image";

export default function Portada() {
  return (
    <>
      <div className='relative flex justify-center items-center -z-10 w-2/4 max-md:w-full -mt-6e'>
        <Image src='/Portada.jpg' alt="image-front-page" className=' object-contain brightness-75 w-fit' height={500} width={500}/>
        <span className='absolute bottom-16 left-10'>
          <h1 className='text-[#fff] text-xl font-extralight'>NearByTour</h1>
          <p className=' text-lg text-[#FFFFFF] w-72 '>Comparte y descubre lugares únicos en todo el mundo.</p>
        </span>
      </div>
      <SearchInput></SearchInput>
    </>
  )
}
