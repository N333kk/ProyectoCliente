'use client';
import { ReactNode } from "react";

export default function Boton({ buttonText, buttonIcon, onClick }: {
  buttonText: string;
  buttonIcon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center rounded-full w-10 h-10 bg-onyx-400 text-white transition-all duration-300 hover:w-40"
    >
      <span className="w-5 h-5">{buttonIcon}</span>
      <span className="ml-0 overflow-hidden whitespace-nowrap transition-all duration-300 max-w-0 group-hover:max-w-xs group-hover:ml-4">
        {buttonText}
      </span>
    </button>
  );
}