const getPokemons = async () => {
  const pokes = await fetch("http://localhost:3001/pokemons");

  return pokes.json();
};

export default getPokemons;
