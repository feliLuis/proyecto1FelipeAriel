import totalizar from './calculador.js';

function calcularTotal() {
  // Obtener los valores de los inputs
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);

 
  // Calcular el precio neto usando la función del calculador
  const precioNeto = totalizar(cantidad, precio);

  // Mostrar el precio neto y el total
  document.getElementById('precio-neto-text').textContent = `${cantidad} x ${precio}`;
  document.getElementById('precio-neto').textContent = `$${precioNeto.toFixed(2)}`;
  document.getElementById('total').textContent = `$${precioNeto.toFixed(2)}`;
}

// Asignar la función al objeto window para que esté disponible globalmente
window.calcularTotal = calcularTotal;

document.addEventListener("DOMContentLoaded", function () {
  const impuestos = {
      CA: 8.25,
      TX: 6.25,
      NY: 4.00,
      FL: 7.00
  };

  const estadoSelect = document.getElementById("estado");
  const impuestoRateSpan = document.getElementById("impuesto-rate");

  function actualizarImpuesto() {
      const estado = estadoSelect.value;
      const impuestoRate = impuestos[estado] || 0;

      // Mostrar solo el porcentaje de impuestos
      impuestoRateSpan.textContent = impuestoRate.toFixed(2);
  }

  // Escuchar cambios en el combobox de estado
  estadoSelect.addEventListener("change", actualizarImpuesto);

  // Ejecutar al inicio para mostrar el impuesto de CA por defecto
  actualizarImpuesto();
});