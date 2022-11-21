import React from "react";
import giftPokemon from "../../assets/giftPokemon.gif"
import "./Spinner.css"

const Spinner = () => {
  return (
    <>
     <picture className="gif-container">
      <img loading="lazi" src={giftPokemon} alt="" />
     </picture>
    </>
  );
};

export default Spinner;
