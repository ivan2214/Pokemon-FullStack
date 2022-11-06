import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { pokeDetails } from "../../redux/actions";
import pokemonImg from "../../assets/images/pokemon.png";
import "./CardDetails.css";

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
        <Link to="/">
          <img src={pokemonImg} alt="" className="imgNav" loading="lazi" />
        </Link>
      </div>
      <article className="contCardDetails">
        <div className="details-cont-izq">
          <picture className="card-img-container">
            <img src={pokemon[0]?.image} alt="" className="img" />
          </picture>
          <div className="detailsInfoBasica"></div>
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
          <p className="paragraph">Health Points {pokemon[0]?.hp}</p>
          <p className="paragraph">Attack Points{pokemon[0]?.attack}</p>
          <p className="paragraph">Defense Points {pokemon[0]?.defense}</p>
          <p className="paragraph">Speed Points {pokemon[0]?.speed}</p>
          <p className="paragraph">Types:</p>
          <div className="detail-types">
            {pokemon[0]?.types && (
              <p className="paragraph">{pokemon[0]?.types[0].name} </p>
            )}
            {pokemon[0]?.types && pokemon[0]?.types[1] && (
              <p className="paragraph">{pokemon[0]?.types[1].name} </p>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default CardDetail;
