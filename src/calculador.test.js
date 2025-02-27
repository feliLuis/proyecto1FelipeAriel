import totalizar from "./calculador.js";

describe("totalizar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(totalizar(20, 3)).toEqual(60);
  });
});