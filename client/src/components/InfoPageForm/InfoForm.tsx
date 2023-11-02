import React from "react";

export default function InfoForm({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="text-center px-6 mx-auto">
        <h1 className="text-2xl font-semibold my-6 md:text-center md:w-[584px] mx-auto">
          ¡Ayúdanos a encontrar joyas ocultas alrededor del mundo!
        </h1>
        <p className=" text-justify text-sm leading-6 text-[#000] mb-6 md:w-[90%] md:mx-auto md:text-center ">
          Completa el siguiente formulario con tus datos y breve información del
          tesoro a descubrir. ¡Sólo tomará unos minutos! Serás redireccionado a
          la sección de solicitudes.
        </p>
      </div>

      {children}
    </main>
  );
}
