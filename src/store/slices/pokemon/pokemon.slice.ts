import { pokemonApi } from "@/store/api/pokemon/pokemon.api";
import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemon.interface";

interface IPokemon {
  pokemon: Pokemon | undefined;
}

const initialState: IPokemon = {
  pokemon: undefined,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemonByName.matchFulfilled,
      (state, action) => {
        state.pokemon = action.payload;
      }
    );
  },
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
