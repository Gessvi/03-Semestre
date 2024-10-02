//01
let numero = [1,2,3,4,5,6,7,8,9,10]

let pares = numero.filter(function (numero) {
    return numero % 2 === 0
})

console.log(pares);

// 04
let nome = ['João','Maria','Lucas','André']
let nomes = ['Pedro','Ana','Joana','Milena','Giulia']

let concatenado = nome.concat(nomes)

console.log(concatenado)

//05
let numeros = [1,2,3,4,5,6,7,8,9,10]
let positivo = numeros.every(num => num > 0)
console.log(positivo)

//13
let idade;

function mostrarValor() {
    const valor = document.getElementById('input').value
    idade = parseInt (document.getElementById('input').value)

    if (idade <= 11) {
        document.getElementById('resultado').innerText = 'Criança || idade: ' + valor
    }else if (idade > 11 && idade < 18) {
        document.getElementById('resultado').innerText = 'Adolescente || idade: ' + valor
    }else if (idade >= 18 && idade < 65) {
        document.getElementById('resultado').innerText = 'Adulto || idade: ' + valor
    }else{
        document.getElementById('resultado').innerText = 'Idoso || idade: ' + valor
    }
}

 //12
const numeroo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numeroo.filter(num => num % 2 !== 0).reverse();
const paress = numeroo.filter(num => num % 2 === 0).reverse();
const resultado = [...impares, ...paress];
console.log(resultado);

