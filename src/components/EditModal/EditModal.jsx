import React, { useState } from "react";
import { useInventory } from "../../context/inventory-context";
import { IcSharpClose } from "../../utility/Icons";
import styles from "./EditModal.module.css";

export function EditModal() {
  const { editItem, setEditItem, setEditModal, setInventory, inventory } =
    useInventory();
  const handleCloseModal = () => {
    setEditModal(false);
    document.body.style.overflow = "auto";
  };

  const handlesubmiEdit = (e) => {
    e.preventDefault();
    const updatedInventory = inventory.map((product) =>
      product.data_id === editItem.data_id ? { ...editItem } : product
    );
    setInventory(updatedInventory);
    handleCloseModal();
  };
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h2>Edit item</h2>
          <IcSharpClose onClick={handleCloseModal} />
        </div>
        <div className={styles.form_element}>
          <label htmlFor="Name">Name:</label>
          <input
            onChange={(e) =>
              setEditItem({ ...editItem, title: e.target.value })
            }
            value={editItem.title}
            type="text"
          />
        </div>
        <div className={styles.form_element}>
          <label htmlFor="Name">Price:</label>
          <input
            onChange={(e) =>
              setEditItem({ ...editItem, price: e.target.value })
            }
            value={editItem.price}
            type="number"
          />
        </div>
        <div className={styles.form_element}>
          <label htmlFor="Name">category:</label>
          <select
            onChange={(e) =>
              setEditItem({ ...editItem, categoryName: e.target.value })
            }
            name="Category"
            value={editItem.categoryName}
          >
            <option value="">--select category--</option>
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </div>
        <div className={styles.form_element}>
          <label htmlFor="Name">Size:</label>
          <select
            onChange={(e) => setEditItem({ ...editItem, size: e.target.value })}
            value={editItem.size}
            name="size"
          >
            <option value="">--select size--</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
          </select>
        </div>
        <div className={styles.form_element}>
          <label htmlFor="Name">Stock:</label>
          <input
            onChange={(e) =>
              setEditItem({ ...editItem, stock: e.target.value })
            }
            value={editItem.stock}
            type="number"
          />
        </div>
        <button onClick={handlesubmiEdit} className={styles.edit_button}>
          Edit Item
        </button>
      </div>
    </div>
  );
}
