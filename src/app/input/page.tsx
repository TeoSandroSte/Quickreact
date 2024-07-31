"use client";

import Header from "@/components/Header/Header";
import InputControlled from "@/components/Inputs/InputControlled/InputControlled";
import InputHookForm from "@/components/Inputs/InputHookForm/InputHookForm";
import React from "react";
import styles from "./page.module.scss";

const input = () => {
  return (
    <div>
      <Header />

      <div className={styles.input}>
        <InputHookForm />

        <InputControlled />
      </div>
    </div>
  );
};

export default input;
