const router = require("express").Router();
const { Type } = require("../db");
const { getAllPokemons } = require("./Controllers/controllers");

router.get("/", async (req, res) => {
  try {
    const cantidadTypes = await Type.count(); // cuantos hay en la db
    const allPokemons = await getAllPokemons();
    const pokeMapeados = allPokemons?.map((el) => el.types);
    res.status(200).send(pokeMapeados);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    let exists = await Type.findOne({ where: { name: name } });
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
