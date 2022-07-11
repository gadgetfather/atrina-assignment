import React from "react";
import styles from "./ProductForm.module.css";
export function ProductForm() {
  return (
    <form className={styles.form_container}>
      <div className={styles.form_element}>
        <label htmlFor="Name">Name:</label>
        <input type="text" />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Price:</label>
        <input type="number" />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Category:</label>
        <input type="text" />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Size:</label>
        <input type="text" />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Stock:</label>
        <input type="number" />
      </div>
      <button className={styles.form_submit}>Add Product</button>
    </form>
  );
}
