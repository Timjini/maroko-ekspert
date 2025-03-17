import React from "react";
import { MainButtonProps } from '../types/common';

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  console.log("Clicked",onClick)
  return <button className="mainBtn bg-black text-white cursor-pointer border border-black rounded px-8 py-3 mt-5 transition duration-200 hover:bg-[var(--main-color)] hover:text-black"
        onClick={onClick} 
          >{title}</button>;
};

export default MainButton;
