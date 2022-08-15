import { mockCartProducts, mockProducts } from "../helpers/testing";
import {
  addToCart,
  changeProductQuantity,
  removeFromCart,
} from "./../actions/cart";
import { InitialStateType } from "./../types";
import { cartReducer } from "./cartReducer";

describe("reducers/cartReducer", () => {
  it("cartReducer should take ADD_PRODUCT and return new state object with new product", () => {
    const initialState: InitialStateType = {
      productsInCart: [],
    };

    const newState = cartReducer(initialState, addToCart(mockProducts[0]));

    expect(newState).toMatchObject({
      productsInCart: [mockProducts[0]],
    });
  });

  it("cartReducer should take REMOVE_PRODUCT and return new state without the productt", () => {
    const initialState: InitialStateType = {
      productsInCart: mockCartProducts,
    };

    const newState = cartReducer(
      initialState,
      removeFromCart(mockCartProducts[0].gtin)
    );

    expect(newState).toMatchObject({
      productsInCart: [mockCartProducts[1]],
    });
  });

  it("cartReducer should take CHANGE_PRODUCT_QUANTITY and return new state object without quantity updated for that product", () => {
    const initialState: InitialStateType = {
      productsInCart: mockCartProducts,
    };

    const newState = cartReducer(
      initialState,
      changeProductQuantity("5054563079435", 2)
    );

    expect(newState.productsInCart[0].quantity).toBe(2);
  });
});
