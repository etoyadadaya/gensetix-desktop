import React, {FC} from "react";
import styles from "./hitech.module.scss";
import {Button} from "../../../components/ui";

export const Hitech: FC = () => {
  return (
    <>
      <div className={styles.container} />
      <div className={styles.box}>
        <p className={styles.name}>MINECRAFT</p>
        <p className={styles.subName}>HI-TECH</p>
        <div className={styles.buttons}>
          <Button variant="profile">PLAY</Button>
          <Button variant="profile">ABOUT</Button>
        </div>
      </div>
    </>
  );
};
