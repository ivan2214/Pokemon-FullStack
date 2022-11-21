/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const { describe, it } = require("mocha");
const session = require("supertest-session");

const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

const bulbasaur = {
  pokeId: 1,
  name: "bulbasaur",
  hp: 45,
  attack: 49,
  defense: 49,
  speed: 45,
  height: 7,
  weight: 69,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
  types: ["grass", "poison"],
};

const pikachus = [
  {
    pokeId: "a215babb-d746-4f87-b96a-3117653cfbc5",
    name: "Pikachu",
    hp: null,
    attack: null,
    defense: null,
    speed: null,
    height: null,
    weight: null,
    image: null,
    createInDataBase: true,
    types: [],
  },
  {
    pokeId: 25,
    name: "pikachu",
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90,
    height: 4,
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    types: ["electric"],
  },
];

const create = {
  name: "Ivansito",
  hp: null,
  attack: null,
  defense: null,
  speed: null,
  height: null,
  weight: null,
  image: null,
  createInDataBase: true,
  types: [],
};

describe("Pokemones status Codes", () => {
  it("GET /pokemons debberia devolver el codigo 200 al realizar exitosamente la peticion", () =>
    agent.get("/pokemons").expect(200)).timeout(5000);

  it("GET /pokemons?name=pikachu debberia devolver el codigo 200 al realizar exitosamente la peticion", () =>
    agent.get("/pokemons").expect(200)).timeout(5000);

  it("GET /pokemons/:id debberia devolver el codigo 200 al realizar exitosamente la peticion", () =>
    agent.get("/pokemons").expect(200)).timeout(5000);
});

describe("Pokemons Filtrar", () => {
  it("Pokemons Filtrar por nombre debberia devolver el objeto con pikachu ", () => {
    agent.get("/pokemons?name=pikachu").expect(200).expect(pikachus);
  }).timeout(5000);
  it("Pokemons Filtrar por ID debberia devolver el objeto con bulbasaur ", () => {
    agent.get("/pokemons/1").expect(200).expect(bulbasaur);
  }).timeout(5000);
});

describe("Pokemons Posts ", () => {
  it("POST /pokemons deberia poder crear un nuevo pokemon y devolver el pokemon creado", () => {
    agent.post("/pokemons").send(create).expect(200).expect(create);
  }).timeout(5000);
});
