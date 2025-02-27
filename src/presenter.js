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