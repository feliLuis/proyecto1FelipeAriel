// Importar las funciones necesarias
import calcularImpuestoYTotal from './sumador.js';
import { aplicarDescuento } from './descuento.js';

// Definir las tasas de impuesto por estado
const impuestos = {
  CA: 8.25,
  TX: 6.25,
  NV: 8.00,
  AL: 4.00,
  UT: 6.65
};

function calcularTotal() {
  // Obtener los valores de los inputs
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const estado = document.getElementById('estado').value;

  // Calcular el precio neto (cantidad * precio)
  const precioNeto = cantidad * precio;

  // Calcular el impuesto y el precio total usando calcularImpuestoYTotal
  const { impuesto, precioTotal } = calcularImpuestoYTotal(precioNeto, estado);

  // Aplicar el descuento al precio total
  const precioConDescuento = aplicarDescuento(precioTotal);

  // Calcular el valor del descuento
  const valorDescuento = precioTotal - precioConDescuento;

  // Calcular el porcentaje de descuento
  const porcentajeDescuento = (valorDescuento / precioTotal) * 100;

  // Mostrar los resultados en la página
  document.getElementById('precio-neto-text').textContent = `${cantidad} x ${precio}`;
  document.getElementById('precio-neto').textContent = `$${precioNeto.toFixed(2)}`;
  document.getElementById('estado-seleccionado').textContent = estado;
  document.getElementById('impuesto-rate').textContent = impuestos[estado].toFixed(2);
  document.getElementById('impuesto-valor').textContent = `${impuesto.toFixed(2)}`;
  document.getElementById('descuento-porcentaje').textContent = `${porcentajeDescuento.toFixed(2)}%`;
  document.getElementById('descuento-valor').textContent = `${valorDescuento.toFixed(2)}`;
  document.getElementById('total').textContent = `$${precioConDescuento.toFixed(2)}`;
}

// Función para actualizar el porcentaje de impuesto cuando se cambia el estado
function actualizarImpuesto() {
  const estado = document.getElementById('estado').value;
  const tasaImpuesto = impuestos[estado] || 0;

  // Actualizar el porcentaje de impuesto
  document.getElementById('impuesto-rate').textContent = tasaImpuesto.toFixed(2);
}

// Hacer la función calcularTotal accesible desde el ámbito global
window.calcularTotal = calcularTotal;

// Asignar el evento change al select de estado
document.getElementById('estado').addEventListener('change', actualizarImpuesto);

// Llamar a actualizarImpuesto al cargar la página
actualizarImpuesto();