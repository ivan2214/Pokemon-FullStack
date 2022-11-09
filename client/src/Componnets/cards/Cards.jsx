import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons, getTypes } from "../../redux/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import Spinner from "../Spinner/Spinner";
import "./cards.css";

const Cards = () => {
  //estados y las actions
  let pokemons = useSelector((state) => state.pokemons);
  let loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  function reset() {
    dispatch(getAllPokemons());
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : pokemons.length ? (
        <section className="cards-container">
          {pokemons?.map((p) => (
            <CardPokemon
              key={p.pokeId + p.name}
              name={p.name}
              image={p.image}
              types={p.types}
              pokeId={p.pokeId}
            />
          ))}
        </section>
      ) : (
        <section className="cards-container">
          <h1 className="">UPS ALGO SALIO MAL</h1>
          <button onClick={reset} className="btn">
            Recargar Pokemones !
          </button>
        </section>
      )}
    </>
  );
};

export default Cards;
