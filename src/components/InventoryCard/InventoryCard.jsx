import React from "react";
import { useInventory } from "../../context/inventory-context";
import { IcRoundDelete, IcRoundEdit } from "../../utility/Icons";
import styles from "./InventoryCard.module.css";
export function InventoryCard(props) {
  const { data_id, title, price, categoryName, image, stock, size } = props;
  const { inventory, setInventory, setEditItem, setEditModal } = useInventory();
  const handleDeleteProduct = (e, id) => {
    const newArr = inventory.filter((product) => product.data_id !== id);
    setInventory(newArr);
  };
  const handleEdit = () => {
    setEditModal(true);
    setEditItem(props);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={styles.card_container}>
      <IcRoundEdit onClick={handleEdit} className={styles.edit_icon} />
      <IcRoundDelete
        onClick={(e) => handleDeleteProduct(e, data_id)}
        className={styles.delete_icon}
      />
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="product" />
      </div>
      <div className={styles.product_details}>
        <h2>{title}</h2>
        <p>Category: {categoryName}</p>
        <p>Price: Rs.{price}</p>
        <p>Stock: {stock}</p>
        <p>Size: {size}</p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}
