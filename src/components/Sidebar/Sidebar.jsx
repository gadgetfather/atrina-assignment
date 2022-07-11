import React from "react";
import {
  IcRoundHome,
  IcRoundShoppingCart,
  Inventory,
  Login,
  MakiClothingStore,
} from "../../utility/Icons";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
export function Sidebar(props) {
  const { isOpen } = props;

  return (
    <div className={`${styles.sidebar} ${isOpen && styles.sidebar_open} `}>
      <Link to={"/"} className={styles.sidebar_item}>
        <IcRoundHome />
        <p>Home</p>
      </Link>
      <Link to={"/ProductPage"} className={styles.sidebar_item}>
        <MakiClothingStore />
        <p>Products</p>
      </Link>
      <Link to={"/cart"} className={styles.sidebar_item}>
        <IcRoundShoppingCart />
        <p>Cart</p>
      </Link>
      <Link to={"/inventory"} className={styles.sidebar_item}>
        <Inventory />
        <p>Inventory</p>
      </Link>
      <Link to={"/LoginPage"} className={styles.sidebar_item}>
        <Login />
        <p>Login</p>
      </Link>
    </div>
  );
}
