// Importar la función calcularImpuestoYTotal
import calcularImpuestoYTotal from './sumador.js';
import aplicarDescuento from './descuento.js';
import aplicarDescuentoAli from './descuentoAli.js';

// Definir las tasas de impuesto por estado
const impuestos = {
  CA: 8.25,
  TX: 6.25,
  NV: 8.00,
  AL: 4.00,
  UT: 6.65
};

const impuestosAdi = {
  Varios: 0.00,
  Alimentos: 0.00,
  BebidasAlcoholicas: 7.00,
  MaterialEscritorio: 0.00,
  Muebles: 3.00,
  Electronicos: 4.00,
  Vestimenta: 2.00
};

function calcularTotal() {
  // Obtener los valores de los inputs
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precio = parseFloat(document.getElementById('precio').value);
  const estado = document.getElementById('estado').value;
  const categoria = document.getElementById('categoria').value;

  // Calcular el precio neto (cantidad * precio)
  const precioNeto = cantidad * precio;

  // Calcular el precio con descuento
  const precioConDescuento = aplicarDescuento(precioNeto);

  const precioConDescuentoAdi = aplicarDescuentoAli(precioConDescuento,categoria);

  // Calcular el impuesto y el precio total usando calcularImpuestoYTotal
  const { impuesto, impuestoAdi, precioTotal } = calcularImpuestoYTotal(precioConDescuentoAdi, estado,categoria);

  // Calcular el descuento aplicado
  const descuento = precioNeto - precioConDescuento;

  const descuentoAdi = precioNeto - precioConDescuentoAdi;

  // Mostrar los resultados en la página
  document.getElementById('precio-neto-text').textContent = `${cantidad} x ${precio}`;
  document.getElementById('precio-neto').textContent = `$${precioNeto.toFixed(2)}`;
  document.getElementById('estado-seleccionado').textContent = estado;
  document.getElementById('impuesto-rate').textContent = impuestos[estado].toFixed(2);
  document.getElementById('impuesto-valor').textContent = `${impuesto.toFixed(2)}`; // Actualizar el valor del impuesto
  document.getElementById('categoria-seleccionada').textContent = categoria;
  document.getElementById('impuestoAdi-rate').textContent = impuestosAdi[categoria].toFixed(2);
  document.getElementById('impuestoAdi-valor').textContent = `${impuestoAdi.toFixed(2)}`; // Actualizar el valor del impuesto
  document.getElementById('total').textContent = `$${precioTotal.toFixed(2)}`;

  // Mostrar el descuento
  document.getElementById('descuento-porcentaje').textContent = `${(descuento / precioNeto * 100).toFixed(0)}%`;
  document.getElementById('descuento-valor').textContent = `$${descuento.toFixed(2)}`;

  //mostrar descuento adicional
  document.getElementById('descuentoAdi-porcentaje').textContent = `${(descuentoAdi / precioNeto * 100).toFixed(0)}%`;
  document.getElementById('descuentoAdi-valor').textContent = `$${descuentoAdi.toFixed(2)}`;
}

// Función para actualizar el porcentaje de impuesto cuando se cambia el estado
function actualizarImpuesto() {
  const estado = document.getElementById('estado').value;
  const tasaImpuesto = impuestos[estado] || 0;

  // Actualizar el porcentaje de impuesto
  document.getElementById('impuesto-rate').textContent = tasaImpuesto.toFixed(2);
}

// Función para actualizar el porcentaje de impuesto cuando se cambia la categoria
function actualizarImpuestoCate() {
  const categoria = document.getElementById('categoria').value;
  const tasaImpuestoAdi = impuestosAdi[categoria] || 0;

  // Actualizar el porcentaje de impuesto
  document.getElementById('impuestoAdi-rate').textContent = tasaImpuestoAdi.toFixed(2);
}

window.calcularTotal = calcularTotal;

document.getElementById('estado').addEventListener('change', actualizarImpuesto);
document.getElementById('categoria').addEventListener('change', actualizarImpuestoCate);

actualizarImpuesto();
actualizarImpuestoCate();