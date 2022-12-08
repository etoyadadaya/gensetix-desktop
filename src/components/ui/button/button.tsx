import React, {FC} from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import {IButton} from "./button.types";

export const Button: FC<IButton> = ({ children, variant, onClick }) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.profile]: variant === "profile",
      [styles.details]: variant === "details",
      [styles.login]: variant === "login",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
