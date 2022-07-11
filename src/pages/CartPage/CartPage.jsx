import React from "react";
import { CartCard } from "../../components";
import styles from "./CartPage.module.css";
export function CartPage() {
  return (
    <div className={styles.cart_page}>
      <h1 className={styles.section_title}>Cart</h1>
      <div className={styles.main_content}>
        <div className={styles.left_section}>
          <CartCard />
        </div>
        <div className={styles.right_section}>
          <div className={styles.bill_container}>
            <h2>Total Order</h2>
            <div className={styles.items_container}>
              <div className={styles.item}>
                <span>Item</span> <span>Rs.100</span>
              </div>
              <div className={styles.item}>
                <span>Item</span> <span>Rs.100</span>
              </div>
              <div className={styles.item}>
                <span>Item</span> <span>Rs.100</span>
              </div>
            </div>
            <div className={styles.total_amount}>
              <span>Total Amount</span> <span>Rs1000</span>
            </div>
            <button className={styles.pay_button}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
