import { createContext } from "react";

interface iProvaContext {
  state: string;
  setState: (value: string) => void;
}

const initialState = {
  state: "Valore iniziale nel caso di context fuori dal tag 'Provider'",
  setState: () => {},
};

export const ProvaContext = createContext<iProvaContext>(initialState);
