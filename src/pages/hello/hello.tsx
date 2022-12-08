import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./hello.module.scss";
import { Input } from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";

export const Hello = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <h1>Welcome back!</h1>
            <h3>Please enter your details</h3>
            <div className={styles.login}>
              <div className={styles.loginPlaceholder}>
                <p>Email</p>
                <p className={styles.dot}>*</p>
              </div>
              <Input placeholder="Enter your email" />
            </div>
            <div className={styles.login}>
              <div className={styles.loginPlaceholder}>
                <p>Password</p>
                <p className={styles.dot}>*</p>
              </div>
              <Input placeholder="Enter your password" />
            </div>
            <div className={styles.options}>
              <a className={styles.optionsForgot}>Forgot your password?</a>
            </div>
            <Button onClick={() => navigate("/profile/news")} variant="login">
              Login
            </Button>
            <div className={styles.newAcc}>
              <p className={styles.newNoAcc}>Don`t have an account?</p>
              <a className={styles.newAccSignUp}>Register</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};
