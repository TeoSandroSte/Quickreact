"use client";

import React from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

const Header = () => {
  console.log("carico Header");

  const router = useRouter();

  return (
    <div className={styles.header}>
      <button onClick={() => router.push("/")}>indietro</button>
      Questo Header (Layout) è fisso per tutti i figli di questa rotta
    </div>
  );
};

export default Header;
