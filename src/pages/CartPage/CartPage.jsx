import React from "react";
import { Toaster } from "react-hot-toast";

import { CartCard } from "../../components";
import { useCart } from "../../context/cart-context";
import styles from "./CartPage.module.css";
export function CartPage() {
  const {
    cart: { cart },
  } = useCart();

  return (
    <div className={styles.cart_page}>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className={styles.section_title}>Cart</h1>
      {cart.length === 0 ? (
        <h2 className={styles.section_title}>Cart is empty..</h2>
      ) : (
        <div className={styles.main_content}>
          <div className={styles.left_section}>
            {cart.map((product) => (
              <CartCard key={product.data_id} {...product} />
            ))}
          </div>
          <div className={styles.right_section}>
            <div className={styles.bill_container}>
              <h2>Total Order</h2>
              <div className={styles.items_container}>
                {cart.map((item, i) => (
                  <div key={i} className={styles.item}>
                    <span>{item.title}</span>{" "}
                    <span>{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className={styles.total_amount}>
                <span className={styles.total_amount_header}>Total Amount</span>{" "}
                <span>
                  {cart.reduce(
                    (prev, acc) => acc.price * acc.quantity + prev,
                    0
                  )}
                </span>
              </div>
              <button className={styles.pay_button}>Pay Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
