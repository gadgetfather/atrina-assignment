import React from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <h1>Login </h1>
      <div className={styles.login_form}>
        <label className={styles.form_label} htmlFor="email">
          Email
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.form_label} htmlFor="password">
          Password
          <input className={styles.input} type="password" />
        </label>
        <button className={styles.login_button}>Login</button>
        <div>
          <p>Don't have account?</p>
          <Link className={styles.link_tag} to={"/SignupPage"}>
            Create now
          </Link>
        </div>
      </div>
    </div>
  );
}
