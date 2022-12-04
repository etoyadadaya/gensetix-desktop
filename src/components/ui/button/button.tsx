import React, {FC} from "react";
import {Link} from "react-router-dom";

interface Button {
  children: React.ReactNode;
  to: string;
}

export const Button: FC<Button> = ({children, to}) => {
  return (
    <Link className="Button" to={to}>{children}</Link>
  );
};
