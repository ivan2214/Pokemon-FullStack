import { GET_ALL_POKEMONS, POKE_DETAILS, POKE_NAME } from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  order: [],
  types: [],
  details: [],
  loading: true,
};

const reducer = (state = initialState, { type, payload, loading }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return { ...state, allPokemons: payload, loading: loading };

    case POKE_DETAILS:
      return { ...state, details: payload };
    case POKE_NAME:
      return { ...state, allPokemons: payload, loading: loading };

    default:
      return state;
  }
};

export default reducer;
