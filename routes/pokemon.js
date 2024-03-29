const express = require('express');
const router = express.Router();
const {logger} = require('../utils/logging')

//bring in our pokemon controller
const pokemonController = require('../controllers/pokemon');

//setup the route
router.use(function (req, res, next) {
    logger(`pokemon route called`, `routes/pokemon.js`, `router.use`)
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

/**
 * Will return pokemon by number based on the query parameter called number
 * GET /pokemon/number?number=1
 */
router.route('/number').get(function (req, res, next) {
    pokemonController.number(req, res, next);
})

module.exports = router;