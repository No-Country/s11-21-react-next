"use client";
import Input from "@/components/InputAuth/Input";
import { login } from "@/services/apiCall";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Context } from "@/context/Context";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | undefined>(undefined);
  const navigation = useRouter();
  const contexto = useContext(Context);
  const handleChange = (valor: string, name: string) => {
    setUser({ ...user, [name]: valor });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(user).then((response) => {
      if ("error" in response) {
        setError(response.error);
      } else {
        if (response.userLoged) {
          // Almacena el estado de inicio de sesión en localStorage
          localStorage.setItem("userLoged", "true");
          localStorage.setItem("userId", response.userId);
        } else {
          // Si el usuario no está logueado, puedes eliminar los datos del almacenamiento local
          localStorage.removeItem("userLoged");
          localStorage.removeItem("userId");
        }
        contexto.setUserId(response.userId);
        

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
      {error && <p className="text-red-800 py-3">{error}</p>}
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
