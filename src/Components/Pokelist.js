import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
// import SearchBar from "./SearchBar";

import "../App.css";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      //.then(pokes => console.log(pokes));
      .then((pokes) => setPokemons(pokes.results));
  };

  // const searchChange = event => {
  //   setSearch(event.target.value);
  // };
  // console.log(search);

  // const filterPokemons = pokemons.filter(pokemon => {
  //   return pokemon.name.includes(search.toLowerCase());
  // });

  return (
    <div className="App">
      <div className="pokedex">
        <a href="/">
          <img src="/Images/pika-top.png" alt="" width="300px" height="200px" />
        </a>
        <h2>The Pokelist</h2>
        {/* <SearchBar handleSearch={searchChange} /> */}
      </div>
      {pokemons.map((pokemon, i) => (
        <Pokecard id={i + 1} key={i} name={pokemon.name} />
      ))}
    </div>
  );
}

export default Pokelist;
