import api from "../api/api";
import { useState, useEffect } from "react";

//get our pokemonTable child component
import PokemonTable from "./PokemonTable";

//Our Landing Page
function LandingPage() {
    //use state to store our pokemon data
    const [pokemon, setPokemon] = useState(null);

    //get pokemon data from our backend
    function getPokemon() {
        //call our backend to get pokemon data
        api.get("/pokemon")
            .then(function (response) {
                //go through all data and add a key to each pokemon
                response.data.forEach((pokemon, index) => {
                    pokemon.key = index + 1;
                });

                //set pokemon state to the data we received
                setPokemon(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    //useEffect to call getPokemon when the component mounts
    useEffect(() => {
        getPokemon();
    }, []);

    return <PokemonTable pokemon={pokemon} />;
}

export default LandingPage;
