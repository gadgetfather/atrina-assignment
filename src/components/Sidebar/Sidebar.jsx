import React from "react";
import {
  IcRoundHome,
  IcRoundShoppingCart,
  Inventory,
  Login,
  MakiClothingStore,
} from "../../utility/Icons";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
export function Sidebar(props) {
  const { isOpen } = props;

  return (
    <div className={`${styles.sidebar} ${isOpen && styles.sidebar_open} `}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
        to={"/"}
      >
        <IcRoundHome />
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/ProductPage"}
        className={({ isActive }) =>
          isActive
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
      >
        <MakiClothingStore />
        <p>Products</p>
      </NavLink>
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          isActive
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
      >
        <IcRoundShoppingCart />
        <p>Cart</p>
      </NavLink>
      <NavLink
        to={"/inventory"}
        className={({ isActive }) =>
          isActive
            ? ` ${styles.active} ${styles.sidebar_item}`
            : `${styles.sidebar_item}`
        }
      >
        <Inventory />
        <p>Inventory</p>
      </NavLink>
      <NavLink
        to={"/LoginPage"}
        className={({ isActive }) =>
          isActive
            ? `${styles.sidebar_item} ${styles.active}`
            : `${styles.sidebar_item}`
        }
      >
        <Login />
        <p>Login</p>
      </NavLink>
    </div>
  );
}
