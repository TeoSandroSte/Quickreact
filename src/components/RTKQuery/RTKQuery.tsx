import React from "react";
import PokemonStore from "./components/PokemonStore/PokemonStore";
import PokemonCall from "./components/PokemonCall/PokemonCall";
import styles from "../../pages/App.module.scss";

const RTKQuery = () => {
  console.log("carico RTKQuery");

  return (
    <div className={styles.component}>
      <h3>RTK Query Example:</h3>
      <PokemonStore />
      <PokemonCall />
    </div>
  );
};

export default RTKQuery;
