import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Cart from "./";
import { CartProduct } from "../../types";
import * as actions from "../../actions/cart";

export const mockCartProducts: CartProduct[] = [
  {
    name: "Parodontax Duplo Herbal Fresh 75ml",
    gtin: "5054563079435",
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
    brandName: "Parodontax",
    categoryName: "Toothpaste",
    quantity: 1,
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
    quantity: 5,
  },
];

jest.spyOn(actions, "removeFromCart");
jest.spyOn(actions, "changeProductQuantity");

describe("components/Cart", () => {
  it("should render a message that there are no products in shopping cart", () => {
    const { getByText } = render(<Cart productsInCart={[]} />);

    expect(
      getByText("You have no products in your shopping cart")
    ).toBeInTheDocument();
  });

  it("should render the shopping cart products with the product details", () => {
    const { getByText } = render(<Cart productsInCart={mockCartProducts} />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;

    expect(getByText("Parodontax Duplo Herbal Fresh 75ml")).toBeInTheDocument();
    expect(
      getByText("Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health")
    ).toBeInTheDocument();
    expect(getByText("Toothpaste")).toBeInTheDocument();
    expect(getByText("29.99 EUR")).toBeInTheDocument();
    expect(getByText("Men's Perfume")).toBeInTheDocument();
    expect(displayedImage.src).toContain("https://images.qogita.com");
  });

  it("should render Summary with total", () => {
    const { getByText } = render(<Cart productsInCart={mockCartProducts} />);

    expect(getByText("Summary")).toBeInTheDocument();
    expect(getByText(/Total/i)).toBeInTheDocument();
    expect(getByText(/€144.94/i)).toBeInTheDocument();
  });

  it("should render the remove product button", () => {
    const { getByTestId } = render(<Cart productsInCart={mockCartProducts} />);

    const removeProductBtn = getByTestId(
      `Remove.Button${mockCartProducts[0].gtin}`
    );

    expect(removeProductBtn).toBeInTheDocument();

    fireEvent.click(removeProductBtn);

    expect(actions.removeFromCart).toHaveBeenCalledWith(
      mockCartProducts[0].gtin
    );
  });
  it("should render the product quantity input", () => {
    const { getByTestId } = render(<Cart productsInCart={mockCartProducts} />);

    const productQuantityInput = getByTestId(
      `Input.Number${mockCartProducts[0].gtin}`
    );

    expect(productQuantityInput).toBeInTheDocument();

    fireEvent.input(productQuantityInput, { target: { value: "2" } });

    expect(actions.changeProductQuantity).toHaveBeenCalledWith(
      mockCartProducts[0].gtin,
      2
    );
  });
});
