import React, {FC} from "react";
import styles from "./orders.module.scss";

export const Orders: FC = () => {
  return (
    <>
      <div>
        <h2 className={styles.Title}>Transaction history</h2>
        <p>Here is a list of your past transactions.</p>
      </div>
    </>
  );
};
