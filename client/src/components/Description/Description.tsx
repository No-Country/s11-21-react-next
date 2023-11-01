import React from "react";
import { FiMapPin } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

interface DescriptionProps {
  description: string;
  zone: string;
  
}

const Description: React.FC<DescriptionProps> = ({ description, zone }) => {
  return (
    <div className="w-11/12 2xl-w-1/2 text-[#000] justify-center">
      <div className="w-full justify-self-center flex justify-between px-6 mb-3">
        <div className="py-4 text-left">
          <h2 className="text-sm font-bold text-black mb-2">Descripción</h2>

          <p className="text-xs lg:text-sm xl:text-base text-justify text-black flex items-center justify-center rounded-full">
            {description}
          </p>
          <br />

          <div className="text-xs lg:text-sm flex flex-row">
            <FiMapPin className="font-medium text-base lg:text-lg mr-2 text-[#FD7B03]" />
            <p className="text-[#FD7B03] font-medium leading-4">
              Dirección:
              <span className="text-black ml-2 text-justify font-normal">
                {zone}
              </span>
            </p>
          </div>

          <br />

          <p className="text-xs lg:text-sm flex items-center">
            <span className="mr-2 text-[#FD7B03]">
              <LuClock3 className="font-medium text-base lg-text-lg" />
            </span>
            <span className="text-[#FD7B03] font-medium">Horario:</span>{" "}
            <span className="text-black ml-2">horario</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;