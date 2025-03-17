import React from "react";
import { MainButtonProps } from '../types/common';

const ActionButton: React.FC<MainButtonProps> = ({ title , onClick }) => {
  return <button className="mainBtn" onClick={onClick}>{title}</button>;
};

export default ActionButton;
