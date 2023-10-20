import React from 'react'
import { Krona_One } from "next/font/google";
import Image from "next/image";
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import FormRegister from '@/components/FormRegister/Register';
const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function page() {

  return (
    // <main className='flex flex-col p-8 w-80 max-md:w-full m-auto'>
    <div className="bg-[url('/fondoLogin.png')] bg-contain w-full h-screen xl:bg-auto">
      <Link href="/login" className='absolute top-2 left-2 z-10'>
        <FaArrowLeft className="text-[#fff] max-md:text-[#000] cursor-pointer hover:scale-110 duration-300 transition-all absolute top-5 left-5"></FaArrowLeft>
      </Link>
      
      <div className="bg-white absolute border-2  px-8 py-4 top-40 w-full h-auto rounded-t-[40px] xl:w-[calc(100%-640px)] xl:right-0 xl:top-0 xl:rounded-none max-md:top-0 max-md:rounded-none">
        <Image src="/LogoOrange.png" className='mx-auto mt-8' alt='image-register' width={100} height={100}/>
        <h1 className={`${krona.className} my-2 text-3xl text-[#FD7B03] text-center`}>NearByTour</h1>
        <h2 className='text-center text-2xl font-semibold my-4 text-[#FD7B03]'>Registrarse</h2>
        <FormRegister></FormRegister>
      </div>
    </div>
    )
}
