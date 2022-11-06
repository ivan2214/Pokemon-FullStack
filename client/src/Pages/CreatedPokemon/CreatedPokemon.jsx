import React from "react";
import { Link } from "react-router-dom";

import "./CreatePokemon.css";
const CreatedPokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
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

  

  return (
    <div>
      <div className="navBar">
        <img src={izq} alt="izq"></img>
        <Link to="/home">
          <button className="buttonHome">Return to home</button>
        </Link>
      </div>
      <div className="contGral">
        <div className="cardCreate">
          <img src={ash} alt="ash" className="ash" />
          <div className="redTitle">
            <img src={poke} alt="poke" className="poke"></img>
            <div className="title">Create your pokemon</div>
          </div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
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
                    placeholder="1 - 150"
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
                    placeholder="1 - 150"
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
                    placeholder="1 - 150"
                    className="inputs"
                  />
                  {errors.defense && (
                    <div className="error">{errors.defense}</div>
                  )}
                </div>

                <div>
                  <select
                    onChange={(e) => handleSelect(e)}
                    className="select"
                    disabled={input.types.length >= 2}
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
                        <li key={t} className="types">
                          {t[0].toUpperCase() + t.slice(1)}
                          <button
                            onClick={() => handleDeleteType(t)}
                            className="deleteButton"
                          >
                            x
                          </button>
                        </li>
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
                    placeholder="1 - 150"
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

                <button type="submit" disabled={btnDisabled} className="button">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatedPokemon;
