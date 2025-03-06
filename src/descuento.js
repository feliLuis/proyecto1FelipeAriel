// descuento.js
export function aplicarDescuento(precioNeto) {
    if (precioNeto >= 1000) {
      return precioNeto * 0.97; // Aplica un descuento del 3%
    }
    return precioNeto; // No aplica descuento
  }