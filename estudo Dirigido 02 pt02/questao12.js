const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numeros.filter(num => num % 2 !== 0).reverse();
const pares = numeros.filter(num => num % 2 === 0);
const resultado = [...impares, ...pares];
console.log(resultado);
