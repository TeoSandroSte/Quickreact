import { useState } from "react";

import { ProvaContext } from "@/store/ProvaContext";

const Body = ({ children }: any) => {
  console.log("carico pagina Body");

  const [state, setState] = useState(
    "Valore iniziale context nel componente Body"
  );

  return (
    <div>
      <ProvaContext.Provider value={{ state, setState }}>
        {children}
      </ProvaContext.Provider>
    </div>
  );
};

export default Body;
