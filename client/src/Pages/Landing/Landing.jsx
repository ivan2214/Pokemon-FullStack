import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import img from "../../assets/gifts/charmander.gif";

const Landing = () => {
  return (
    <main className="landingPage">
      <section className="sec-texts">
        <div className="sec-textos">
          <div className="sec-pg">
            <h1>¡Bienvenido a tu pokedex!</h1>
            <p>
              Aquí puedes encontrar toda la info de tus pokemons favoritos.
              ¡También puedes dejar volar tu creatividad y crear un nuevo
              Pokémon exclusivo! Espero que te guste :)
            </p>
          </div>
          <Link to="/home" className="btn">
            GO Home !
          </Link>
        </div>
      </section>
      <section className="sec-img">
        <picture>
          <img loading="lazi" src={img} alt="" />
        </picture>
      </section>
    </main>
  );
};

export default Landing;
