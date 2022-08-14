import { CartProduct } from "../types";

export const calculateTotal = (products: CartProduct[]) =>
  products
    .reduce(
      (previous, current) =>
        (previous += current.recommendedRetailPrice * current.quantity),
      0
    )
    .toFixed(2);
