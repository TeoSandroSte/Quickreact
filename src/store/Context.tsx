import { createContext } from "react";

interface iContext {
  contextState: string;
  setContextState: (value: string) => void;
}

const initialState = {
  contextState: "Sono iniziale ed esterno",
  setContextState: () => {},
};

export const Context = createContext<iContext>(initialState);
