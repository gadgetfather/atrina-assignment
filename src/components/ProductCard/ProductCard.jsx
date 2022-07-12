import React from "react";
import { useCart } from "../../context/cart-context";
import { ADD_TO_CART } from "../../reducer/cartReducer";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
export function ProductCard(props) {
  const { title, price, image, data_id } = props;

  const {
    dispatch,
    cart: { cart },
  } = useCart();
  const navigate = useNavigate();

  const handleCart = (props) => {
    dispatch({ type: ADD_TO_CART, payload: props });
  };
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img
          className={styles.product_image}
          src={image}
          alt="https://picsum.photos/300"
        />
      </div>
      <div className={styles.product_details}>
        <h3>{title}</h3>
        <p>Rs.{price}</p>
        {cart.some((item) => item.data_id === data_id) ? (
          <button
            onClick={() => navigateToCart(props)}
            className={styles.cart_button}
          >
            Go To Cart
          </button>
        ) : (
          <button
            onClick={() => handleCart(props)}
            className={styles.cart_button}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
