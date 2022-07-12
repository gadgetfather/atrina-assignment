import React, { useInsertionEffect } from "react";
import { ProductCard } from "../../components";
import { useInventory } from "../../context/inventory-context";

import styles from "./ProductPage.module.css";
export function ProductPage() {
  const { inventory } = useInventory();
  return (
    <div className={styles.ProductPage}>
      <h1 className={styles.section_title}>Products</h1>
      <div className={styles.product_grid}>
        {inventory.map((product) => (
          <ProductCard key={product.data_id} {...product} />
        ))}
      </div>
    </div>
  );
}
