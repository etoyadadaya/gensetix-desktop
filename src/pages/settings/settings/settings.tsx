import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import styles from "./settings.module.scss";
import {NavLink} from "../../../components/ui";

export const Settings: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <NavLink to="/settings/account">My account</NavLink>
            <NavLink to="/settings/orders">My orders</NavLink>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
