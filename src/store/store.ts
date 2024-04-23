import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice.slice";

import { pokemonApi } from "./api/pokemon/pokemon.api";
import pokemonSlice from "./slices/pokemon/pokemon.slice";

export const storeName = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    pokemonSlice: pokemonSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof storeName.getState>;

export type AppDispatch = typeof storeName.dispatch;
