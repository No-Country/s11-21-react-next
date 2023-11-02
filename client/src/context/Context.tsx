"use client";
import React, { createContext, useState, ReactNode } from "react";

interface ContextProps {
  showIconEdit: string;
  setShowIconEdit: React.Dispatch<React.SetStateAction<string>>;
  showInformation: string;
  setShowInformation: React.Dispatch<React.SetStateAction<string>>;
  textButton: string;
  setTextButton: React.Dispatch<React.SetStateAction<string>>;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  showErrorMessage: string;
  setShowErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps>({
  showIconEdit: "hidden",
  setShowIconEdit: () => {},
  showInformation: "block",
  setShowInformation: () => {},
  textButton: "Editar perfil",
  setTextButton: () => {},
  userId: "",
  setUserId: () => {},
  showErrorMessage: "",
  setShowErrorMessage: () => {},
});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [showIconEdit, setShowIconEdit] = useState<string>("hidden");
  const [showInformation, setShowInformation] = useState<string>("block");
  const [textButton, setTextButton] = useState<string>("Editar perfil");
  const [userId, setUserId] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<string>("");

  return (
    <Context.Provider
      value={{
        showIconEdit,
        setShowIconEdit,
        showInformation,
        setShowInformation,
        textButton,
        setTextButton,
        userId,
        setUserId,
        showErrorMessage,
        setShowErrorMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
