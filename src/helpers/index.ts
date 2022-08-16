import { CartProduct } from "../types";

export const calculateTotal = (products: CartProduct[]) =>
  products
    .reduce(
      (accumulator, current) =>
        (accumulator += current.recommendedRetailPrice * current.quantity),
      0
    )
    .toFixed(2);
