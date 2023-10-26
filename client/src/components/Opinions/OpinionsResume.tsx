import Image from "next/image";
import React from "react";

const OpinionsResume = () => {
  return (
    <div className="w-11/12 2xl:w-[60vw]">
      <div className="px-8 lg:px-10">
        <h3 className="my-5 font-semibold text-sm md:text-base lg:text-lg">
          Opiniones
        </h3>
        <div className="grid grid-cols-10 md:grid-cols-12 gap-x-0 md:gap-y-2">
          <div className="col-span-1 grid grid-rows-5 items-center text-xs font-medium text-center">
            <div className="row-span-1 text-xs">5</div>
            <div className="row-span-1 text-xs">4</div>
            <div className="row-span-1 text-xs">3</div>
            <div className="row-span-1 text-xs">2</div>
            <div className="row-span-1 text-xs">1</div>
          </div>

          <div className="col-span-5 md:col-span-8 grid grid-rows-5 items-center gap-y-1 md:gap-y-2">
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-4"></div>
            <div className="row-span-1 w-32 h-3 bg-[#FD7B03] rounded-lg md:w-full md:h-4"></div>
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-4"></div>
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-4"></div>
            <div className="row-span-1 w-32 h-3 bg-[#FFF4E0] rounded-lg md:w-full md:h-4"></div>
          </div>

          <div className="col-span-4 md:col-span-3 md:row-span-5 md:col-start-10 grid grid-rows-3 items-center justify-center">
            <div className="row-span-2 text-4xl font-bold m-auto">
              <p>4.0</p>
              <Image src="/Frame.png" alt="estrellas" width={60} height={100} />
            </div>
            <div className="row-span-2 mx-auto text-xs text-[#FFCF91] self-start font-medium">
              (10 comentarios)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsResume;
