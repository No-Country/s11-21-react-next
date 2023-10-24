// components/Maps.tsx
import React from "react";
import Image from "next/image";

// Aquí puedes reemplazar con cualquier imagen de mapa que tengas
import MockupMapImage from "../../../public/random-map.png";

const Map = () => {
  return (
    <div className="flex my-5 justify-center">
      <div className="w-4/5 h-auto md:w-[80vw] md:h-auto lg:w-[75vw] xl:w-[60vw] rounded-lg overflow-hidden shadow-md">
        <Image
          src={MockupMapImage}
          alt="Mockup Map"
          width={0}
          height={0}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Map;
