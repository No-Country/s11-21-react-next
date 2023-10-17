import React from 'react'

export default function InfoForm(  {children,}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="text-center px-6">
        <h1 className='text-2xl font-semibold my-6'>¡Ayúdanos a encontrar joyas ocultas alrededor del mundo!</h1>
        <p className=' text-justify text-sm leading-6 text-[#000] mb-6'>Completa el siguiente formulario con tus datos y breve información del tesoro a descubrir. ¡Sólo tomará unos minutos! Serás redireccionado a la sección de solicitudes.</p>
      </div>

      {children}

      <div className="my-8  px-6 flex flex-col justify-center items-center">
        <p className='text-justify text-sm leading-6 text-[#000]'>Te informaremos cuando tu solicitud ha sido evaluada y cumpla con los requisitos de la comunidad viajera.</p>
        <button className=' w-48 h-10 rounded-lg bg-[#FD7B03] text-[#fff] mt-4 font-semibold border-2 hover:scale-110 duration-300 transition-all'>Continuar</button>
      </div>
    </main>  
    )
}
