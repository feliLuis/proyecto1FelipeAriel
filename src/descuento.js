export default function aplicarDescuento(precioNeto) {
    let descuento = 0;
  
    // Aplicar descuento del 3% si el precio neto es >= 1000 y < 3000
    if (precioNeto >= 1000 && precioNeto < 3000) {
      descuento = 0.03; // 3%
    }
  
    // Aplicar descuento del 5% si el precio neto es >= 3000 y < 7000
    if (precioNeto >= 3000 && precioNeto < 7000) {
      descuento = 0.05; // 5%
    }
  
    // Aplicar descuento del 10% si el precio neto es >= 7000 y < 10000
    if (precioNeto >= 7000 && precioNeto < 10000) {
      descuento = 0.10; // 10%
    }
  
    // Aplicar descuento del 15% si el precio neto es >= 10000 y < 30000
    if (precioNeto >= 10000 && precioNeto < 30000) {
      descuento = 0.15; // 15%
    }
  
    // Aplicar descuento del 20% si el precio neto es >= 30000
    if (precioNeto >= 30000) {
      descuento = 0.20; // 20%
    }
  
    // Calcular el precio con descuento
    return precioNeto * (1 - descuento);
  }