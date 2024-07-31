import { pokemonApi } from "@/store/api/pokemon/pokemon.api";
import { createSlice } from "@reduxjs/toolkit";
import { IPokemon } from "./pokemon.interface";

interface IPokemonState {
  pokemon: IPokemon | undefined;
}

const initialState: IPokemonState = {
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
