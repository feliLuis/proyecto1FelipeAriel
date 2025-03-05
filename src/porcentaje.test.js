import sacarPorcentaje from "./porcentaje.js";

describe("sacarPorcentaje", () => {
  it("deberia sacar el porcentaje de un valor con estado CA", () => {
    expect(sacarPorcentaje(120, (8.25/100))).toEqual(9.9);
  });
});

describe("sacarPorcentaje", () => {
    it("deberia sacar el porcentaje de un valor con estado UT", () => {
      expect(sacarPorcentaje(120, (6.65/100))).toEqual(7.98);
    });
  });

  describe("sacarPorcentaje", () => {
    it("deberia sacar el porcentaje de un valor con estado NV", () => {
      expect(sacarPorcentaje(120, (8.00/100))).toEqual(9.6);
    });
  });
