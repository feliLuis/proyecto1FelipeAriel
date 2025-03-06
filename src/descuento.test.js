

import { aplicarDescuento } from "./descuento.js";

describe('Pruebas para la funcionalidad de descuento', () => {
  test('Debería aplicar un descuento del 3% cuando el precio neto es 1000', () => {
    const precioNeto = 1000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(970); // 1000 - (3% de 1000) = 970
  });
  test('No debería aplicar descuento cuando el precio neto es menor a 1000', () => {
    const precioNeto = 500;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(500); // No se aplica descuento
  });



  test('Debería aplicar un descuento del 3% cuando el precio neto es mayor a 1000', () => {
    const precioNeto = 1500;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(1455); // 1500 - (3% de 1500) = 1455
  });


});