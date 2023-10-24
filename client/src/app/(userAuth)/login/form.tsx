"use client";
import Input from "@/components/InputAuth/Input";
import { login } from "@/services/apiCall";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigation = useRouter();

  const handleChange = (valor: string, name: string) => {
    setUser({ ...user, [name]: valor });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(user).then((response) => {
      if (typeof response === "string") {
        alert(response);
      } else {
        navigation.push("/home");
      }
    });
  };
  return (
    <form
      action="/login"
      onSubmit={handleSubmit}
      className="w-[80%] md:max-w-[50%] flex flex-col items-center mx-auto"
    >
      <Input
        label="Email"
        placeholder="rafaric@yahoo.com.ar"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <Input
        label="Contraseña"
        placeholder="********"
        type="password"
        extra="¿Olvidaste tu contraseña?"
        name="password"
        onChange={handleChange}
      />
      <button
        className="w-full bg-[#FD7B03] text-white mt-3 h-10 rounded-md"
        type="submit"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
