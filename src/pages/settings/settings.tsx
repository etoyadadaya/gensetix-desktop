import React, { FC } from "react";
import styles from "./settings.module.scss"
import Header from "../../components/layout/header/header";
import {Outlet} from "react-router-dom";
import NavLink from "../../components/ui/navLink/navLink";

const Settings: FC = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <NavLink to={"/settings/account"} >My account</NavLink>
            <NavLink to={"/settings/orders"}>My orders</NavLink>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
