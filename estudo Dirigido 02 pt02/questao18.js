function calcularDescontoPorQuantidade(preco, quantidade) {
    let desconto = 0;
    if (quantidade >= 10) desconto = 0.20;
    else if (quantidade >= 5) desconto = 0.10;
    return preco * (1 - desconto);
  }
  console.log(calcularDescontoPorQuantidade(100, 10)); // 80
  console.log(calcularDescontoPorQuantidade(100, 7));  // 90
  console.log(calcularDescontoPorQuantidade(100, 3));  // 100
  