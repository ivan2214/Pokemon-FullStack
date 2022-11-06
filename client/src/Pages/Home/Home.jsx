import React from "react";
import Cards from "../../Componnets/cards/Cards";

import SearchBar from "../../Componnets/SearchBar/SearchBar";
import "./home.css";

const Home = () => {
  return (
    <main className="Home">
      <section>
        <SearchBar />
        <Cards />
      </section>
    </main>
  );
};

export default Home;
