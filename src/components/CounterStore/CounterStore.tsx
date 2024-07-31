import React from "react";
import Dispatch from "./components/Dispatch/Dispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styles from "../../pages/App.module.scss";

const CounterStore = () => {
  console.log("carico CounterStore");

  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className={styles.component}>
      <h3>Store Example:</h3>
      <p>Il Counter Store parte da -5: </p>
      <p>
        <i>{counter}</i>
      </p>
      <Dispatch />
    </div>
  );
};

export default CounterStore;
