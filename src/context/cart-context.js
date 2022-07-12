import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../reducer/cartReducer";

const cartContext = createContext();
const initialState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
