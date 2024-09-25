const a = [10,20,30,40,50];

console.log(a[3]);

let frutas = ["maca","banana","laranja"];
frutas.push("manga");
console.log(frutas);

frutas.pop();
console.log(frutas)

frutas.unshift("uva");
console.log(frutas);

frutas.shift();
console.log(frutas);

let cores = ["1 - vermelho","2 - verde","3 - amarelo"];
    for (let i = 0; i < cores.length; i++){
        console.log(cores[i]);
    }

    //console forEach
cores.forEach(function(cor){
    console.log(cor);
})

let numeros = [1,2,3,4,5,6,7,8,9,10,15,20]
    let pares = numeros.filter(function(numeros) {
        return numeros % 2 === 0;
    })
    
    console.log(pares);

let numeross = [1,2,3,4,5]

let dobrados = numeross.map(function(numeross) {
    return numeross * 2;
});

console.log(dobrados);

let numerosss = [1,2,3,4,5]

    let soma = numerosss.map(function(numerosss) {
        return numerosss + 2;
    });

console.log(soma);

let conta = [1,2,3,4,5,5]
    let somaa = conta.reduce(function (total,conta) {
        return total+conta;
    },0);

    console.log(somaa);

    function removerElemento(array,elemento) {
        return array.filter(function (item) {
            return item !==elemento;
        })
    }

let frutass = ["maca", "banana", "laranja"]
let resultado = removerElemento(frutass,"laranja")
console.log(resultado)

function maiorNumero(array) {
    return array.reduce(function (max,atual) {
        return atual > max ? atual : max
    });
}

let numero = [10,25,35,5,40,20]
let maior = maiorNumero(numero)
console.log(maior)

let array1 = [1,2,3]
let array2 = [4,5,6]

let concatenado = array1.concat(array2)
console.log(concatenado)