const numerosCrescentes = [1, 3, 5, 7, 9];
const ordemCrescente = numerosCrescentes.every((num, i) => i === 0 || num >= numerosCrescentes[i - 1]);
console.log(ordemCrescente); // true

const numerosDesordenados = [1, 3, 2, 7, 9];
const ordemCrescenteDesordenada = numerosDesordenados.every((num, i) => i === 0 || num >= numerosDesordenados[i - 1]);
console.log(ordemCrescenteDesordenada); // false
