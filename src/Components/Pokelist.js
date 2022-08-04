import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
// import SearchBar from "./SearchBar";
import {AppBar, Grid} from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";
// import "../App.css";


function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px",
      justifyContent: "center"
    }
  }));
  // const [search, setSearch] = useState("");
  const classes = useStyles();
  
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
      <AppBar position="static">
        <div className="pokedex">
          <a href="/">
            <img  src="/Images/pika-top.png" alt="" width="300px" height="200px" />
          </a>
          <h2 >The Pokelist</h2>
          {/* <SearchBar handleSearch={searchChange} /> */}
        </div>
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {pokemons.map((pokemon, i) => (
          <Pokecard id={i + 1} key={i} name={pokemon.name} />
        ))}
      </Grid>
    </div>
  );
}

export default Pokelist;
