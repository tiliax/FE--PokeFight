import React, { useState, useEffect } from "react";
import "../App.css";

function PokeDetail({ match }) {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    fetchName();
    // console.log(match);
  }, []);

  const fetchName = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.pokemon}`)
      .then((response) => response.json())
      // .then(detail => console.log(detail));
      .then((detail) => setPokemonDetail(detail));
  };

  return (
    <div className="App">
      <div className="pokedex">
        <a href="/">
          <img src="/Images/pika-top.png" alt="" width="300px" height="200px" />
        </a>
        <h2>Details</h2>
      </div>
      <div className="details-card">
        <div>
          <img
            className=" detail-img tc dib pa1 ma2 "
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match.params.pokemon}.png`}
            alt=""
            width="200px"
            height="200px"
          />
        </div>
        <div className="details dib">
          ID: {pokemonDetail.id}
          <br />
          <br />
          name: {pokemonDetail.name}
          <br />
          <br />
          height: {pokemonDetail.height}
          <br />
          <br />
          weight: {pokemonDetail.weight}
          <br />
          <br />
          type: {pokemonDetail.types && pokemonDetail.types[0].type.name}
          <br />
          <br />
          abilities:{" "}
          {pokemonDetail.abilities && pokemonDetail.abilities[0].ability.name}
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;
