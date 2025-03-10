function calcularDescuentoYImpuesto(precioBase, categoria) {
    // Definimos la tabla de impuestos y descuentos
    const categorias = {
        "alimentos": { impuesto: 0, descuento: 2 },
        "bebidas-alcoholicas": { impuesto: 7, descuento: 0 },
      };
    
    // Extraemos los valores
    const { impuesto, descuento } = categorias[categoria];
  
    // Calculamos impuesto y descuento adicionales
    const impuestoAdicional = (precioBase * impuesto) / 100;
    const descuentoAdicional = (precioBase * descuento) / 100;

    return { impuestoAdicional, descuentoAdicional };
  }
  
  export default calcularDescuentoYImpuesto;