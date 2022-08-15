import { productMock } from "../helpers/testing";
import { addToCart, changeProductQuantity, removeFromCart } from "./cart";

describe("actions/addToCart", () => {
  it("should create a ADD_PRODUCT action", () => {
    const action = addToCart(productMock);
    expect(action).toMatchObject({
      type: "ADD_PRODUCT",
      payload: productMock,
    });
  });
  it("should create a REMOVE_PRODUCT action", () => {
    const action = removeFromCart(productMock.gtin);
    expect(action).toMatchObject({
      type: "REMOVE_PRODUCT",
      payload: productMock.gtin,
    });
  });
  it("should create a CHANGE_PRODUCT_QUANTITY action", () => {
    const action = changeProductQuantity(productMock.gtin, 2);
    expect(action).toMatchObject({
      type: "CHANGE_PRODUCT_QUANTITY",
      payload: { id: productMock.gtin, quantity: 2 },
    });
  });
});
