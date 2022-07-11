import React from "react";
import { Hero, ProductCard } from "../../components";
import styles from "./Homepage.module.css";
export function Homepage() {
  return (
    <div className={styles.homepage_container}>
      <Hero />
      <div className={styles.our_products}>
        <h2 className={styles.section_title}>Some Products</h2>
        <div className={styles.product_section}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
