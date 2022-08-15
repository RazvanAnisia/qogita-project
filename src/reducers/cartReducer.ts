import { InitialStateType } from "../types";
import { Action } from "./../actions/cart";

export const cartReducer = (
  state: InitialStateType,
  action: Action
): InitialStateType => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const inCartIndex = state.productsInCart.findIndex(
        (product) => product.gtin === action.payload.gtin
      );

      // if the product is already in the cart just increment the quantity
      if (inCartIndex >= 0) {
        const productsCopy = state.productsInCart.slice();
        productsCopy[inCartIndex].quantity =
          productsCopy[inCartIndex].quantity + 1;

        return {
          ...state,
          productsInCart: productsCopy,
        };
      }

      return {
        ...state,
        productsInCart: [
          ...state.productsInCart,
          { ...action.payload, quantity: 1 },
        ],
      };
  }
  switch (action.type) {
    case "REMOVE_PRODUCT":
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.gtin !== action.payload
        ),
      };
  }
  switch (action.type) {
    case "CHANGE_PRODUCT_QUANTITY":
      const inCartIndex = state.productsInCart.findIndex(
        (product) => product.gtin === action.payload.id
      );

      const productsCopy = state.productsInCart.slice();
      productsCopy[inCartIndex].quantity = action.payload.quantity;
      return {
        ...state,
        productsInCart: productsCopy,
      };
  }
};
