import React, { FC } from "react";
import styles from "./header.module.scss"
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Header: FC = () => {

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt=""/>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Collection</li>
        <li>Shop</li>
      </ul>
    </div>
  );
};

export default Header;
