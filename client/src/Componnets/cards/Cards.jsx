import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons, getTypes } from "../../redux/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import { Paginacion } from "../Paginacion/Paginacion";
import Spinner from "../Spinner/Spinner";
import "./cards.css";

const Cards = () => {
  //estados y las actions
  let pokemons = useSelector((state) => state.pokemons);
  let loading = useSelector((state) => state.loading);
  const [paginaActual, setPaginaActual] = useState(1);
  const [pokesPorPagina] = useState(12);
  const ultimoPokemon = paginaActual * pokesPorPagina; // 1 * 12 > 12  --------- 2*12 > 24 asi sucesivamente
  const primerPokemon = ultimoPokemon - pokesPorPagina; // 12 - 12 > 12 --------- 24 - 12 > 12 asi sucesivamente
  const pokemonsPaginados = pokemons.length
    ? pokemons.slice(primerPokemon, ultimoPokemon)
    : pokemons;
  const totalPokemons = pokemons.length;
  const dispatch = useDispatch();
  console.log(pokemonsPaginados);
  console.log(pokemons);
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
      <Paginacion
        pokesPorPagina={pokesPorPagina}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        pokemons={pokemons}
        totalPokemons={totalPokemons}
      />
      {loading ? (
        <Spinner />
      ) : pokemonsPaginados.length ? (
        <section className="cards-container">
          {pokemonsPaginados?.map((p) => (
            <CardPokemon
              key={p.pokeId + p.name}
              name={p.name}
              image={p.image}
              types={p.types}
              pokeId={p.pokeId}
            />
          ))}
          <Paginacion
            pokesPorPagina={pokesPorPagina}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            pokemons={pokemons}
            totalPokemons={totalPokemons}
          />
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
