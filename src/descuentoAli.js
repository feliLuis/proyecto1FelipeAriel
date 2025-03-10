export default function aplicarDescuentoAli(precio,categoria) {
    let descuento = 0;
  
    if (categoria == "Alimentos") {
      descuento = 0.02;
    }
  
    if (categoria == "BebidasAlcolicas") {
      descuento = 0.00; 
    }
  
    if (categoria == "MaterialesEscritorio") {
      descuento = 0.015; 
    }
  
    if (categoria == "Muebles") {
      descuento = 0.00; 
    }
  
    if (categoria == "Electronicos") {
      descuento = 0.01; 
    }

    if (categoria == "Vestimenta") {
        descuento = 0.00; 
    }

    if (categoria == "Varios") {
        descuento = 0.00; 
    }
  
    // Calcular el precio con descuento
    return precio * (1 - descuento);
  }