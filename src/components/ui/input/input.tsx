import React, {FC} from "react";
import styles from "./input.module.scss";
import {IInput} from "./input.types";

export const Input: FC<IInput> = ({ placeholder, children, variant }) => (
  <input className={styles.primary} placeholder={placeholder}>
    {children}
  </input>
);
