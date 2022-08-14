import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { Product } from "../types";

export type InitialStateType = {
  productsInCart: CartProduct[];
};

const initialState = {
  productsInCart: [],
};

interface CartProduct extends Product {
  quantity: number;
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
