import React from "react";
import { render } from "@testing-library/react";

import Layout from "./";

describe("components/Layout", () => {
  it("should render Products and Your Cart Links and a 0 for number of products in shopping cart", () => {
    const { getByText } = render(
      <Layout>
        <p>test</p>
      </Layout>
    );

    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Your Cart")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
  });
});
