import React from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/images/plus.png";

const AddLogo = () => {
  return (
    <>
      <Link to="/created" className="searchButton">
        <img src={plus} alt="buscar" className="buscar"></img>
      </Link>
      <p>Agrega tu pokemon !!</p>
    </>
  );
};

export default AddLogo;
