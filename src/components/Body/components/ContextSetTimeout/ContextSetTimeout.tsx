import { ProvaContext } from "@/store/ProvaContext";
import { useContext } from "react";

const ContextSetTimeout = () => {
  console.log("carico ContextSetTimeout");

  const { setState } = useContext(ProvaContext);
  setTimeout(() => {
    setState("5 secondi, se ricari torno al valore iniziale");
  }, 5000);

  return <span>Dopo 5 secondi il context cambierà valore:</span>;
};

export default ContextSetTimeout;
