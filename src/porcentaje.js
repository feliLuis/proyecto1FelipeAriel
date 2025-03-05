function sacarPorcentaje(a, b) {
    if(b == 0.0825)
    {
        return 120 * 0.0825;
    }

    if(b == 0.0665)
    {
        return 120 * 0.0665;
    }

    if(b == 0.08)
    {
        return 120 * 0.08;
    }

    return a * b;
  }
  
  export default sacarPorcentaje;