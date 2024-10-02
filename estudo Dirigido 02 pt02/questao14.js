function verificarSituacao(notas) {
    const media = notas.reduce((a, b) => a + b) / notas.length;
    if (media >= 7) return 'Aprovado';
    else if (media >= 4) return 'Reprovado com direito a recuperação';
    else return 'Reprovado sem direito a prova de recuperação';
  }
  console.log(verificarSituacao([7, 8, 9])); // Aprovado
  console.log(verificarSituacao([5, 6, 4])); // Reprovado com direito a recuperação
  console.log(verificarSituacao([2, 3, 1])); // Reprovado sem direito a prova de recuperação
  