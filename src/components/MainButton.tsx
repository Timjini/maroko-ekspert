import React from "react";

interface MainButtonProps {
  title: string;
}

const MainButton: React.FC<MainButtonProps> = ({ title }) => {
  return <button className="mainBtn">{title}</button>;
};

export default MainButton;
