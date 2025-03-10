function calcularDescuentoYImpuesto(precioBase, categoria) {
    // Definimos la tabla de impuestos y descuentos
    const categorias = {
        "alimentos": { impuesto: 0, descuento: 2 },
        "bebidas-alcoholicas": { impuesto: 7, descuento: 0 },
        "material-de-escritorio": { impuesto: 0, descuento: 1.5 },
        "muebles": { impuesto: 3, descuento: 0 },
        "electronicos": { impuesto: 4, descuento: 1 },
        "vestimenta": { impuesto: 2, descuento: 0 },
        "varios": { impuesto: 0, descuento: 0 },
      };
    
    // Extraemos los valores
    const { impuesto, descuento } = categorias[categoria];
  
    // Calculamos impuesto y descuento adicionales
    const impuestoAdicional = (precioBase * impuesto) / 100;
    const descuentoAdicional = (precioBase * descuento) / 100;

    return { impuestoAdicional, descuentoAdicional };
  }
  
  export default calcularDescuentoYImpuesto;