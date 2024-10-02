const numeros = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 2047