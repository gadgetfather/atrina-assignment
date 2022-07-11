import React from "react";
import styles from "./ProductCard.module.css";
export function ProductCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img
          className={styles.product_image}
          src="https://picsum.photos/300"
          alt=""
        />
      </div>
      <div className={styles.product_details}>
        <h3>Product Title</h3>
        <p>Price</p>
        <button className={styles.cart_button}>Add To Cart</button>
      </div>
    </div>
  );
}
