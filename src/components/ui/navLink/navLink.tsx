import React, { FC, HTMLProps } from "react";
import { NavLink as Ref } from "react-router-dom";
import styles from "./navLink.module.scss";
import clsx from "clsx";

interface INavLink extends HTMLProps<HTMLElement> {
  to: string;
}

const NavLink: FC<INavLink> = ({to, children, className, style}) => {
  return (
    <Ref
      to={to}
      style={style}
      className={({isActive}) => clsx([className, styles.link], {
        [styles.active]: isActive,
      })}
    >
      {children}
    </Ref>
  );
};

export default NavLink;
