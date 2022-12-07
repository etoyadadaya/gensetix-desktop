import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./profile.module.scss";
import Wheel from "../../assets/settings.png";
import NavLink from "../../components/ui/navLink/navLink";
import { Button } from "../../components/ui/button/button";

const Profile: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <NavLink to="/settings">
            <img className={styles.settings} src={Wheel} alt="" />
          </NavLink>
          <NavLink to="/profile/news" className={styles.page}>
            News
          </NavLink>
          <div className={styles.backMultiply}>
            <NavLink to="/profile/hitech" className={styles.page}>
              Hi-Tech
            </NavLink>
            <NavLink to="/profile/nanotech" className={styles.page}>
              Nano-Tech
            </NavLink>
            <NavLink to="/profile/magic" className={styles.page}>
              Magic
            </NavLink>
            <NavLink to="/profile/classic" className={styles.page}>
              Classic
            </NavLink>
          </div>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
