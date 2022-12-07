import React, { FC } from "react";
import styles from "./account.module.scss";
import { Button } from "../../../components/ui/button/button";

const Account: FC = () => {
  return (
    <>
      <div className={styles.account}>
        <div className={styles.header}>
          <p>My account</p>
          <div className={styles.user}>
            <div className={styles.bg}></div>
            <div className={styles.avatar}></div>
            <div className={styles.userInfo}>
              <h3 className={styles.client}>Client</h3>
              <h1 className={styles.nameWrap}>
                <p className={styles.username}>Username</p>
                <p className={styles.discriminator}>#6666</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.detailsTitle}>Details</p>
        <div className={styles.detailsInfo}>
          <p className={styles.detailsTitle}>Username</p>
          <Button variant="details">Change user name</Button>
        </div>
        <div className={styles.detailsInfo}>
          <p className={styles.detailsTitle}>14/14/2077</p>
          <Button variant="details">Change date of birth</Button>
        </div>
        <div className={styles.detailsInfo}>
          <p className={styles.detailsTitle}>fuc********tch@gmail.com</p>
          <Button variant="details">Change email address</Button>
        </div>
      </div>
      <div className={styles.TFA}>
        <p className={styles.TFATitle}>Two-factor authentication</p>
        <Button variant="profile">Enable TFA</Button>
      </div>
      <div className={styles.buttons}>
        <Button variant="profile">Log out</Button>
        <Button variant="profile">Delete account</Button>
      </div>
    </>
  );
};

export default Account;
