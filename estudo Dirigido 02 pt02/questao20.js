function senhaValida(senha) {
    const requisitos = [
      senha.length >= 8,
      /[A-Z]/.test(senha),  // pelo menos uma letra maiúscula
      /[a-z]/.test(senha),  // pelo menos uma letra minúscula
      /[0-9]/.test(senha),  // pelo menos um número
      /[!@#$%^&*]/.test(senha) // pelo menos um caractere especial
    ];
    return requisitos.every(Boolean);
  }
  console.log(senhaValida('Senha123!')); // true
  console.log(senhaValida('senha')); // false
  