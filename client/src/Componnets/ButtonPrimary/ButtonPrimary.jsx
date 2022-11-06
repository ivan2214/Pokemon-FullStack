import React from "react";
import { Link } from "react-router-dom";
import "./buttonPrimary.css";

const ButtonPrimary = ({ to,value, url }) => {
  return (
    <>
      <Link href={url} to={to} className="btn-primary">
        {value}
      </Link>
    </>
  );
};

export default ButtonPrimary;
