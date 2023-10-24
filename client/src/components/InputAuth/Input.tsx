"use client";
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  extra?: string;
  name: string;
  minLength?: number;
  onChange?: (value: string, fieldName: string) => void;
}

const Input: React.FC<InputProps> = ({
  extra,
  label,
  placeholder,
  type,
  name,
  minLength,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, name);
    }
  };
  return (
    <div className="flex flex-col w-full mt-3">
      <span className="flex justify-between text-sm font-normal text-[#FD7B03] pb-1">
        <label className="text-sm font-medium text-black">{label}</label>
        {extra}
      </span>
      <input
        className="border border-[#FD7B03] rounded-md text-sm h-10 px-3 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        minLength={minLength}
      />
    </div>
  );
};

export default Input;
