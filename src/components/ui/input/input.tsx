import React, {FC} from "react";

interface Input {
  placeholder: string;
}

export const Input: FC<Input> = ({placeholder}) => {
  return (
    <input className="Input" placeholder={placeholder}></input>
  )
}
