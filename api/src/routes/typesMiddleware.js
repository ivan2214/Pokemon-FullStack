const router = require("express").Router();
const { Type } = require("../db");
const { getAllPokemons } = require("./Controllers/controllers");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const apiPromise = await axios.get("https://pokeapi.co/api/v2/type"); // traigo todos los tipos de pokemones
    let typesFromApi = apiPromise.data.results.map((t) => t.name).sort(); //tipos por orden alfabetico

    const pokeTypes = await Type.findAll({ attributes: ["id", "name"] });
    // pregunto si tengo tipos creados
    console.log(pokeTypes);
    if (pokeTypes.length > 0) {
      return res.status(200).json(pokeTypes); // si tengo algo ya en la db entonces lo retorno, es decir los tipos ya creados
    } else {
      typesFromApi.forEach((t) => {
        // si no los tengo entonces los creo con el metodo bulkcreate querecibe un array y va creando a todos los que recibi por medio de la api (typesFromApi)
        Type.bulkCreate([{ name: t }]);
      });
      // ya para este paso estan ccreados entonces los busco y simplemento los retorno junto cccon su id
      const typesAdded = await Type.findAll({ attributes: ["id", "name"] });
      return res.status(200).json(typesAdded);
    }
  } catch (error) {
    res.status(404).send("No se encontraron Tipos de Pokemones");
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    let exists = await Type.findOne({ where: { name } });
    if (!exists) {
      await Type.create({
        name: name,
      });
      return res.json({ msg: "Creaste un nuevo tipo de pokemon !!" });
    }
    res.json({ msg: "El tipo de pokemon que intentas crear ya existee !!" });
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = router;
