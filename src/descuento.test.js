import aplicarDescuento from "./descuento.js";

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

  test('Debería manejar correctamente el precio neto igual a 0', () => {
    const precioNeto = 0;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(0); // No se aplica descuento
  });

  test('Debería aplicar un descuento adicional del 5% cuando el precio neto es 3000', () => {
    const precioNeto = 3000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(2850); // 3000 - (5% de 3000) = 2850
  });
  test('Debería aplicar un descuento adicional del 5% cuando el precio neto es mayor a 3000', () => {
    const precioNeto = 3500;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(3325); // 3500 - (5% de 3500) = 3325
  });

  test('Debería aplicar un descuento adicional del 10% cuando el precio neto es 7000', () => {
    const precioNeto = 7000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(6300); // 7000 - (10% de 7000) = 6300
  });

  test('Debería aplicar un descuento adicional del 10% cuando el precio neto es mayor a 7000', () => {
    const precioNeto = 8000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(7200); // 8000 - (10% de 8000) = 7200
  });
  test('Debería aplicar un descuento adicional del 15% cuando el precio neto es 10000', () => {
    const precioNeto = 10000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(8500); // 10000 - (15% de 10000) = 8500
  });
  test('Debería aplicar un descuento adicional del 15% cuando el precio neto es mayor a 10000', () => {
    const precioNeto = 12000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(10200); // 12000 - (15% de 12000) = 10200
  });

  test('Debería aplicar un descuento adicional del 20% cuando el precio neto es 30000', () => {
    const precioNeto = 30000;
    const precioConDescuento = aplicarDescuento(precioNeto);
    expect(precioConDescuento).toBe(24000); // 30000 - (20% de 30000) = 24000
  });
  });