import React, { FC } from "react";
import styles from "./news.module.scss";

const News: FC = () => {
  return (
    <div>
      <div className={styles.box}>
        <p className={styles.name}>ABOBA</p>
      </div>
    </div>
  );
};

export default News;
