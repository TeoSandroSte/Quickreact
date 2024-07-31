import React from "react";
import styles from "./App.module.scss";
import ContextStore from "@/components/ContextStore/ContextStore";
import OutsideContextStore from "@/components/OutsideContextStore/OutsideContextStore";
import CounterStore from "@/components/CounterStore/CounterStore";
import RTKQuery from "@/components/RTKQuery/RTKQuery";
import ChangePath from "@/components/ChangePath/ChangePath";
import JSApiCall from "@/components/JSApiCall/JSApiCall";
import AppStructure from "@/components/AppStructure/AppStructure";

const App = () => {
  console.log("carico pagina App");

  return (
    <div className={styles.app}>
      <h2 className={styles.component}>
        Apri la console per seguire i caricamenti dei componenti
      </h2>

      <RTKQuery />

      <JSApiCall />

      <CounterStore />

      <ContextStore />

      <OutsideContextStore />

      <ChangePath />

      <AppStructure />
    </div>
  );
};

export default App;
