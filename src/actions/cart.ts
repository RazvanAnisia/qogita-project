import { Product } from "../types";

export type Action =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: string }
  | {
      type: "CHANGE_PRODUCT_QUANTITY";
      payload: { id: string; quantity: number };
    };

export const addToCart = (product: Product): Action => {
  return { type: "ADD_PRODUCT", payload: product };
};

export const removeFromCart = (id: string): Action => {
  return { type: "REMOVE_PRODUCT", payload: id };
};

export const changeProductQuantity = (id: string, quantity: number): Action => {
  return { type: "CHANGE_PRODUCT_QUANTITY", payload: { id, quantity } };
};
