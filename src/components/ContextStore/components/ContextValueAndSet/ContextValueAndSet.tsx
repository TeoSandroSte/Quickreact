import { Context } from "@/store/Context";
import { useContext } from "react";

const ContextValueAndSet = () => {
  console.log("carico ContextValueAndSet");

  const { contextState, setContextState } = useContext(Context);

  const anotherValue = () => {
    setContextState("'Cambio' e scateno un aggiornamento di context");
  };

  return (
    <>
      <p>
        <i>{contextState}</i>
      </p>
      <button onClick={anotherValue}>Context a &apos;Cambio&apos;</button>
    </>
  );
};

export default ContextValueAndSet;
