import { useRouter } from "next/router";
import React from "react";
import styles from "../../pages/App.module.scss";

const AppStructure = () => {
  console.log("carico AppStructure");

  const router = useRouter();

  const goToPath = () => {
    router.push("/input");
  };

  return (
    <div className={styles.component__last}>
      <h3>Go to App structure:</h3>
      <button onClick={goToPath}>
        Vai alla pagina gestita con struttura App
      </button>
    </div>
  );
};

export default AppStructure;
