import React from "react";
import { IcRoundEdit } from "../../utility/Icons";
import styles from "./InventoryCard.module.css";
export function InventoryCard() {
  return (
    <div className={styles.card_container}>
      <IcRoundEdit className={styles.edit_icon} />
      <div className={styles.image_container}>
        <img src="https://picsum.photos/200" alt="product" />
      </div>
      <div className={styles.product_details}>
        <h2>Title</h2>
        <p>Product Category</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}
