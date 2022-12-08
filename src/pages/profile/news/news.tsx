import React, {FC} from "react";
import styles from "./news.module.scss";

export const News: FC = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.wrap}></div>
        <div className={styles.content}>
          <p className={styles.name}>PATCH 1</p>
          <p className={styles.subName}>GENSETIX HOT FIX</p>
        </div>
      </div>
    </div>
  );
};
