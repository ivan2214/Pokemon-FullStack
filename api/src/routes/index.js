const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const pokemonMiddleware = require("./pokemonMiddleware.js");
const typesMiddleware = require("./typesMiddleware.js");

router.use("/pokemons", pokemonMiddleware);
router.use("/types", typesMiddleware);

module.exports = router;
