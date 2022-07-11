import React from "react";
import { ProductCard } from "../../components";
import styles from "./ProductPage.module.css";
export function ProductPage() {
  return (
    <div className={styles.ProductPage}>
      <h1 className={styles.section_title}>Products</h1>
      <div className={styles.product_grid}>
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}
