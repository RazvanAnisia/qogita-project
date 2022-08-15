import { mockCartProducts } from "../components/Cart/index.spec";
import {
  addToCart,
  changeProductQuantity,
  removeFromCart,
} from "./../actions/cart";
import { CartProduct, InitialStateType, Product } from "./../types";
import { cartReducer } from "./cartReducer";

const mockProducts: Product[] = [
  {
    name: "Parodontax Duplo Herbal Fresh 75ml",
    gtin: "5054563079435",
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
    brandName: "Parodontax",
    categoryName: "Toothpaste",
  },
  {
    name: "Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health",
    gtin: "8411047151242",
    recommendedRetailPrice: 22.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/co8e7Y9gf272e2W2LgA6fj.jpg",
    brandName: "Instituto Espanol",
    categoryName: "Men's Perfume",
  },
];

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
