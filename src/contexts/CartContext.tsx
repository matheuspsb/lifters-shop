import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { ProductProps } from "../types";

interface CartState {
  cart: Array<Pick<ProductProps, "titulo" | "valor">>;
}

// Define o tipo das ações
type CartAction = { type: "ADD_TO_CART"; payload: any };

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

const CartContext = createContext<CartContextType>({
  state: initialState,
  dispatch: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log(state);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
