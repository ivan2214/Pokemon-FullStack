import React from "react";
import "./button.css";

const Button = ({ value, onClick }) => {
  return (
    <button className="buttonSecondary" onClick={onClick}>
      <span>{value}</span>
    </button>
  );
};

export default Button;
