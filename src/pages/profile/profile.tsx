import React, { FC } from "react";
import styles from "./profile.module.scss"
import Header from "../../components/layout/header/header";


const Profile: FC = () => {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  );
};

export default Profile;
