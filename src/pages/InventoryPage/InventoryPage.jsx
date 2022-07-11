import React from "react";
import { InventoryCard, ProductForm } from "../../components";
import styles from "./InventoryPage.module.css";
export function InventoryPage() {
  return (
    <div className={styles.InventoryPage}>
      <h2 className={styles.section_title}>Inventory</h2>
      <div className={styles.inventory_section}>
        <div className={styles.left_section}>
          <InventoryCard />
          <InventoryCard />
          <InventoryCard />
          <InventoryCard />
          <InventoryCard />
        </div>
        <div className={styles.right_section}>
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
