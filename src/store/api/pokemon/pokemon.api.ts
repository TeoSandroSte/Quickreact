import { Pokemon } from "@/store/slices/pokemon/pokemon.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name.toLowerCase()}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } =
  pokemonApi;
