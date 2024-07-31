import {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} from "@/store/api/pokemon/pokemon.api";
import React from "react";
import styles from "./PokemonCall.module.scss";

const PokemonCall = () => {
  console.log("carico PokemonCall");

  const { data } = useGetPokemonByNameQuery("pikachu");
  const [triggerGetPokemon, responseGetPokemon] =
    useLazyGetPokemonByNameQuery();

  const choosePokemonHandler = () => {
    triggerGetPokemon((Math.floor(Math.random() * 1025) + 1).toString());
  };

  return (
    <div className={styles.pokemon}>
      {data && (
        <img
          className={styles.pokemon_img}
          src={
            responseGetPokemon.data?.sprites.front_default ||
            data.sprites.front_shiny
          }
          alt={""}
        />
      )}
      <br />
      <button onClick={choosePokemonHandler}>Pokemon casuale RTKQuery</button>
    </div>
  );
};

export default PokemonCall;
