import { createContext, useContext, useState } from "react";
import { products } from "../data/Data";

const inventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([...products]);
  const [editItem, setEditItem] = useState({
    data_id: "",
    title: "",
    price: "",
    categoryName: "",
    size: "",
    stock: "",
    image: "",
  });
  const [editModal, setEditModal] = useState(false);

  return (
    <inventoryContext.Provider
      value={{
        inventory,
        setInventory,
        editItem,
        setEditItem,
        editModal,
        setEditModal,
      }}
    >
      {children}
    </inventoryContext.Provider>
  );
};

const useInventory = () => useContext(inventoryContext);

export { useInventory, InventoryProvider };
