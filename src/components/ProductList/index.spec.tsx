import React from "react";
import { render } from "@testing-library/react";

import ProductList from ".";
import { Product } from "../../types";

export const mockProducts: Product[] = [
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

describe("components/ProductList", () => {
  it("it should render the grid of products with their details", () => {
    const { getByText } = render(
      <ProductList
        products={mockProducts}
        count={100}
        page={1}
        setPage={() => {}}
      />
    );
    const displayedImage = document.querySelector("img") as HTMLImageElement;

    expect(getByText("Parodontax Duplo Herbal Fresh 75ml")).toBeInTheDocument();
    expect(getByText("29.99EUR")).toBeInTheDocument();

    expect(getByText("Parodontax Duplo Herbal Fresh 75ml")).toBeInTheDocument();
    expect(
      getByText("Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health")
    ).toBeInTheDocument();
    expect(displayedImage.src).toContain(mockProducts[0].imageUrl);
  });
});
