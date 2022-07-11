import React from "react";
import styles from "./SignupPage.module.css";
import { Link } from "react-router-dom";
export function SignupPage() {
  return (
    <div className={styles.signupPage}>
      <h1>Sign up </h1>
      <div className={styles.signup_form}>
        <label className={styles.form_label} htmlFor="email">
          Email
          <input className={styles.input} type="text" />
        </label>
        <label className={styles.form_label} htmlFor="password">
          Password
          <input className={styles.input} type="password" />
        </label>
        <label className={styles.form_label} htmlFor="password">
          Confirm Password
          <input className={styles.input} type="password" />
        </label>
        <button className={styles.signup_button}>signup</button>
        <div>
          <p>Already have account?</p>
          <Link className={styles.link_tag} to={"/LoginPage"}>
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
