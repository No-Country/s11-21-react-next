'use client'
import React, { useState } from "react";
import Input from '../InputAuth/Input';
import { User, createUser } from '@/services/apiCall';

export default function FormRegister() {
  const [error, setError] = useState<String>()

  const [formUser, setFormUser] = useState<User>({
    name: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  })


  const registerUser = async (e:React.FormEvent) =>{
    e.preventDefault()
    setError("")
    if(formUser.password === formUser.repeatPassword){
      const response = await createUser(formUser)
      if(typeof(response) === "object"){
        console.log("create")
        setTimeout(() => {
          window.location.replace('/login')
        }, 3000);
      }else{
        setError(response)
      }
    }else{
      setError("Verificar la coincidencia de contraseña")
    }
    
  }

  const updateName = (value: string): void => {
    setFormUser({ ...formUser, name: value });
  }

  const updateEmail = (value: string): void => {
    setFormUser({ ...formUser, email: value });
  }

  const updatePhone = (value: string): void => {
    setFormUser({ ...formUser, phone: value });
  }

  const updatePassword = (value: string): void => {
    setFormUser({ ...formUser, password: value });
  }

  const updateRepeatPassword = (value: string): void => {
    setFormUser({ ...formUser, repeatPassword: value });
  }

  return (
    <form className='flex flex-col' onSubmit={registerUser}>
      <Input
          label="Nombre"
          placeholder=""
          type="name"
          name="name"
          onChange={updateName}
          minLength={3}
        />
      <Input
          label="Email"
          placeholder=""
          type="email"
          name="email"
          onChange={updateEmail}
        />
      <Input
          label="Teléfono"
          placeholder=""
          type="tel"
          name="phone"
          onChange={updatePhone}
        />
      <Input
        label="Contraseña"
        placeholder=""
        type="password"
        name="password1"
        onChange={updatePassword}
      />
      <Input
        label="Confirmar contraseña"
        placeholder=""
        type="password"
        name="password2"
        onChange={updateRepeatPassword}
      />
      <p className=" text-red-700 text-sm font-semibold">{error}</p>
      <button type="submit" className='w-full h-10 bg-[#FD7B03] text-[#fff] mt-4 rounded-lg'>Registrase</button>
    </form>
  )
}