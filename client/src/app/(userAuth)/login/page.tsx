import Input from "@/components/InputAuth/Input";
import { Krona_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const krona = Krona_One({ weight: "400", subsets: ["latin"] });
const Page = () => {
  return (
    <div className="bg-[url('/fondoLogin.png')] bg-contain w-screen h-screen xl:bg-auto">
      <div className="absolute top-4 right-4">
        <Link href="/home">
          <AiOutlineClose color="white" size="24px" />
        </Link>
      </div>
      <div className="bg-white absolute top-40 w-screen h-screen rounded-t-[40px] xl:w-[calc(100%-640px)] xl:right-0 xl:top-0 xl:rounded-none">
        <Image
          className="mx-auto py-7"
          src={"/LogoLarge.png"}
          alt="logo"
          width={100}
          height={100}
        />

        <h1
          className={`${krona.className} text-[36px] text-[#FD7B03] text-center`}
        >
          NearByTour
        </h1>
        <p className="font-semibold text-2xl text-center text-[#FD7B03]">
          Iniciar sesión
        </p>
        <form className="w-[80%] md:max-w-[50%] flex flex-col items-center mx-auto">
          <Input
            label="Email"
            placeholder="rafaric@yahoo.com.ar"
            type="email"
            name="email"
          />
          <Input
            label="Contraseña"
            placeholder="********"
            type="password"
            extra="¿Olvidaste tu contraseña?"
            name="password"
          />
          <button className="w-full bg-[#FD7B03] text-white mt-3 h-10 rounded-md">
            Iniciar sesión
          </button>
        </form>
        <p className="text-center my-5 text-sm font-medium">
          ¿No eres miembro?{" "}
          <span className="text-[#fc7b03]">
            <Link href="/register">Registrate gratis</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
