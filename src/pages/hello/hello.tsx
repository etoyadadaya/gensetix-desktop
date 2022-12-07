import React from "react";
import styles from "./hello.module.scss";
import {Input} from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";
import { useNavigate } from "react-router-dom";

export const Hello = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <Input placeholder="Enter your email"/>
          <Input placeholder="Enter your password"/>
          <Button onClick={() => navigate("/profile")} variant="profile">Login</Button>
        </div>
      </div>
    </div>
  );
};
