import { createContext, useContext } from "react";
import { useState } from "react";
import { products } from "../data/Data";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState(products);
  return (
    <productContext.Provider value={{ data, setData }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { useProduct, ProductProvider };
