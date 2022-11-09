import {
  FILTER_CREATE,
  FILTER_TYPE,
  GET_ALL_POKEMONS,
  GET_TYPES,
  ORDER_BY_ATACK,
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
  error: false,
};

const reducer = (state = initialState, { type, payload, loading }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        loading: loading,
        pokemons: payload,
      };
    case POKE_DETAILS:
      return { ...state, details: payload };
    case POKE_NAME:
      return {
        ...state,
        loading: loading,
        pokemons: payload,
      };
    case ORDER_BY_NAME:
      const allPokes = [...state.pokemons];
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
        order: sortedPokemon,
        pokemons: sortedPokemon,
      };
    case ORDER_BY_ATACK:
      const pokes = [...state.pokemons];
      let orderByAttack =
        payload === "atack"
          ? pokes.sort((a, b) => {
              if (a.attack > b.attack) {
                console.log(a.attack, b.attack);
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : pokes.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        order: orderByAttack,
        pokemons: orderByAttack,
      };
    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case FILTER_TYPE:
      const todosPokemons = [...state.allPokemons];
      let filterPoke =
        payload === "Tipos"
          ? todosPokemons
          : todosPokemons?.filter((p) => p.types?.includes(payload));

      return {
        ...state,
        pokemons: filterPoke,
      };
    case FILTER_CREATE:
      const allPokemones = [...state.allPokemons];
      let pokemonesFiltrados;
      if (payload === "creados") {
        pokemonesFiltrados = allPokemones.filter((p) => p.createInDataBase);
      }
      if (payload === "existing") {
        pokemonesFiltrados = allPokemones.filter((p) => !p.createInDataBase);
      }
      if (payload === "all") {
        pokemonesFiltrados = allPokemones;
      }
      return { ...state, pokemons: pokemonesFiltrados };
    default:
      return state;
  }
};

export default reducer;
