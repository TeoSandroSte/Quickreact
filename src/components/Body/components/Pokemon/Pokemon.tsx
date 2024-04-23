import {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} from "@/store/api/pokemon/pokemon.api";
import React from "react";

const Pokemon = () => {
  console.log("carico Pokemon");

  const { data } = useGetPokemonByNameQuery("pikachu");
  const [triggerGetPokemon, responseGetPokemon] =
    useLazyGetPokemonByNameQuery();

  const choosePokemonHandler = () => {
    triggerGetPokemon((Math.floor(Math.random() * 151) + 1).toString());
  };

  return (
    <>
      {data && (
        <img
          src={
            responseGetPokemon.data?.sprites.front_shiny ||
            data.sprites.front_shiny
          }
        />
      )}
      <br />
      <button onClick={choosePokemonHandler}>Random Pokemon</button>
    </>
  );
};

export default Pokemon;
