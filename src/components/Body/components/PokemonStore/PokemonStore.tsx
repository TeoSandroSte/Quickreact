import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const PokemonStore = () => {
  console.log("carico Pokemon Store");

  const { pokemonSlice } = useSelector((state: RootState) => state);

  return (
    <>
      <br />
      <span>{pokemonSlice.pokemon?.name}</span>
    </>
  );
};

export default PokemonStore;
