import {
  DELETE_POKEMON,
  EDIT_POKEMON,
  FILTER_CREATE,
  FILTER_TYPE,
  GET_ALL_POKEMONS,
  GET_TYPES,
  ORDER_BY_ATACK,
  ORDER_BY_NAME,
  POKE_DETAILS,
  POKE_NAME,
  POST_POKEMON,
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
      let orderByAttack;
      console.log(payload);

      if (payload === "ascFuerza") {
        orderByAttack = pokes.sort((a, b) => {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      }

      if (payload === "descFuerza") {
        console.log(payload);
        orderByAttack = pokes.sort((a, b) => {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      }

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
      let filterPoke = todosPokemons?.filter((p) => {
        if (typeof p.types[0] === "object") {
          return p.types[0].name === payload;
        }
        return p.types?.includes(payload);
      });

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
    case POST_POKEMON:
      return { ...state };
    case DELETE_POKEMON:
      return {
        ...state,
      };
    case EDIT_POKEMON:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
