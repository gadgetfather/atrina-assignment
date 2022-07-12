import React from "react";
import { useInventory } from "../../context/inventory-context";
import { IcRoundDelete, IcRoundEdit } from "../../utility/Icons";
import styles from "./InventoryCard.module.css";
import toast from "react-hot-toast";

export function InventoryCard(props) {
  const { data_id, title, price, categoryName, image, stock, size } = props;
  const { inventory, setInventory, setEditItem, setEditModal } = useInventory();
  const handleDeleteProduct = (e, id) => {
    const newArr = inventory.filter((product) => product.data_id !== id);
    setInventory(newArr);
    toast.error("Item has been removed");
  };
  const handleEdit = () => {
    setEditModal(true);
    setEditItem(props);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt="product" />
      </div>
      <div className={styles.product_details}>
        <div className={styles.title_wrapper}>
          <h2>{title}</h2>
          <div className={styles.icon_container}>
            <IcRoundEdit onClick={handleEdit} className={styles.edit_icon} />
            <IcRoundDelete
              onClick={(e) => handleDeleteProduct(e, data_id)}
              className={styles.delete_icon}
            />
          </div>
        </div>
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
