import sumarImpuesto from "./sumador.js";

describe("sumarImpuesto", () => {
  it("deberia sumar al precio total el impuesto del estado CA", () => {
    expect(sumarImpuesto(120, 9.9)).toEqual(129.9);
  });
});