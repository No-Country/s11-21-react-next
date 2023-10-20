import React from 'react'
import { Krona_One } from "next/font/google";
import Image from "next/image";
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import FormRegister from '@/components/FormRegister/Register';
const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function page() {


  return (
      <main className='flex flex-col p-8 w-80 max-md:w-full m-auto'>
        <Link href="/login" className='w-6'>
          <FaArrowLeft className="text-[#000] cursor-pointer hover:scale-110 duration-300 transition-all"></FaArrowLeft>
        </Link>
        <Image src="/LogoOrange.png" className='mx-auto mt-2' alt='image-register' width={100} height={100}/>
        <h1 className={`${krona.className} my-2 text-3xl text-[#FD7B03] text-center`}>NearByTour</h1>
        <h2 className='text-center text-2xl font-semibold my-4 text-[#FD7B03]'>Registrarse</h2>
        <FormRegister></FormRegister>

      </main>
    )
}
