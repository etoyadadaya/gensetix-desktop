import React, { FC } from "react";
import styles from "./header.module.scss"
import { Button } from "../../ui/button/button";
import Logo from "../../../assets/icon.png"
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      {/*<ul className={styles.menu}>*/}
      {/*  <li>Home</li>*/}
      {/*  <li>Shop</li>*/}
      {/*  <li>About us</li>*/}
      {/*</ul>*/}
      <Button onClick={() => {navigate("/settings/account")}} variant="profile">Sign Up</Button>
    </div>
  );
};

export default Header;
