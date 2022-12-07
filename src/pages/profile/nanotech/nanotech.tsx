import React, {FC} from "react";
import styles from "./nanotech.module.scss";
import {Button} from "../../../components/ui/button/button";

const Nanotech: FC = () => {
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.box}>
        <p className={styles.name}>MINECRAFT</p>
        <p className={styles.subName}>NANO-TECH</p>
        <div className={styles.buttons}>
          <Button variant={"profile"}>PLAY</Button>
          <Button variant={"profile"}>ABOUT</Button>
        </div>
      </div>
    </>
  );
};

export default Nanotech;
