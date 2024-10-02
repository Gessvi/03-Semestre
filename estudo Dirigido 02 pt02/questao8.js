const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaPares = numeros
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0);
console.log(somaPares); // 80
