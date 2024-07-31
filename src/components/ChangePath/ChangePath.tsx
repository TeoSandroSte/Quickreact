import { useRouter } from "next/router";
import React from "react";
import styles from "../../pages/App.module.scss";

const ChangePath = () => {
  console.log("carico ChangePath");

  const router = useRouter();

  const goToPath = () => {
    router.push("/path");
  };

  return (
    <div className={styles.component}>
      <h3>Change Path:</h3>
      <button onClick={goToPath}>Vai alla pagina con rotta /path</button>
    </div>
  );
};

export default ChangePath;
