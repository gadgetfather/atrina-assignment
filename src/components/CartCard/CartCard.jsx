import React from "react";
import { IcSharpClose } from "../../utility/Icons";
import styles from "./CartCard.module.css";
export function CartCard() {
  return (
    <div className={styles.card_container}>
      <IcSharpClose className={styles.close_icon} />
      <div className={styles.image_container}>
        <img
          className={styles.product_image}
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div className={styles.right_section}>
        <h2>Product Title</h2>
        <div className={styles.modify_quantity}>
          <h4>Quantity</h4>
          <button className={styles.quantity_button}>-</button>
          <p>0</p>
          <button className={styles.quantity_button}>+</button>
        </div>
        <div>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
