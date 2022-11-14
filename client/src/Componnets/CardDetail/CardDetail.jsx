import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pokeDetails } from "../../redux/actions";
import pokemonImg from "../../assets/images/pokemon.png";
import pokeball from "../../assets/giftPokemon.gif";

import "./details.css";
const CardDetail = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.details);

  const { id } = useParams();
  useEffect(() => {
    dispatch(pokeDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="goHome">
        <Link to="/home">
          <img src={pokemonImg} alt="" className="imgNav" loading="lazi" />
        </Link>
      </div>
      {/* pokemon[0].types[0] */}
      <div>
        {pokemon.length ? (
          <div className="contGral">
            <div className="contRed">
              <div
                className={`${
                  typeof pokemon[0].types == "object"
                    ? pokemon[0].types.name
                    : pokemon[0].types[0]
                } contGris`}
              >
                <div className="contIzq">
                  <div className="circulo">
                    <img
                      src={pokemon[0].image}
                      alt="imagen-del-pokemon"
                      className="image"
                    />
                  </div>
                  <div className="infoBasica">
                    <h2 className="name">{pokemon[0].name}</h2>
                    <ul className="types">
                      {pokemon[0].types?.map((t) => {
                        return (
                          <div
                            key={
                              pokemon[0].name + " " + typeof t === "object"
                                ? t.name
                                : t
                            }
                            className={typeof t === "object" ? t.name : t}
                          >
                            {typeof t === "object" ? t.name : t}
                          </div>
                        );
                      })}
                    </ul>
                    <div className="id">#ID {pokemon[0].pokeId}</div>
                  </div>
                </div>

                <div className="contDer">
                  <div className="alturaPeso">
                    <div className="medidas">
                      <div className="title">Height</div>
                      <div>{pokemon[0].height} m</div>
                    </div>

                    <div className="medidas">
                      <div className="title">Weight</div>
                      <div>{pokemon[0].weight} kg</div>
                    </div>
                  </div>

                  <div className="stats">
                    <div className="filaStat">
                      <p className="parrafo">Hp</p>
                      <div className="number">{pokemon[0].hp}</div>

                      <div className="barra">
                        <div
                          className="hp"
                          style={{
                            width: `${pokemon[0].hp}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p className="parrafo">Attack</p>
                      <div className="number">{pokemon[0].attack}</div>
                      <div className="barra">
                        <div
                          className="attack"
                          style={{
                            width: `${pokemon[0].attack}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p className="parrafo">Defense</p>
                      <div className="number">{pokemon[0].defense}</div>
                      <div className="barra">
                        <div
                          className="defense"
                          style={{
                            width: `${pokemon[0].defense}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p className="parrafo">Speed</p>
                      <div className="number">{pokemon[0].speed}</div>
                      <div className="barra">
                        <div
                          className="speed"
                          style={{
                            width: `${pokemon[0].speed}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="poke">
            <img src={pokeball} alt="pokeball" className="pokeball" />
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetail;
