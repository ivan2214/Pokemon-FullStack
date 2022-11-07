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
  console.log(pokemon);
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
      {/*   <article className="contCardDetails">
        <section className="cardContainer">
          <div className="section">
            <div className="details-cont-izq">
              <picture className="card-img-container">
                <img src={pokemon[0]?.image} alt="" className="imgDetails" />
              </picture>

              <div className="infoBasica">
                <div className="name">
                  {pokemon[0].name[0].toUpperCase() + pokemon[0].name.slice(1)}
                </div>
                <ul className="types">
                  {pokemon[0].types.map((t) => (
                    <div key={pokemon[0].name + t} className={t}>
                      {t.toUpperCase()}
                    </div>
                  ))}
                </ul>
                <div className="id">ID #{pokemon[0].id}</div>
              </div>
            </div>
            <div className="detail-data">
              <div className="medidas">
                <div className="heigth">
                  <p>Height</p>
                  <p className="paragraph"> {pokemon[0]?.height}</p>
                </div>
                <div className="heigth">
                  <p>Weight </p>
                  <p className="paragraph">{pokemon[0]?.weight}</p>
                </div>
              </div>

              <h2 className="name">{pokemon[0]?.name}</h2>
              <p className="paragraphDetails">Health Points {pokemon[0]?.hp}</p>
              <p className="paragraphDetails">
                Attack Points{pokemon[0]?.attack}
              </p>
              <p className="paragraphDetails">
                Defense Points {pokemon[0]?.defense}
              </p>
              <p className="paragraphDetails">
                Speed Points {pokemon[0]?.speed}
              </p>
              <p className="paragraphDetails">Types:</p>
              <div className="detail-types">
                {pokemon[0]?.types && (
                  <p className="paragraphDetails">
                    {pokemon[0]?.types[0].name}{" "}
                  </p>
                )}
                {pokemon[0]?.types && pokemon[0]?.types[1] && (
                  <p className="paragraphDetails">
                    {pokemon[0]?.types[1].name}{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </article> */}

      <div>
        {pokemon.length ? (
          <div className="contGral">
            <div className="contRed">
              <div className="contGris">
                <div className="contIzq">
                  <div className="circulo">
                    <img
                      src={pokemon[0].image}
                      alt="imagen-del-pokemon"
                      className="image"
                    />
                  </div>
                  <div className="infoBasica">
                    <div className="name">{pokemon[0].name}</div>
                    <ul className="types">
                      {pokemon[0].types.map((t) => (
                        <div key={pokemon[0].name} className={t.name}>
                          {t.name}
                        </div>
                      ))}
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
                      <p>Hp</p>
                      <div className="number">{pokemon[0].hp}</div>

                      <div className="barra">
                        <div
                          className="hp"
                          style={{
                            width: `${(pokemon[0].hp / 150) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p>Attack</p>
                      <div className="number">{pokemon[0].attack}</div>
                      <div className="barra">
                        <div
                          className="attack"
                          style={{
                            width: `${(pokemon[0].attack / 150) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p>Defense</p>
                      <div className="number">{pokemon[0].defense}</div>
                      <div className="barra">
                        <div
                          className="defense"
                          style={{
                            width: `${(pokemon[0].defense / 150) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="filaStat">
                      <p>Speed</p>
                      <div className="number">{pokemon[0].speed}</div>
                      <div className="barra">
                        <div
                          className="speed"
                          style={{
                            width: `${(pokemon[0].speed / 150) * 100}%`,
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
