import React, { useState } from "react";
import styles from "../../pages/App.module.scss";

const JSApiCall = () => {
  console.log("carico JSApiCall");

  const [pokemon, setPokemon] = useState<string>("");

  const handleOnClick = () => {
    const casualPokemon = (Math.floor(Math.random() * 1025) + 1).toString();

    fetch(`https://pokeapi.co/api/v2/pokemon/${casualPokemon}`)
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("API request failed");
        }
      })
      .then((data) => {
        console.log("b: ", data);
        setPokemon(data.name);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.component}>
      <h3>JS Query Example:</h3>
      <button onClick={handleOnClick}>Pokemon Casuale JS</button>
      <p>Valore pokemon della singola chiamata:</p>
      <p>
        <i>{pokemon}</i>
      </p>
    </div>
  );
};

export default JSApiCall;
