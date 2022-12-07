import React, { FC, HTMLProps } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "profile" | "details";
}

export const Button: FC<Button> = ({children, variant, onClick}) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.profile]: variant === "profile",
      [styles.details]: variant === "details"
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
