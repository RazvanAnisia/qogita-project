import { calculateTotal } from "./";
import { mockCartProducts } from "./testing";

describe("helpers/calculateTotal", () => {
  it("should calculate total for all products depending on price and quantity", () => {
    expect(calculateTotal(mockCartProducts)).toBe("144.94");
  });
});
