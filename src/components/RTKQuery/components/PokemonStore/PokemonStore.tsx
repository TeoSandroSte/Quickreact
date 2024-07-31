import { RootState } from "@/store/store";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const PokemonStore = () => {
  console.log("carico Pokemon Store");

  const { pokemonSlice } = useSelector((state: RootState) => state);

  return (
    <div>
      <p>Valore preso dal Pokemon Store: </p>
      <p>
        <i>{pokemonSlice.pokemon?.name}</i>
      </p>
    </div>
  );
};

export default PokemonStore;
