import { Context } from "@/store/Context";
import { useContext } from "react";

const ContextSetTimeout = () => {
  console.log("carico ContextSetTimeout");

  const { setContextState } = useContext(Context);
  setTimeout(() => {
    setContextState(
      "Ogni 3 secondi cambio e scateno un aggiornamento di context"
    );
  }, 3000);

  return (
    <>
      <span>
        Dopo 3 secondi dal refresh della pagina o del componente, il context
        cambierà.
      </span>
      <br />
      <span>Ad ogni cambio di context si scatena un refresh:</span>
    </>
  );
};

export default ContextSetTimeout;
