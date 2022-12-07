import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hello.module.scss";
import { Input } from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";

export const Hello = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter your password" />
          <Button onClick={() => navigate("/profile/news")} variant="profile">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
