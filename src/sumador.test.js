import calcularImpuestoYTotal from "./sumador.js";

describe("calcularImpuestoYTotal", () => {
  it("debería calcular el impuesto y el precio total para el estado CA", () => {
    const precioNeto = 120;
    const estado = "CA"; // Tasa de impuesto para CA: 8.25%
    const resultado = calcularImpuestoYTotal(precioNeto, estado);

    // Verificar el precio total
    expect(resultado.precioTotal).toBeCloseTo(129.9); // 120 + (120 * 8.25%) = 129.9
  });

  it("debería calcular el impuesto y el precio total para el estado AL", () => {
    const precioNeto = 120;
    const estado = "AL"; // Tasa de impuesto para AL: 4.00%
    const resultado = calcularImpuestoYTotal(precioNeto, estado);

    // Verificar el precio total
    expect(resultado.precioTotal).toBeCloseTo(124.8); // 120 + (120 * 4.00%) = 124.8
  });

  it("debería calcular el impuesto y el precio total para un estado no definido", () => {
    const precioNeto = 120;
    const estado = "XX"; // Estado no definido, tasa de impuesto: 0%
    const resultado = calcularImpuestoYTotal(precioNeto, estado);

    // Verificar el precio total
    expect(resultado.precioTotal).toBe(120); // 120 + (120 * 0%) = 120
  });
});