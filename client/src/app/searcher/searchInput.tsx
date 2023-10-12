import React from 'react'
import { IconContext } from 'react-icons'

export default function SearchInput() {
  return (
    <>
    <div className='flex absolute justify-center items-center'>
        <input type="text "  className='shadow-lg shadow-zinc-300/50 outline-none text-[#637381] px-4 w-72 h-10 rounded-lg bg-[#FFF4E0]' placeholder='Buscar atracción...'/>
        <span className='absolute right-5'></span>
    </div>
    </>
  )
}
