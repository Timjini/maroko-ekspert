import React from "react";

interface MainButtonProps {
  title: string;
  action: () => void;
}

const ActionButton: React.FC<MainButtonProps> = ({ title , action }) => {
  return <button className="mainBtn" onClick={action}>{title}</button>;
};

export default ActionButton;
