import React from 'react'
import { Krona_One } from "next/font/google";
import Image from "next/image";
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function Register() {

  return (
      <main className='flex flex-col p-8 w-80 max-md:w-full m-auto'>
        <Link href="/login" className='w-6'>
          <FaArrowLeft className="text-[#000] cursor-pointer hover:scale-110 duration-300 transition-all"></FaArrowLeft>
        </Link>
        <Image src="/LogoOrange.png" className='mx-auto mt-2' alt='image-register' width={100} height={100}/>
        <h1 className={`${krona.className} my-2 text-3xl text-[#FD7B03] text-center`}>NearByTour</h1>
        <h2 className='text-center text-2xl font-semibold my-4 text-[#FD7B03]'>Registrarse</h2>
        <form className='flex flex-col'>
          <label className='text-[#000] text-base font-semibold' htmlFor="name">Nombre</label>
          <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' type="text"/>
          <label className='text-[#000] text-base font-semibold' htmlFor="email">Email</label>
          <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' type="email"/>
          <label className='text-[#000] text-base font-semibold' htmlFor="phone">Número de teléfono</label>
          <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' type="tel"/>
          <label className='text-[#000] text-base font-semibold' htmlFor="password1">Contraseña</label>
          <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' type="password"/>
          <label className='text-[#000] text-base font-semibold' htmlFor="password2">Confirmar contraseña</label>
          <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' type="password"/>
          <button type='submit' className='text-[#fff] w-full  max-md:w-auto rounded-lg my-8 bg-[#FD7B03] h-10 hover:scale-110 duration-300 transition-all'>Registrarse</button>
        </form>
      </main>
    )
}
