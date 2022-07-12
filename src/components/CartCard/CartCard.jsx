import React from "react";
import toast from "react-hot-toast";
import { useCart } from "../../context/cart-context";
import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../../reducer/cartReducer";
import { IcSharpClose } from "../../utility/Icons";
import styles from "./CartCard.module.css";
export function CartCard(props) {
  const { data_id, title, image, price, quantity = 0 } = props;
  const { dispatch } = useCart();

  const handleRemoveFromCart = (data_id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: data_id });
    toast.error("Removed From Cart");
  };

  const handleIncreaseQuantity = (data_id) => {
    console.log("clicked");
    dispatch({ type: INCREASE_QUANTITY, payload: data_id });
  };

  const handleDecreaseQuantity = (data_id) => {
    console.log("clicked");
    dispatch({ type: DECREASE_QUANTITY, payload: data_id });
  };

  return (
    <div className={styles.card_container}>
      <IcSharpClose
        className={styles.close_icon}
        onClick={() => handleRemoveFromCart(data_id)}
      />
      <div className={styles.image_container}>
        <img className={styles.product_image} src={image} alt="" />
      </div>
      <div className={styles.right_section}>
        <h2>{title}</h2>
        <div className={styles.modify_quantity}>
          <h4>Quantity</h4>
          <button
            onClick={() => handleDecreaseQuantity(data_id)}
            className={styles.quantity_button}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => handleIncreaseQuantity(data_id)}
            className={styles.quantity_button}
          >
            +
          </button>
        </div>
        <div>
          <p>Rs.{price}</p>
        </div>
      </div>
    </div>
  );
}
