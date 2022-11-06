import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import "./CardPokemon.css";

const CardPokemon = ({ name, image, types, pokeId }) => {
  types?.map((t) => console.log(t.name));
  return (
    <article className="contCard">
      <Link className="contCard" to={`/pokemons/${pokeId}`}>
        <h2 className="name">{name}</h2>
        <picture className="card-img-container">
          <img src={image ?image  : "NOCUENTA CCON IMAGEN"} alt="NOCUENTA CCON IMAGEN" className="img" />
        </picture>
        <div className="types">
          {types?.map((t) => (
            <p className={t.name}>{t.name}</p>
          ))}
        </div>
      </Link>
    </article>
  );
};

export default CardPokemon;
