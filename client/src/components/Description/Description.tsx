import React from "react";
import { FiMapPin } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

export default function Description() {
  return (
    <div className="w-11/12 2xl:w-1/2 text-[#000] justify-center">
      <div className="w-full justify-self-center flex justify-between px-6 mb-3">
        <div className="py-4 text-left">
          <h2 className="text-sm font-bold text-black mb-2">Descripción</h2>

          <p className="text-xs lg:text-sm xl:text-base text-justify text-black flex items-center justify-center rounded-full">
            El Jardín Japonés en Buenos Aires es una auténtica joya que merece
            ser explorada en detalle. Con una impresionante fusión de la
            estética japonesa y la naturaleza exuberante, este lugar ofrece un
            retiro tranquilo y cautivador en medio de la ciudad. ¡No te lo
            pierdas!
          </p>
          <br />

          <div className="text-xs lg:text-sm flex flex-row">
            <FiMapPin className="font-medium text-base lg:text-lg mr-2 text-[#FD7B03]" />
            <p
              className="text-[#FD7B03]
            font-medium leading-4"
            >
              Dirección:
              <span className="text-black ml-2 text-justify font-normal">
                Avenida Casares 3450, Buenos Aires, Argentina.
              </span>
            </p>
          </div>

          <br />

          <p className="text-xs lg:text-sm flex items-center">
            <span className="mr-2 text-[#FD7B03]">
              <LuClock3 className="font-medium text-base lg:text-lg" />
            </span>
            <span className="text-[#FD7B03] font-medium">Horario:</span>{" "}
            <span className="text-black ml-2">10:00 - 18:30 </span> hrs.
          </p>
        </div>
      </div>
    </div>
  );
}
