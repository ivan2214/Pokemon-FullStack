import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import "./searchBar.css";
import buscar from "../../assets/images/search.png";
import Order from "../FiltersAndOrder/Order/Order";
import OrdenCreate from "../FiltersAndOrder/Order/OrdenCreate/OrdenCreate";
import FilterType from "../FiltersAndOrder/Filter/FilterType/FilterType";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      dispatch(getByName(query));
      setQuery("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form action="" className="search" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Find your pokemon..."
          onChange={(e) => handleChange(e)}
          value={query}
          className="input"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="searchButton"
        >
          <img src={buscar} alt="buscar" className="buscar"></img>
        </button>
      </form>
      <Order />
      <OrdenCreate />
      <FilterType/>
    </>
  );
};

export default SearchBar;
