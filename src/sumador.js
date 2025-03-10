// calculador.js
function calcularImpuestoYTotal(precioNeto, estado, categoria) {
    // Definir las tasas de impuesto por estado
    const impuestos = {
      CA: 8.25,
      TX: 6.25,
      NV: 8.00,
      AL: 4.00,
      UT: 6.65,
    };

    const impuestosAdi = {
      Varios: 0.00,
      Alimentos: 0.00,
      BebidasAlcolicas: 7.00,
      MaterialEscritorio: 0.00,
      Muebles: 3.00,
      Electronicos: 4.00,
      Vestimenta: 2.00,
    };
  
    // Obtener la tasa de impuesto para el estado seleccionado
    const tasaImpuesto = impuestos[estado] || 0;
    const tasaImpuestoAdi = impuestosAdi[categoria] || 0;
  
    // Calcular el impuesto (precioNeto * tasaImpuesto / 100)
    const impuesto = (precioNeto * tasaImpuesto) / 100;
    const impuestoAdi = (precioNeto * tasaImpuestoAdi) / 100;
  
    // Calcular el precio total (precioNeto + impuesto)
    const precioTotal = precioNeto + impuesto + impuestoAdi;

  
    // Devolver el impuesto y el precio total
    return {
      impuesto: impuesto,
      impuestoAdi: impuestoAdi,
      precioTotal: precioTotal,
    };
  }
  
  export default calcularImpuestoYTotal;