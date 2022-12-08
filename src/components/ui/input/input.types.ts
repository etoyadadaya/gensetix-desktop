import {HTMLProps} from "react";

export interface IInput extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  variant?: "primary";
}
