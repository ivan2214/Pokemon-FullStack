import {
  GET_ALL_POKEMONS,
  ORDER_BY_NAME,
  POKE_DETAILS,
  POKE_NAME,
} from "../actions";

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
    case ORDER_BY_NAME:
      const allPokes = [...state.allPokemons];
      const sortedPokemon =
        payload === "asc"
          ? allPokes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : allPokes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allPokemons: sortedPokemon,
        currentPage: 1,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;
