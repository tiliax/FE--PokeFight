import React, { useEffect, useState } from "react";
import {AppBar, Box as div} from "@material-ui/core";
//import Box from '@mui/material/Box';
import Pokecard from "./Pokecard";
import { useParams } from "react-router-dom";

export default function PokeFight(){
    const {pokemon} = useParams();
    const [poke, setPokemon] = useState({});
    const [randomPoke, setRandomPoke] = useState({});
    const [spinner, setSpinner] = useState();

    let firstPoke = 1;
    let lastPoke = 809;
    function getRandomPoke() {
        return  Math.floor(Math.random() * (lastPoke - firstPoke + 1)) + firstPoke;
    }
    const getPokeDetail = (pokemonId) =>{
        const pokeDetail = fetch(`https://blooming-bayou-85292.herokuapp.com/pokemon/${pokemonId}`)
        .then((response) => response.json())
        return pokeDetail
    }
    useEffect(async() => {
        setSpinner(false);
        const myPoke = await getPokeDetail(pokemon)
        const enemyPoke = await getPokeDetail(getRandomPoke())
        setPokemon(myPoke)
        setRandomPoke(enemyPoke)
        setSpinner(true)
    }, [])
    console.log(poke)


    function fightHandler(poke, randomPoke) {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        console.log(randomNumber);
        console.log(poke);
        if (randomNumber === 1) {
            return `${poke.name.english} won!`
        } else {
            return `${poke.name.english} lost!!`
        }
    };

    return(
        <>
            <div className="App">
                 <AppBar position="static">
                    <div className="pokedex">
                    <a href="/">
                        <img src="/Images/pika-top.png" alt="" width="300px" height="200px" />
                    </a>
                    <h2>Poke Fight!</h2>
                    </div>
                 </AppBar>
            </div>
            {spinner ?
                <>
                <div className="pokeFight">
                    <div>
                        <Pokecard id={poke.id} key={1} name={poke.name.english} />
                    </div>
                    <div>
                        <img src="/Images/26a1.png" alt="thunder" width="200px" />
                    </div> 
                    <div>
                        <Pokecard id={randomPoke.id} key={2} name={randomPoke.name.english}/>
                    </div>
                </div> 
                <div className="pokeFight">
                    <h1>{fightHandler(poke, randomPoke)}</h1>
                </div>
            </>
                : 
                null}
        </>
    )
}