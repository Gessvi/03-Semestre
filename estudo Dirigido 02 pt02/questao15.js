function verificarNumero(num) {
    if (num > 0) return 'Positivo';
    else if (num < 0) return 'Negativo';
    else return 'Zero';
  }
  console.log(verificarNumero(5)); // Positivo
  console.log(verificarNumero(-3)); // Negativo
  console.log(verificarNumero(0)); // Zero
  