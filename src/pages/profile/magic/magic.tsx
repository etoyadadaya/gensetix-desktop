import React, { FC } from "react";
import styles from "./magic.module.scss";
import { Button } from "../../../components/ui/button/button";

const Magic: FC = () => {
  return (
    <>
      <div className={styles.container} />
      <div className={styles.box}>
        <p className={styles.name}>MINECRAFT</p>
        <p className={styles.subName}>MAGIC</p>
        <div className={styles.buttons}>
          <Button variant="profile">PLAY</Button>
          <Button variant="profile">ABOUT</Button>
        </div>
      </div>
    </>
  );
};

export default Magic;
