import React from "react";
import { Inventory, Login, MakiClothingStore } from "../../utility/Icons";
import styles from "./Sidebar.module.css";
export function Sidebar(props) {
  const { isOpen } = props;

  return (
    <div className={`${styles.sidebar} ${isOpen && styles.sidebar_open} `}>
      <div className={styles.sidebar_item}>
        <MakiClothingStore />
        <p>Products</p>
      </div>
      <div className={styles.sidebar_item}>
        <Inventory />
        <p>Inventory</p>
      </div>
      <div className={styles.sidebar_item}>
        <Login />
        <p>Login</p>
      </div>
    </div>
  );
}
