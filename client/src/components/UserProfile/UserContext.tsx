"use client"
import React, { createContext, useState, ReactNode } from "react";

interface ContextProps {
  showIconEdit: string;
  setShowIconEdit: React.Dispatch<React.SetStateAction<string>>;
  showInformation: string;
  setShowInformation: React.Dispatch<React.SetStateAction<string>>;
  textButton: string;
  setTextButton: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps>({
    showIconEdit: "hidden",
    setShowIconEdit: () => {},
    showInformation: "block",
    setShowInformation: () => {},
    textButton: "Editar perfil",
    setTextButton: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [showIconEdit, setShowIconEdit] = useState<string>("hidden");
  const [showInformation, setShowInformation] = useState<string>("block");
  const [textButton, setTextButton] = useState<string>("Editar perfil");

  return (
    <Context.Provider value={{ showIconEdit, setShowIconEdit, showInformation, setShowInformation, textButton, setTextButton}}>
      {children}
    </Context.Provider>
  );
}