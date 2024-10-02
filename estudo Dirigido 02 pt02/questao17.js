function calcularDesconto(preco, categoria) {
    const descontos = {
      Premium: 0.20,
      Regular: 0.10,
    };
    const desconto = descontos[categoria] || 0;
    return preco * (1 - desconto);
  }
  console.log(calcularDesconto(100, 'Premium')); // 80
  console.log(calcularDesconto(100, 'Regular')); // 90
  