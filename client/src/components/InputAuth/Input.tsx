import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  extra?: string;
}

const Input: React.FC<InputProps> = ({ extra, label, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full mt-3">
      <span className="flex justify-between text-sm font-normal text-[#FD7B03] pb-1">
        <label className="text-sm font-medium text-black">{label}</label>
        {extra}
      </span>
      <input
        className="border border-[#FD7B03] rounded-md text-sm h-10 px-3"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
