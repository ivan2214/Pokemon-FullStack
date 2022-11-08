const axios = require("axios");

const { Pokemon, Type } = require("../../db");

const getApiInfo = async () => {
  //Guardo los pokemones de la api creeando un nuevo objeto con las propiedadees llamadas igual a las filas del modelo dee pokemones en la DB para asi no tener conflictos ypoder juntarlos a todos deespues
  const apiUrl = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
  );

  const dataUrl = await apiUrl.data.results.map((el) => el.url);
  //mapeeo cada pokemon y voy a pasar su resultado guardando las propiedades y sus valores
  const result = await Promise.all(dataUrl.map(axios.get));

  const resultFinal = result.map((el) => {
    return {
      pokeId: el.data.id,
      name: el.data.name,
      hp: el.data.stats[0].base_stat,
      attack: el.data.stats[1].base_stat,
      defense: el.data.stats[2].base_stat,
      speed: el.data.stats[5].base_stat,
      height: el.data.height,
      weight: el.data.weight,
      image: el.data.sprites.other.dream_world.front_default,
      types: el.data.types.map((t) => t.type.name),
    };
  });

  return resultFinal;
};

const getDbInfo = async () => {
  //traigo los pokemones en la basee de datos una vez los creo se van a guardar en la basee de datos y tmb me traigo su type con solo sus nombres de tipo de pokemon
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  // guardo los pokemones de la base de datos (osea los creados) y me traigo todos los pokemones deesde la API y los combino para asi podeer tener a todos
  try {
    const apiPokemon = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allInfo = dbInfo.concat(apiPokemon);
    return allInfo;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getApiInfo,
  getAllPokemons,
  getDbInfo,
};
