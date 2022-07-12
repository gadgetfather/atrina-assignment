import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
export function Hero() {
  return (
    <div>
      <div className={styles.hero_image_container}>
        <img
          className={styles.hero_image}
          src="https://picsum.photos/1920/1080"
          alt="hero_img"
        />
        <div className={`${styles.hero_text} ${styles.overlay}`}>
          <div className={styles.text_container}>
            <h3>Try out today !</h3>

            <Link to={"/ProductPage"}>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
