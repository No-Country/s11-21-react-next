import React from 'react'
import SearchInput from '../Searcher/searchInput'

export default function Portada() {
  return (
    <>
      <div className='relative flex justify-center items-center -z-10 w-2/4 max-md:w-full -mt-6e'>
        <img src={'Portada.jpg'} alt="image-front-page" className=' object-contain w-full brightness-75'/>
        <p className='absolute bottom-16 left-10 text-lg text-[#FFFFFF] w-72 '>Comparte y descubre lugares únicos en todo el mundo.</p>
      </div>
      <SearchInput></SearchInput>
    </>
  )
}
