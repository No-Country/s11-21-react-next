'use client'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from "react";

interface User{
  name: string
  email: string
  phone: string
  password: string
}

export default function FormRegister() {

  // const registerUser = async (e:React.FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault()

  //   try {
  //     const response = await axios.post(
  //       "https://nearby-back.vercel.app/user/createUser",
  //       {
  //         "name":"firulais3",
  //         "email":"firulais3@gmail.com",
  //         "phone":"+542234660539",
  //         "password":"123"
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const [formUser, setFormUser] = useState<User>({ name: "", email: "", phone: "", password: "" });
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handlePhone = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser({
      ...formUser,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formUser)
    // Aquí puedes hacer lo que necesites con los valores del formulario
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <label className='text-[#000] text-base font-semibold' htmlFor="name">Nombre</label>
      <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' required type="text"  name="name" defaultValue={formUser.name} onChange={handleName} />
      <label className='text-[#000] text-base font-semibold' htmlFor="name">Email</label>
      <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' required type="email" name="email" defaultValue={formUser.email}  onChange={handleEmail}/>
      <label className='text-[#000] text-base font-semibold' htmlFor="name">Teléfono</label>
      <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' required type="text" name="phone" defaultValue={formUser.phone} onChange={handlePhone}/>
      <label className='text-[#000] text-base font-semibold' htmlFor="name">Contraseña</label>
      <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' required type="password" name="password" defaultValue={formUser.password} onChange={handlePassword} />
      <label className='text-[#000] text-base font-semibold' htmlFor="name">Confirmar Contraseña</label>
      <input className=' w-full border-2 max-md:w-auto h-10 border-[#FFCF91] rounded-lg bg-transparent px-2 text-[#000] outline-none my-1' required type="password" name="password"/>
      <button type="submit" className='w-full h-10 bg-[#FD7B03] text-[#fff] mt-2 rounded-lg'>Registrase</button>
    </form>
  )
}