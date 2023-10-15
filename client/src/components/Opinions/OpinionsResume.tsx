import Image from "next/image";
import React from "react";

const OpinionsResume = () => {
  return (
    <div className="w-[80%]">
      <h3 className="my-5 font-medium text-xs">Opiniones</h3>
      <div className="grid grid-cols-10">
        <div className="col-span-1 grid grid-rows-5 items-center text-xs font-medium">
          <div className="row-span-1">5</div>
          <div className="row-span-1">4</div>
          <div className="row-span-1">3</div>
          <div className="row-span-1">2</div>
          <div className="row-span-1">1</div>
        </div>

        <div className="col-span-5 grid grid-rows-5 items-center">
          <div className="row-span-1">
            <Image
              src="/Rectangle 4604.png"
              alt="full"
              width={140}
              height={100}
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/Rectangle 4605.png"
              alt="full"
              width={140}
              height={100}
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/Rectangle 4605.png"
              alt="full"
              width={140}
              height={100}
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/Rectangle 4605.png"
              alt="full"
              width={140}
              height={100}
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/Rectangle 4605.png"
              alt="full"
              width={140}
              height={100}
            />
          </div>
        </div>

        <div className="col-span-4 grid grid-rows-3 items-center justify-center">
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
  );
};

export default OpinionsResume;
