import React from "react";
import { Link } from "react-router-dom";
import "./CardPokemon.css";

const CardPokemon = ({ name, image, types, pokeId }) => {
  return (
    <>
      <article
        key={pokeId + typeof types[0] === "object" ? types[0].name : types[0]}
        className={`${
          typeof types[0] === "object" ? types[0].name : types[0]
        } containerCard`}
      >
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
            {types?.map((t) => {
              if (typeof t === "object") {
                for (const key in t) {
                  console.log(t[key]);
                }
              }
              return (
                <p
                  key={pokeId + typeof types[0] === "object" ? t.name : t}
                  className={typeof types[0] === "object" ? t.name : t}
                >
                  {typeof types[0] === "object" ? t.name : t}
                </p>
              );
            })}
          </div>
        </Link>
      </article>
    </>
  );
};

export default CardPokemon;
