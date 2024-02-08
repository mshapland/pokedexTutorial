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
        res.send(allPokemon)
    } catch(err) {
        console.error(`Error in GET /pokemon, err: ${err}`)
        res.send([]);
    }
}

exports.name = (req, res, next) => {
    try {
        console.log(`GET /pokemon/name called with name: ${JSON.stringify(req.query.name)}`)
    
        res.send(`test2`)
    } catch(err) {
        console.error(`Error in GET /pokemon/name, err: ${err}`)
        res.send('Error in GET /pokemon/name')
    }
}