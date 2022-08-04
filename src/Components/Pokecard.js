import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Pokecard({ id, name }) {
  return (
    <div className=" pokemons ma1 tc dib  ">
      <Link to={`${id}`}>
        <img
          className="pokeimage"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt=""
          width="160px"
          height="160px"
        />
        <br />
        <div className="pokenames tc dib pa1">{name}</div>
      </Link>
    </div>
  );
}

export default Pokecard;
