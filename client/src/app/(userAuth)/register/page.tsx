import React from "react";
import { Krona_One } from "next/font/google";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import FormRegister from "@/components/FormRegister/Register";
const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function page() {
  return (
    <main className="bg-[url('/fondoLogin.png')] bg-contain w-full h-screen xl:bg-auto">
      <Link href="/login" className='absolute top-2 left-2 z-10'>
        <FaArrowLeft className="text-[#fff] max-md:text-[#000] cursor-pointer hover:scale-110 duration-300 transition-all absolute top-5 left-5"></FaArrowLeft>
      </Link>
      
      <div className="bg-white absolute px-8 py-8 top-40 w-full h-screen rounded-t-[40px] xl:w-[calc(100%-640px)] xl:right-0 xl:top-0 xl:rounded-none max-md:top-0 max-md:rounded-none max-md:h-auto">
        <Image src="/LogoLarge.png" className='mx-auto m max-md:mt-2' alt='logo' width={100} height={100}/>
        <h1 className={`${krona.className} my-2 text-2xl text-[#FD7B03] text-center`}>NearByTour</h1>
        <h2 className='text-center text-xl font-semibold mt-4 text-[#FD7B03]'>Registrarse</h2>
        <FormRegister></FormRegister>
      </div>
    </main>
    )
}