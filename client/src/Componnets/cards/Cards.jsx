import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import CardPokemon from "../CardPokemon/CardPokemon";
import Spinner from "../Spinner/Spinner";
import "./cards.css";

const Cards = () => {
  //estados y las actions
  let pokemons = useSelector((state) => state.pokemons);
  let loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="cards-container">
          {pokemons?.map((p) => (
            <CardPokemon
              key={p.pokeId}
              name={p.name}
              image={p.image}
              types={p.types}
              pokeId={p.pokeId}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Cards;
