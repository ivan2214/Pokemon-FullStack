import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const POKE_DETAILS = "POKE_DETAILS";
export const POKE_NAME = "POKE_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATACK = "ORDER_BY_ATACK";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_CREATE = "FILTER_CREATE";
export const POST_POKEMON = "POST_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const EDIT_POKEMON = "EDIT_POKEMON";

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
        `http://localhost:3001/pokemons?name=${query}`
      );

      return dispatch({
        type: POKE_NAME,
        payload: fetchedPokes.data,
        loading: false,
      });
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      const fetTypes = await axios(`http://localhost:3001/types`);

      dispatch({
        type: GET_TYPES,
        payload: fetTypes.data,
      });
    } catch (err) {
      console.log({ msg: err.message });
    }
  };
}

//ORDENAMIENTOS

export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByAtack = (atack) => {
  console.log(atack);
  return {
    type: ORDER_BY_ATACK,
    payload: atack,
  };
};

//filtros

export function filterTypes(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
}

export function filterCreate(type) {
  return {
    type: FILTER_CREATE,
    payload: type,
  };
}

// crear pokemon

export function postPokemon(dataPokemon) {
  console.log(dataPokemon);
  return async function (dispatch) {
    axios.post("http://localhost:3001/pokemons", dataPokemon).then((data) =>
      dispatch({
        type: POST_POKEMON,
        payload: data,
      })
    );
  };
}

export function deletePokemon(pokemonId) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/pokemons/${pokemonId}`);
      return dispatch({
        type: DELETE_POKEMON,
      });
    } catch (error) {
      console.log("No puedo eliminar el pokemon", error);
    }
  };
}

// editar pokemon

export function editPokemon(id, pokemonEditado) {
  return async function (dispatch) {
    try {
      const json = await axios.put(
        `http://localhost:3001/pokemons/editar/${id}`,
        pokemonEditado
      );
      return dispatch({
        type: EDIT_POKEMON,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
