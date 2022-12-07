import React, { FC } from "react";
import styles from "./profile.module.scss"
import NavLink from "../../components/ui/navLink/navLink";
import Logo from "../../assets/release.png";
import Settings from "../../assets/settings.png"
import News from "../../assets/news.png";
import Java from "../../assets/java.png";
import Acc from "../../assets/icons/32x32.png";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <div className={styles.account}>
              <img className={styles.accountLogo} src={Acc} alt=""/>
              <div className={styles.accountTitles}>
                <h4>Your Name</h4>
              </div>
            </div>
            <div className={styles.news}>
              <img className={styles.newsLogo} src={News} alt=""/>
              <h4>News</h4>
            </div>
            <div className={styles.server}>
              <img className={styles.serverLogo} src={Java} alt=""/>
              <h4 className={styles.serverTitle}>MINECRAFT: <br/> GENSETIX EDITION</h4>
            </div>
          </div>
          <div className={styles.settings}>
            <img className={styles.settingsLogo} src={Settings} alt=""/>
            <NavLink to={"/settings/account"}>Settings</NavLink>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <p>MINECRAFT: GENSETIX EDITION</p>
            <div className={styles.navigation}>
              <NavLink to={"/profile/play"}>Play</NavLink>
              <NavLink to={"/profile/installations"}>Installations</NavLink>
              <NavLink to={"/profile/skins"}>Skins</NavLink>
              <NavLink to={"/profile/patches"}>Patch notes</NavLink>
            </div>
          </div>
          <Outlet/>
          <div className={styles.footer}>
            <img className={styles.logo} src={Logo} alt=""/>
            <div className={styles.info}>
              <h3 className={styles.release}>Latest release</h3>
              <h3 className={styles.version}>1.16.4</h3>
              <button className={styles.button}>PLAY</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
