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
    <div className="h-auto">
      <form className='grid grid-cols-2  max-lg:w-96 gap-2 max-lg:grid-cols-1 m-auto max-md:w-full' onSubmit={registerUser}>
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
      <button type="submit" className='w-80 my-2 col-span-2 max-lg:col-span-1 m-auto h-10 bg-[#FD7B03] text-[#fff] rounded-lg max-md:w-full'>Registrase</button>
    </form>
    <p className="text-center mb-2 text-red-700 font-semibold">{error}</p>
    </div>

  )
}