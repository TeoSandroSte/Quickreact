"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "./InputHookForm.models";
import styles from "../Input.module.scss";

const InputHookForm = () => {
  console.log("carico InputHookForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    console.log("data: ", data);

  console.log("e", errors.textField);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.input}>
        <input
          {...register("textField", {
            required: true,
            minLength: 4,
          })}
        />

        <button type="submit">submit hook form</button>

        {errors.textField?.type === "required" && <p>Please fill</p>}
        {errors.textField?.type === "minLength" && (
          <p>Please fill with 4 char</p>
        )}
      </form>
    </div>
  );
};

export default InputHookForm;
