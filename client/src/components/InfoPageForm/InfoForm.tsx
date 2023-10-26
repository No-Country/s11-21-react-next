import React from "react";

export default function InfoForm({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="text-center px-6">
        <h1 className="text-2xl font-semibold my-6">
          ¡Ayúdanos a encontrar joyas ocultas alrededor del mundo!
        </h1>
        <p className=" text-justify text-sm leading-6 text-[#000] mb-6">
          Completa el siguiente formulario con tus datos y breve información del
          tesoro a descubrir. ¡Sólo tomará unos minutos! Serás redireccionado a
          la sección de solicitudes.
        </p>
      </div>

      {children}
    </main>
  );
}
