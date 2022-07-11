import React from "react";
import styles from "./Hero.module.css";
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
            <p>Choose what you like</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
