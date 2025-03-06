export function aplicarDescuento(precioNeto) {
    let descuento = 0;
  
    // Aplicar descuento del 3% 
    if (precioNeto >= 1000) {
        descuento=0;
      descuento += 0.03; // 3%
    }
  
    // Aplicar descuento adicional del 5% 
    if (precioNeto >= 3000) {
        descuento=0;
      descuento += 0.05; // 5%
    }
  
    
    return precioNeto * (1 - descuento);
  }