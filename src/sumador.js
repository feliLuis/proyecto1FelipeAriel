// calculador.js
function calcularImpuestoYTotal(precioNeto, estado) {
    // Definir las tasas de impuesto por estado
    const impuestos = {
      CA: 8.25,
      TX: 6.25,
      NV: 8.00,
      AL: 4.00,
      UT: 6.65,
    };
  
    // Obtener la tasa de impuesto para el estado seleccionado
    const tasaImpuesto = impuestos[estado] || 0;
  
    // Calcular el impuesto (precioNeto * tasaImpuesto / 100)
    const impuesto = (precioNeto * tasaImpuesto) / 100;
  
    // Calcular el precio total (precioNeto + impuesto)
    const precioTotal = precioNeto + impuesto;
  
    // Devolver el impuesto y el precio total
    return {
      impuesto: impuesto,
      precioTotal: precioTotal,
    };
  }
  
  export default calcularImpuestoYTotal;