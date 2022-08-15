import React, { useContext } from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import CartPage from "./";
import { AppProvider } from "../../contexts";
import { mockCartProducts } from "../../helpers/testing";
import { InitialStateType } from "../../types";

describe("pages/CartPage", () => {
  function createTestables(desiredState?: InitialStateType): RenderResult {
    return render(
      <AppProvider desiredState={desiredState}>
        <CartPage />
      </AppProvider>
    );
  }

  it("should render a message that there are no products in shopping cart and a 0 for product count", () => {
    const { getByText, getByTestId } = createTestables();

    expect(
      getByText("You have no products in your shopping cart")
    ).toBeInTheDocument();
    expect(getByTestId("Navigation.ProductCount").textContent).toBe("0");
  });

  it("should render the list of products in shopping cart and updating the quantity for one should be reflected in nav product count and Total", () => {
    const { getByText, getByTestId } = createTestables({
      productsInCart: mockCartProducts,
    });

    const productQuantityInput = getByTestId(
      `Input.Number${mockCartProducts[0].gtin}`
    );

    expect(productQuantityInput).toBeInTheDocument();

    fireEvent.input(productQuantityInput, { target: { value: "2" } });
    expect(getByTestId("Navigation.ProductCount").textContent).toBe("7");
    expect(getByText(/€174.93/i)).toBeInTheDocument();
  });

  it("removing one product should be reflected in nav product count and Total", () => {
    const { getByText, getByTestId } = createTestables({
      productsInCart: mockCartProducts,
    });

    const removeProductBtn = getByTestId(
      `Remove.Button${mockCartProducts[0].gtin}`
    );

    fireEvent.click(removeProductBtn);

    expect(getByTestId("Navigation.ProductCount").textContent).toBe("5");
    expect(getByText(/€114.95/i)).toBeInTheDocument();
  });
});
