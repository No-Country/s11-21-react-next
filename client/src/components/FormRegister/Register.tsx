"use client";
import React from "react";
import Input from "../InputAuth/Input";
import { createUser } from "@/services/apiCall";

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default function FormRegister() {
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = "test";
    const email = "test@gmail.com";
    const phone = "123123123";
    const password = "123123";
    createUser(name, email, phone, password);
  };

  return (
    <form className="flex flex-col" onSubmit={registerUser}>
      <Input label="Nombre" placeholder="" type="name" />
      <Input label="Email" placeholder="" type="email" />
      <Input label="Teléfono" placeholder="" type="phone" />
      <Input label="Contraseña" placeholder="" type="password" />
      <Input label="Confirmar contraseña" placeholder="" type="password" />
      <button
        type="submit"
        className="w-full h-10 bg-[#FD7B03] text-[#fff] mt-4 rounded-lg"
      >
        Registrase
      </button>
    </form>
  );
}
