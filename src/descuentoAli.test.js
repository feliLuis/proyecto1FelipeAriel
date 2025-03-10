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

  it("debería calcular el impuesto y descuento para Muebles", () => {
    const resultado = calcularDescuentoYImpuesto(100, "muebles");
    expect(resultado).toEqual({ impuestoAdicional: 3, descuentoAdicional: 0 });
  });

  it("debería calcular el impuesto y descuento para Electrónicos", () => {
    const resultado = calcularDescuentoYImpuesto(100, "electronicos");
    expect(resultado).toEqual({ impuestoAdicional: 4, descuentoAdicional: 1 });
  });

  it("debería calcular el impuesto y descuento para Vestimenta", () => {
    const resultado = calcularDescuentoYImpuesto(100, "vestimenta");
    expect(resultado).toEqual({ impuestoAdicional: 2, descuentoAdicional: 0 });
  });

  it("debería calcular el impuesto y descuento para Varios", () => {
    const resultado = calcularDescuentoYImpuesto(100, "varios");
    expect(resultado).toEqual({ impuestoAdicional: 0, descuentoAdicional: 0 });
  });
});