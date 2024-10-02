const precos1 = [10, 20, 30];
const precos2 = [15, 25, 35];
const precosAumentados = [...precos1, ...precos2].map(preco => preco * 1.1);
console.log(precosAumentados);
