const pokedex = require('../data/pokedex')

//load all of our pokemon into memory
const allPokemon = pokedex.pokedex;

/**
 * Returns a list of all of the pokemon in our pokedex
 * GET /pokemon
 * @param {Request} req - the incoming request
 * @param {Response} res - the response to send
 * @param {Next} next - the next middleware to call
 */
exports.pokemon = (req, res, next) => {
    try {
        console.log(`GET /pokemon called`)

        //return our response
        res.send(allPokemon)
    } catch(err) {
        console.error(`Error in GET /pokemon, err: ${err}`)
        res.send([]);
    }
}

/**
 * Returns a pokemons information based on the name query parameter
 * GET /pokemon/name?name=bulbasaur
 * @param {Request} req - the incoming request
 * @param {Response} res - the response to send
 * @param {Next} next - the next middleware to call
 */
exports.name = (req, res, next) => {
    try {
        console.log(`GET /pokemon/name called with name: ${JSON.stringify(req.query.name)}`)

        //get the name from the query parameter
        let name = req.query.name;

        //find the pokemon by name
        let pokemon = allPokemon.filter(poke => poke.name.english.toLowerCase() === name.toLowerCase());

        //get the length of our pokemon array
        let length = pokemon.length;

        //if we have a pokemon, return it
        if (length > 0) {
            res.send(pokemon[0]);
        } else {
            res.send(null);
        }
    
    } catch(err) {
        console.error(`Error in GET /pokemon/name, err: ${err}`)
        res.send(null)
    }
}

/**
 * Returns a pokemons information based on the number query parameter
 * GET /pokemon/name?name=bulbasaur
 * @param {Request} req - the incoming request
 * @param {Response} res - the response to send
 * @param {Next} next - the next middleware to call
 */
exports.number = (req, res, next) => {
    try {
        console.log(`GET /pokemon/number called with number: ${JSON.stringify(req.query.number)}`)

        //parse our query string property "number" into an integer (number)
        let number = parseInt(req.query.number);

        //find the pokemon by number
        let pokemon = allPokemon.filter(poke => poke.id === number);

        //get the length of our pokemon array
        let length = pokemon.length;

        //if we have a pokemon, return it
        if (length > 0) {
            res.send(pokemon[0]);
        } else {
            res.send(null);
        }
    
    } catch(err) {
        console.error(`Error in GET /pokemon/number, err: ${err}`)
        res.send(null)
    }
}