import React from "react";
import { useDispatch } from "react-redux";
import refresh from "../../assets/images/refresh.png";
import { getAllPokemons } from "../../redux/actions";

const Reset = () => {
  const dispatch = useDispatch();
  function reset(e) {
    e.preventDefault();
    dispatch(getAllPokemons());
  }

  return (
    <>
      <button type="submit" onClick={(e) => reset(e)} className="searchButton">
        <img src={refresh} alt="buscar" className="buscar"></img>
      </button>
    </>
  );
};

export default Reset;
