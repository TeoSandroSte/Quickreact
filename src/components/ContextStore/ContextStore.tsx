import { Context } from "@/store/Context";
import React, { useState } from "react";
import ContextSetTimeout from "./components/ContextSetTimeout/ContextSetTimeout";
import ContextValueAndSet from "./components/ContextValueAndSet/ContextValueAndSet";
import styles from "../../pages/App.module.scss";

const ContextStore = () => {
  console.log("carico ConextStore");

  const [contextState, setContextState] = useState(
    "Valore iniziale context nel componente Body"
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      <div className={styles.component}>
        <h3>Context Example:</h3>
        <ContextSetTimeout />
        <ContextValueAndSet />
      </div>
    </Context.Provider>
  );
};

export default ContextStore;
