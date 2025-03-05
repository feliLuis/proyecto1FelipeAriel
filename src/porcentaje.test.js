import sacarPorcentaje from "./porcentaje.js";

describe("sacarPorcentaje", () => {
  it("deberia sacar el porcentaje de un valor", () => {
    expect(sacarPorcentaje(120, (8.25/100))).toEqual(9.9);
  });
});
