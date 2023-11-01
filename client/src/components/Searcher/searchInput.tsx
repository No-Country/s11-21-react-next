"use client";
import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

interface SearchInputProps {
  searchTerm?: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ searchTerm }) => {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div className="relative flex justify-center items-center  m-auto -mt-6 w-3/5 max-md:w-80">
      <input
        type="text"
        className=" placeholder:text-[#637381] text-[#000000]  placeholder:font-extralight  text-sm shadow-lg shadow-zinc-300/50 outline-none px-4 w-full h-10 rounded-lg bg-[#FFF4E0]"
        placeholder="Buscar atracción..."
        onChange={handleChange}
      />
      {searchTerm && (
        <FaSearchLocation
          className="absolute right-5 cursor-pointer opacity-90"
          onClick={searchTerm(term)}
        ></FaSearchLocation>
      )}
    </div>
  );
};
