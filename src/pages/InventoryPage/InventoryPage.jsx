import React from "react";
import { EditModal, InventoryCard, ProductForm } from "../../components";
import { Toaster } from "react-hot-toast";

import { useInventory } from "../../context/inventory-context";
import styles from "./InventoryPage.module.css";
export function InventoryPage() {
  const { inventory } = useInventory();
  const { editModal } = useInventory();
  return (
    <div className={styles.InventoryPage}>
      {editModal && <EditModal />}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
        }}
      />
      <h2 className={styles.section_title}>Inventory</h2>
      <div className={styles.inventory_section}>
        <div className={styles.left_section}>
          {inventory.map((product) => (
            <InventoryCard key={product.data_id} {...product} />
          ))}
        </div>
        <div className={styles.right_section}>
          <h2>Add Product</h2>
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
