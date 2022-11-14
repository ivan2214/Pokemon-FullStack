import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ash from "../../assets/images/ash.png";
import poke from "../../assets/images/poke.png";
import { getAllPokemons, getTypes, postPokemon } from "../../redux/actions";
import validate from "../../utils/validate";
import "./CreatePokemon.css";

const CreatedPokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const history = useHistory();
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
  }, [dispatch]);

  useEffect(() => {
    setErrors(
      validate({
        ...input,
      })
    );
  }, [input]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
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
    dispatch(postPokemon(input));
    alert("Pokemon creado");
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
    history.push("/home");
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
          <button className="buttonHome">Return to home</button>
        </Link>
      </div>
      <div className="contGral">
        <div className="cardCreate">
          <div className="redTitle">
            <img src={poke} alt="poke" className="poke"></img>
            <div className="title">Create your pokemon</div>
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
                        <option value={t.name} key={t.name} className="options">
                          {t.name[0].toUpperCase() + t.name.slice(1)}
                        </option>
                      );
                    })}
                  </select>

                  <ul className="types">
                    {input.types.map((t) => {
                      return (
                        <a key={t} className="tipos">
                          {t[0].toUpperCase() + t.slice(1)}
                          <a
                            onClick={() => handleDeleteType(t)}
                            className="delete"
                          >
                            x
                          </a>
                        </a>
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
                    Create
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

export default CreatedPokemon;
