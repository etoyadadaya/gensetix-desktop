import {HTMLProps} from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "profile" | "details" | "login";
}
