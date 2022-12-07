import React, { FC, HTMLProps } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "profile" | "details";
}

export const Button: FC<Button> = ({ children, variant, onClick }) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.profile]: variant === "profile",
      [styles.details]: variant === "details",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
