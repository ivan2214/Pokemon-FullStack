import React from "react";
import Order from "../FiltersAndOrder/Order/Order";
import OrdenCreate from "../FiltersAndOrder/Order/OrdenCreate/OrdenCreate";
import FilterType from "../FiltersAndOrder/Filter/FilterType/FilterType";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
import Reset from "../Reset/Reset";
import AddLogo from "../AddPokeMon/AddLogo";
import { Link } from "react-router-dom";
import pokemon from "../../assets/images/pokemon.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="goHome">
        <Link to="/">
          <img src={pokemon} alt="" className="imgNav" loading="lazi" />
        </Link>
      </div>
      <header className="header">
        <section className="searchAndReset">
          <AddLogo />
          <Reset />
          <SearchBar />
        </section>
        <section className="orderAndFilter">
          <Order />
          <OrdenCreate />
          <FilterType />
        </section>
      </header>
    </nav>
  );
};

export default NavBar;
