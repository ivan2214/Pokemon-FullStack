import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const POKE_DETAILS = "POKE_DETAILS";
export const POKE_NAME = "POKE_NAME";

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const fetchedPokes = await axios(`http://localhost:3001/pokemons`);

      dispatch({
        type: GET_ALL_POKEMONS,
        payload: fetchedPokes.data,
        loading: false,
      });
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
}

export function pokeDetails(id) {
  return async function (dispatch) {
    try {
      const fetchedPokes = await axios(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: POKE_DETAILS,
        payload: fetchedPokes.data,
      });
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
}

export function getByName(query) {
  return async function (dispatch) {
    try {
      const fetchedPokes = await axios(
        `http://localhost:3001/pokemons/?name=${query}`
      );
      return dispatch({
        type: POKE_NAME,
        payload: fetchedPokes.data,
      });
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
}
