import React from 'react';

export default function Description() {
  return (
    <div className="grid my-3">
      <div className="w-full md:w-[80%] justify-self-center text-[14px] flex justify-between mb-3 md:mx-auto md:text-center">
        <div className="py-4 text-left">
          <h2 className="text-xl font-bold text-#000 mb-2">Descripción</h2>

          <p className="text-sm text-gray-700 flex items-center justify-center rounded-full text-[#fff]">
            El Jardín Japonés en Buenos Aires es una auténtica joya que merece ser explorada en detalle. Con una impresionante fusión de la estética japonesa y la naturaleza exuberante, este lugar ofrece un retiro tranquilo y cautivador en medio de la ciudad. ¡No te lo pierdas!
          </p>
          <br />

          <p className="text-sm flex items-center">
            <span className="mr-2 text-[#FD7B03]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FD7B03]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <span className="text-[#FD7B03]">Dirección:</span>
            <span className="text-gray-700 ml-2">Avenida Casares 3450, Buenos Aires, Argentina.</span>
          </p>

          <br />

          <p className="text-sm flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FD7B03]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="text-[#FD7B03]">Horario:</span> 10:00 - 18:30 hrs.
          </p>
        </div>
      </div>
    </div>
  );
}
