import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  let updatedCart = state; // Default to current state

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart = [...state, { ...action.payload, quantity: 1 }];
      }
      break;

    case "REMOVE_ITEM":
      updatedCart = state.filter((item) => item.id !== action.payload);
      break;

    case "UPDATE_QUANTITY":
      updatedCart = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      break;

    default:
      return state; // Return current state for unknown actions
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return updatedCart;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateCartQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{ cart, dispatch, addItemToCart, removeItemFromCart, updateCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
