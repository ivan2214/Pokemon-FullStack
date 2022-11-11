const { Router } = require("express");
const router = Router(); //express.Router('')
const axios = require("axios");
const { Op } = require("sequelize");
const { route } = require(".");
const { getAllPokemons } = require("./Controllers/controllers");
const { Pokemon, Type } = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, image, types } =
      req.body;

    if (!name) {
      throw new Error("Faltan Parametros obligatorios");
    }

    const newPokemon = await Pokemon.create({
      name,
      hp: Number(hp),
      attack: Number(attack),
      defense: Number(defense),
      speed: Number(speed),
      height: Number(height),
      weight: Number(weight),
      image,
    });
    const typeDb = await Type.findAll({
      where: { name: types },
    });
    newPokemon.addType(typeDb);
    return res.status(200).json(newPokemon);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    const pokemonInfoTotal = await getAllPokemons();
    if (name) {
      let pokemonName = await pokemonInfoTotal.filter(
        (el) => el.name.toLowerCase() === name.toLowerCase()
      );
      console.log(pokemonName);
      if (pokemonName.length < 1) throw new Error("Pokemon no encontrado ");
      if (pokemonName.length) res.status(200).send(pokemonName);
    } else {
      res.status(200).send(pokemonInfoTotal);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const pokemonInfoTotal = await getAllPokemons();

    if (id.length) {
      let pokeFiltrado = await pokemonInfoTotal.filter((el) => el.pokeId == id);
      if (pokeFiltrado.length < 1) {
        throw new Error("Pokemon no encontrado");
      }
      return res.status(200).send(pokeFiltrado);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
