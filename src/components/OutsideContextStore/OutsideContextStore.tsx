import { Context } from "@/store/Context";
import { useContext } from "react";
import styles from "../../pages/App.module.scss";

const Footer = () => {
  console.log("carico OutsideContext");

  const { contextState } = useContext(Context);

  return (
    <div className={styles.component}>
      <h3>Outside Context</h3>
      <p>
        Valore iniziale nel caso di context fuori dal tag &apos;Provider&apos;:
      </p>
      <p>
        <i>{contextState}</i>
      </p>
    </div>
  );
};

export default Footer;
