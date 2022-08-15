import React, { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { InitialStateType } from "../types";

const initialState = {
  productsInCart: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface IAppProviderProps {
  children: React.ReactChild;
  desiredState?: InitialStateType;
}

const AppProvider = ({ children, desiredState }: IAppProviderProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    desiredState || initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
