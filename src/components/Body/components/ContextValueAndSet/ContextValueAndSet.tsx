import { ProvaContext } from "@/store/ProvaContext";
import { useContext } from "react";

const ContextValueAndSet = () => {
  console.log("carico ContextValueAndSet");

  const { state, setState } = useContext(ProvaContext);
  const pageB = () => {
    setState("ContextValueAndSet");
  };
  const anotherValue = () => {
    setState("Another Value");
  };

  return (
    <>
      <br />
      <br />
      <span>{state}</span>
      <br />
      <button onClick={pageB}>PageB</button>
      <button onClick={anotherValue}>Another Value</button>
    </>
  );
};

export default ContextValueAndSet;
