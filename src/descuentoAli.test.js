import aplicarDescuentoAli from './descuentoAli';

describe("Pruebas de aplicarDescuentoAli", () => {
    
    test("Debe aplicar 2% de descuento a Alimentos", () => {
        expect(aplicarDescuentoAli(100, "Alimentos")).toBeCloseTo(98);
    });

    test("Debe aplicar 0% de descuento a Bebidas Alcohólicas", () => {
        expect(aplicarDescuentoAli(100, "BebidasAlcolicas")).toBe(100);
    });

    test("Debe aplicar 1.5% de descuento a Materiales de Escritorio", () => {
        expect(aplicarDescuentoAli(100, "MaterialesEscritorio")).toBeCloseTo(98.5);
    });

    test("Debe aplicar 0% de descuento a Muebles", () => {
        expect(aplicarDescuentoAli(100, "Muebles")).toBe(100);
    });

    test("Debe aplicar 1% de descuento a Electrónicos", () => {
        expect(aplicarDescuentoAli(100, "Electronicos")).toBeCloseTo(99);
    });

    test("Debe aplicar 0% de descuento a Vestimenta", () => {
        expect(aplicarDescuentoAli(100, "Vestimenta")).toBe(100);
    });

    test("Debe aplicar 0% de descuento a Varios", () => {
        expect(aplicarDescuentoAli(100, "Varios")).toBe(100);
    });

    test("Debe manejar una categoría desconocida devolviendo el mismo precio", () => {
        expect(aplicarDescuentoAli(100, "RopaDeLujo")).toBe(100);
    });

    test("Debe manejar un precio de 0 devolviendo 0", () => {
        expect(aplicarDescuentoAli(0, "Alimentos")).toBe(0);
    });

    test("Debe manejar valores negativos correctamente", () => {
        expect(aplicarDescuentoAli(-100, "Electronicos")).toBeCloseTo(-99);
    });

});
