import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import {
  editPokemon,
  getAllPokemons,
  getTypes,
  pokeDetails,
} from "../../redux/actions";
import validate from "../../utils/validate";
import poke from "../../assets/images/poke.png";

const EditPokemon = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const allPokemons = useSelector((state) => state.pokemons);
  const pokemonDetail = useSelector((state) => state.details);
  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
    dispatch(pokeDetails(id));
  }, [dispatch, allPokemons.length, id]);

  useEffect(() => {
    if (pokemonDetail.length) {
      setInput(pokemonDetail[0]);
    }
  }, [pokemonDetail.length, pokemonDetail]);

  useEffect(() => {
    setErrors(
      validate({
        ...input,
      })
    );
  }, [input]);

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value.toLowerCase(),
    });

    setErrors(
      validate({
        ...input,
        [ev.target.name]: ev.target.value,
      })
    );
  };
  const handleSelect = (ev) => {
    if (!input.types.includes(ev.target.value)) {
      setInput({
        ...input,
        types: [...input.types, ev.target.value],
      });
    }
    if (input.types.includes(ev.target.value)) {
      alert("Tipo ya seleccionado");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(editPokemon(id, input));
    alert("Pokemon editado");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    history.push(`/pokemons/${id}`);
    dispatch(pokeDetails(id));
    dispatch(getAllPokemons());
  };

  const handleDeleteType = (ev) => {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== ev),
    });
  };

  return (
    <div>
      <div className="navBar">
        <Link to="/home">
          <button className="buttonHome">Volver al home</button>
        </Link>
      </div>
      <div className="contGral">
        <div className="cardCreate">
          <div className="redTitle">
            <img loading="lazi" src={poke} alt="poke" className="poke"></img>
            <div className="title">Edita tu Pokemon!!</div>
          </div>

          <div>
            <form onSubmit={(event) => handleSubmit(event)} className="form">
              <div className="izq">
                <div>
                  <div>Name:</div>
                  <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    placeholder="Name"
                    className="inputs"
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div>
                  <div>Hp:</div>
                  <input
                    type="number"
                    value={input.hp}
                    name="hp"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 1500"
                    className="inputs"
                  />
                  {errors.hp && <div className="error">{errors.hp}</div>}
                </div>

                <div>
                  <div>Attack:</div>
                  <input
                    type="number"
                    value={input.attack}
                    name="attack"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 200"
                    className="inputs"
                  />
                  {errors.attack && (
                    <div className="error">{errors.attack}</div>
                  )}
                </div>

                <div>
                  <div>Defense:</div>
                  <input
                    type="number"
                    value={input.defense}
                    name="defense"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 1000"
                    className="inputs"
                  />
                  {errors.defense && (
                    <div className="error">{errors.defense}</div>
                  )}
                </div>

                <div>
                  <select
                    className="select"
                    onChange={(ev) => handleSelect(ev)}
                    defaultValue="title"
                  >
                    <option value="title" disabled name="types">
                      Types
                    </option>
                    {types.map((t) => {
                      return (
                        <option
                          value={t.name}
                          key={t.name + t.id}
                          className="options"
                        >
                          {t.name}
                        </option>
                      );
                    })}
                  </select>

                  <ul className="types">
                    {input.types.map((t) => {
                      return (
                        <button
                          key={` ${t.name}  ${pokemonDetail.pokeId} `}
                          onClick={() => handleDeleteType(t)}
                          className="tipos"
                        >
                          {t.name}
                          <p>x</p>
                        </button>
                      );
                    })}
                  </ul>
                  {errors.types && <div className="error">{errors.types}</div>}
                </div>
              </div>

              <div className="der">
                <div>
                  <div>Speed:</div>
                  <input
                    type="number"
                    value={input.speed}
                    name="speed"
                    onChange={(e) => handleChange(e)}
                    placeholder="1 - 1500"
                    className="inputs"
                  />
                  {errors.speed && <div className="error">{errors.speed}</div>}
                </div>

                <div>
                  <div>
                    Height <small>(cm)</small>:
                  </div>
                  <input
                    type="number"
                    value={input.height}
                    name="height"
                    onChange={(e) => handleChange(e)}
                    placeholder="Height"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>
                    Weight <small>(kg)</small>:
                  </div>
                  <input
                    type="number"
                    value={input.weight}
                    name="weight"
                    onChange={(e) => handleChange(e)}
                    placeholder="Weight"
                    className="inputs"
                  />
                </div>

                <div>
                  <div>Image:</div>
                  <input
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    className="inputs"
                    placeholder="URL"
                  />
                  {errors.image && <div className="error">{errors.image}</div>}
                </div>

                {Object.keys(errors).length < 1 && (
                  <button type="submit" className="button">
                    Editar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPokemon;
