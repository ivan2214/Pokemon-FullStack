import React from "react";
import Cards from "../../Componnets/cards/Cards";
import NavBar from "../../Componnets/NavBar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <main className="Home">
      <section>
        <NavBar />
        <Cards />
      </section>
    </main>
  );
};

export default Home;
