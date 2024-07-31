import React, { useState } from "react";
import styles from "../Input.module.scss";

const InputControlled = () => {
  console.log("carico InputControlled");

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.input}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">submit controlled</button>
        {inputValue.length === 0 && <p>Please fill</p>}
        {inputValue.length !== 0 && inputValue.length < 4 && (
          <p>Please fill with 4 char</p>
        )}
      </form>
    </div>
  );
};

export default InputControlled;
