import calcularDescuentoYImpuesto from "./descuentoAli.js";

describe("calcularDescuentoYImpuesto", () => {
  it("debería calcular el impuesto y descuento para Alimentos", () => {
    const resultado = calcularDescuentoYImpuesto(100, "alimentos");
    expect(resultado).toEqual({ impuestoAdicional: 0, descuentoAdicional: 2 });
  });
  
  it("debería calcular el impuesto y descuento para Bebidas alcohólicas", () => {
    const resultado = calcularDescuentoYImpuesto(100, "bebidas-alcoholicas");
    expect(resultado).toEqual({ impuestoAdicional: 7, descuentoAdicional: 0 });
  });

  it("debería calcular el impuesto y descuento para Material de escritorio", () => {
    const resultado = calcularDescuentoYImpuesto(100, "material-de-escritorio");
    expect(resultado).toEqual({ impuestoAdicional: 0, descuentoAdicional: 1.5 });
  });
});