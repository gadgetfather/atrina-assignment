import React, { useState } from "react";
import styles from "./ProductForm.module.css";
import { useInventory } from "../../context/inventory-context";
const initialState = {
  title: "",
  price: "",
  categoryName: "",
  size: "",
  stock: "",
};
export function ProductForm() {
  const { inventory, setInventory } = useInventory();

  const [formDetails, setFormDetails] = useState(initialState);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const lastId = inventory.at(-1);

    setInventory([
      { ...formDetails, data_id: lastId.data_id + 1 },
      ...inventory,
    ]);
    setFormDetails(initialState);
  };

  return (
    <form className={styles.form_container}>
      <div className={styles.form_element}>
        <label htmlFor="Name">Name:</label>
        <input
          placeholder="Enter Product name"
          onChange={(e) =>
            setFormDetails({ ...formDetails, title: e.target.value })
          }
          value={formDetails.title}
          type="text"
        />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Price:</label>
        <input
          placeholder="Enter price"
          onChange={(e) =>
            setFormDetails({ ...formDetails, price: e.target.value })
          }
          value={formDetails.price}
          type="number"
        />
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">category:</label>
        <select
          onChange={(e) =>
            setFormDetails({ ...formDetails, categoryName: e.target.value })
          }
          name="Category"
        >
          <option value="">--select category--</option>

          <option value="men">men</option>
          <option value="women">women</option>
        </select>
      </div>
      <div className={styles.form_element}>
        <label htmlFor="Name">Size:</label>
        <select
          onChange={(e) =>
            setFormDetails({ ...formDetails, size: e.target.value })
          }
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
          placeholder="Enter Stock"
          onChange={(e) =>
            setFormDetails({ ...formDetails, stock: e.target.value })
          }
          value={formDetails.stock}
          type="number"
        />
      </div>
      <button
        onClick={(e) => handleAddProduct(e)}
        className={styles.form_submit}
      >
        Add Product
      </button>
    </form>
  );
}
