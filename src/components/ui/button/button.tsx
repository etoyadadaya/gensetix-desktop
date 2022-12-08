import React, { FC, HTMLProps } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "profile" | "details" | "login";
}

export const Button: FC<Button> = ({ children, variant, onClick }) => (
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
