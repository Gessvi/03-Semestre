function faixaEtaria(idade) {
    if (idade < 13) return 'Criança';
    else if (idade < 18) return 'Adolescente';
    else if (idade < 60) return 'Adulto';
    else return 'Idoso';
  }
  console.log(faixaEtaria(10)); // Criança
  console.log(faixaEtaria(15)); // Adolescente
  console.log(faixaEtaria(30)); // Adulto
  console.log(faixaEtaria(65)); // Idoso
  