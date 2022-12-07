import React, { FC, HTMLProps } from "react";
import styles from "./input.module.scss";

interface Input extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  variant?: "primary";
}

export const Input: FC<Input> = ({ placeholder, children, variant }) => (
  <input className={styles.primary} placeholder={placeholder}>
    {children}
  </input>
);
