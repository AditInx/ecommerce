import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  const removeItemFromCart = (item) => {
    dispatch({type: "REMOVE_ITEM", payload: item})
  }

  return (
    <CartContext.Provider value={{ cart, dispatch, addItemToCart , removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
