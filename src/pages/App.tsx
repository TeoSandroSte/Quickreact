import Body from "@/components/Body/Body";
import ContextSetTimeout from "@/components/Body/components/ContextSetTimeout/ContextSetTimeout";
import ContextValueAndSet from "@/components/Body/components/ContextValueAndSet/ContextValueAndSet";
import Dispatch from "@/components/Body/components/Dispatch/Dispatch";
import Pokemon from "@/components/Body/components/Pokemon/Pokemon";
import PokemonStore from "@/components/Body/components/PokemonStore/PokemonStore";
import Footer from "@/components/Footer/Footer";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./App.module.scss";
import { useRouter } from "next/router";

const App = () => {
  console.log("carico pagina App");
  const router = useRouter();

  const counter = useSelector((state: RootState) => state.counter.value);
  const goToPath = () => {
    router.push("/path");
  };

  return (
    <>
      <Body>
        <div className={styles.example}>
          <h3>Context Example:</h3>
          <ContextSetTimeout />
          <ContextValueAndSet />
        </div>

        <div className={styles.example}>
          <h3>Store Example:</h3>
          <p>Lo store parte da -5: {counter}</p>
          <Dispatch />
        </div>

        <div className={styles.example}>
          <h3>RTK Query Example:</h3>
          <Pokemon />
          <PokemonStore />
        </div>
      </Body>

      <Footer />

      <br />
      <button className={styles.buttonPath} onClick={goToPath}>
        Vai alla pagina Path
      </button>
    </>
  );
};

export default App;
