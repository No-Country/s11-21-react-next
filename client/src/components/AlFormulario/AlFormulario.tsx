import Link from "next/link";
import React from "react";

export default function Formulario() {
  return (
    <div className="w-screen top-[1258px] left-[-1px] bg-[#FFF4E0] p-[10%] lg:p-8 flex flex-col items-center">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4">
        Te gustaría agregar una atracción?
      </h1>
      <p className="text-sm  md:text-base lg:text-lg text-justify">
        ¡Comparte tu descubrimiento! Ayuda a otros viajeros a encontrar joyas
        ocultas alrededor del mundo.
      </p>
      <Link href={"/form"}>
        <button className="bg-[#FD7B03] text-white my-2 w-full md:w-[287px] h-[40px] md:h-[40px] p-2 md:p-[9px 97px 9px 97px] rounded-[5px] hover:opacity-90">
          Llenar formulario
        </button>
      </Link>

    </div>
  );
}
