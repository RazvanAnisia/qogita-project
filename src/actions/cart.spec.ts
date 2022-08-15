import { addToCart, changeProductQuantity, removeFromCart } from "./cart";

const productMock = {
  name: "Parodontax Duplo Herbal Fresh 75ml",
  gtin: "5054563079435",
  recommendedRetailPrice: 29.99,
  recommendedRetailPriceCurrency: "EUR",
  imageUrl:
    "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
  brandName: "Parodontax",
  categoryName: "Toothpaste",
};

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
