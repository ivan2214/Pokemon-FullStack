import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.css";

const CardPokemon = ({ name, image, types, pokeId }) => {
  return (
    <>
      <article key={pokeId + types[0]} className={`${types[0]} containerCard`}>
        <Link className="contCard" to={`/pokemons/${pokeId}`}>
          <h2 className="name">{name}</h2>
          <picture className="card-img-container">
            <img
              src={image ? image : "NOCUENTA CCON IMAGEN"}
              alt="NOCUENTA CCON IMAGEN"
              className="img"
            />
          </picture>
          <div className="types">
            {types?.map((t) => (
              <p key={pokeId + t} className={t}>
                {t}
              </p>
            ))}
          </div>
        </Link>
      </article>
    </>
  );
};

export default CardPokemon;
