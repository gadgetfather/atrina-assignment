export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.cart.push(action.payload);
      return {
        ...state,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.data_id != action.payload),
      };
    case INCREASE_QUANTITY:
      const updatedInventory = state.cart.map((product) =>
        product.data_id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      return {
        ...state,
        cart: updatedInventory,
      };
    case DECREASE_QUANTITY:
      const foundProduct = state.cart.find(
        (product) => product.data_id === action.payload
      );
      if (foundProduct.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(
            (product) => product.data_id !== foundProduct.data_id
          ),
        };
      } else {
        const updatedCart = state.cart.map((product) =>
          product.data_id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
  }
};
