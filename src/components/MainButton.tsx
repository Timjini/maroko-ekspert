import React from "react";

interface MainButtonProps {
  title: string;
  // action: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ title }) => {
  return <button className="mainBtn bg-black text-white cursor-pointer border border-black rounded px-8 py-3 mt-5 transition duration-200 hover:bg-[var(--main-color)] hover:text-black" >{title}</button>;
};

export default MainButton;
