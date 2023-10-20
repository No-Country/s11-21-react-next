import React from 'react';
import Link from 'next/link'


export default function ToForm() {
  return (
    <div className="w-full h-[200px] bg-[#FFF4E0] p-4 lg:p-8 flex flex-col justify-center items-center mx-auto text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-justify">
        Te gustaría agregar una atracción?
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-justify">
        ¡Comparte tu descubrimiento! Ayuda a otros viajeros a encontrar joyas ocultas alrededor del mundo.
      </p>
      <div className="flex-grow mt-4 md:mt-6 lg:mt-8">
      <Link href="/form">
        <button
          className="bg-[#FD7B03] text-white w-full md:w-[287px] h-[40px] md:h-[40px] p-2 md:p-[9px 97px 9px 97px] rounded-[5px] hover:opacity-90"
        >
          Llenar formulario
        </button>
        </Link>
      </div>
    </div>
  );
}
