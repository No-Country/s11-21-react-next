import React from 'react'
import Image from "next/image";
import { Krona_One } from "next/font/google";
import { AiOutlineInstagram, AiOutlineMail, AiOutlineQuestionCircle } from 'react-icons/ai'
import { FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

const krona = Krona_One({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className='relative h-auto w-full  bg-[#FD7B03] p-7'>
        <Link href="#">
          <FaChevronUp className=" absolute -top-5 right-5 cursor-pointer hover:scale-110 transition-all duration-300 text-[#FD7B03] shadow-lg shadow-zinc-700/50 w-10 h-10 rounded-full p-2 bg-[#FFCF91]"></FaChevronUp>
        </Link>
        <div className=" leading-7">
          <h1 className='text-[#fff] text-lg font-semibold'>NearByTour</h1>
          <p className='text-[#fff] text-justify'>Comparte y descubre lugares únicos en todo el mundo. Contribuye a la comunidad de viajeros compartiendo tus tesoros ocultos y experiencias de viaje.</p>
        </div>
        <div className="my-4">
          <h2 className='text-[#fff] text-lg leading-7'>Contáctanos</h2>
          <p className='text-[#fff] flex items-center text-sm'><AiOutlineMail className=" text-2xl mr-2"></AiOutlineMail>Escribénos un mensaje</p>
          <p className='text-[#fff] flex items-center text-sm'><AiOutlineQuestionCircle className=" text-2xl mr-2"></AiOutlineQuestionCircle>Consulta nuestras preguntas frecuentes</p>
        </div>
        <div className="mb-4">
          <p className='text-[#fff] text-lg'>Síguenos</p>
          <p className='text-[#fff] flex items-center text-sm'><AiOutlineInstagram className=" text-2xl mr-2"></AiOutlineInstagram>@nearbytour</p>
        </div>
        <hr />
        <div className="flex mt-2 justify-center items-center cursor-pointer  transition-all duration-300 hover:scale-110">
          <Image src="/LOGO_NT-01 1.png" alt="logo" width={50} height={50} />
          <h1 className={`${krona.className} text-[#fff]  text-xl font-extralight `}>NearByTour</h1>
        </div>
    </footer>
  )
}
