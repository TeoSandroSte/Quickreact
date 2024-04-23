import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { storeName } from "@/store/store";

const index = () => {
  console.log("carico pagina Index");
  return (
    <Provider store={storeName}>
      <App />
    </Provider>
  );
};

export default index;
