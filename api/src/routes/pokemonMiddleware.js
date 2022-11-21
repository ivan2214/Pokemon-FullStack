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

    let urlDeImagen = "";

    if (image.length) {
      urlDeImagen = image;
    } else {
      urlDeImagen =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";
    }

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
      image: urlDeImagen,
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonDelete = await Pokemon.findByPk(id);
    if (!pokemonDelete) {
      new Error("Pokemon no encontrado para eliminar");
      return res.status(400).send("No existe el pokemon que deseas eliminar");
    }
    pokemonDelete.destroy();
    return res.status(200).send("Pokemon eliminado correctamente");
  } catch (error) {
    res.status(400).json({ error: error.message }, "Entré al error de delete");
  }
});

router.put("/editar/:id", async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, image, types } =
      req.body;
    const { id } = req.params;
    
    if (id) {
      if (!name) {
        throw new Error("Faltan Parametros obligatorios");
      }

      const pokeEdit = await Pokemon.findByPk(id);
      await pokeEdit.update(
        {
          name,
          hp: Number(hp),
          attack: Number(attack),
          defense: Number(defense),
          speed: Number(speed),
          height: Number(height),
          weight: Number(weight),
          image,
          types,
        },
        {
          where: { id: id },
        }
      );
      const typeDb = await Type.findAll({
        where: { name: types },
      });
      await pokeEdit.addType(typeDb);
      await pokeEdit.setTypes(typeDb);
      await pokeEdit.save();
      return res.status(200).json(pokeEdit);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = router;
