// components/Maps.tsx
import React from "react";
import Image from "next/image";

// Aquí puedes reemplazar con cualquier imagen de mapa que tengas
import MockupMapImage from "../../../public/random-map.png";

const Map = () => {
  return (
    <div className="grid my-5">
      <div className="w-[290px] h-[300px] justify-self-center rounded-lg overflow-hidden shadow-md">
        <Image src={MockupMapImage} alt="Mockup Map" width={290} height={300} />
      </div>
    </div>
  );
};

export default Map;
