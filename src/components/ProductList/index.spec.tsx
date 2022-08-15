import React from "react";
import { render } from "@testing-library/react";

import ProductList from ".";
import { mockProducts } from "../../helpers/testing";

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
