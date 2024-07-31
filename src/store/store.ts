import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice.slice";
import pokemonReducer from "./slices/pokemon/pokemonSlice.slice";

import { pokemonApi } from "./api/pokemon/pokemon.api";

export const storeName = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    pokemonSlice: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof storeName.getState>;

export type AppDispatch = typeof storeName.dispatch;
