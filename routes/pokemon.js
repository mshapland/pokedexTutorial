const express = require('express');
const router = express.Router();

//bring in our pokemon controller
const pokemonController = require('../controllers/pokemon');

//setup the route
router.use(function (req, res, next) {
    console.log(`pokemon route called`);
    next();
})

//////////////////////////////////////
//POKEMON ROUTES
//////////////////////////////////////

/**
 * Will return all of the pokemon in our pokedex
 * GET /pokemon
 */
router.route('/').get(function (req, res, next) {
    pokemonController.pokemon(req, res, next);
});

/**
 * Will return pokemon by name based on the query parameter called name
 * GET /pokemon/name?name=bulbasaur
 */
router.route('/name').get(function (req, res, next) {
    pokemonController.name(req, res, next);
})

module.exports = router;