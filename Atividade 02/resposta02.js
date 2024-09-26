function todosSaoPares(array){
    return array.every(function(numeroo){
        return numeroo % 2 === 0;
    });
}

function somaPares(array){
    return array
        .filter(function(numero){
            return numero % 2 === 0;
    })
    .reduce(function (soma,numero) {
        return soma + numero
    },0)
}

let nume = [1,2,4,5,6]
let resultadoo = somaPares(nume)
console.log(resultadoo)

function calcularMedia(array) {
    let soma = array.reduce(function (total,numero) {
        return total + numero
    },0)
    return soma/array.length
}

let numero = [5,10,15,20,25]
let media = calcularMedia(numero)
console.log(media)

function contemElemento(array,elemento) {
    return array.includes(elemento)
}

let frutas = ["maca","banana","laranja"]
console.log(contemElemento(frutas,"banana"))
console.log(contemElemento(frutas,"uva"))


function ordenarCrescente(array) {
    return array.sort(function (a,b) {
        return a - b
        
    })
}
    
let numeros = [5,3,8,1,2]
let ordenado = ordenarCrescente(numeros)
console.log(ordenado)

function multiplicarPor(array,multiplicar) {
    return array.map(function (numero) {
        return numero * multiplicar
    })
}

let numer = [1,2,3,4]
let resultado = multiplicarPor(numer,3)
console.log(resultado)

function contarOcorrencias(array,elemento) {
    return array.reduce(function (contador,valorAtual) {
        return valorAtual === elemento ? contador + 1 : contador
    },0)
}

let numers = [1,2,3,1,5,1,4]
let ocorrencias = contarOcorrencias(numers,1)
console.log(ocorrencias)

function mesclarEremoverDuplicatas(array1,array2) {
    let mesclado = array1.concat(array2)
    return [...new Set(mesclado)]
}

let array1 = [1,2,3]
let array2 = [3,4,5]
let resultad = mesclarEremoverDuplicatas(array1,array2)
console.log(resultad)

function inverterArray(array) {
    return array.reverse()
}

let numerr = [1,2,3,4,5]
let invertido = inverterArray(numerr)
console.log(invertido)

function removerFalsosValores(array){
    return array.filter(Boolean)   
}

let valores = [0,"maca","",false,"banana",null,"laranja"]
let resulta = removerFalsosValores(valores)
console.log(resulta)

function agruparEmPares(array) {
    let resulta = []
    for (let i = 0; i < array.length; i+=2) {
        resulta.push([array[i],array[i+1]])
    }
    return resulta;
}
    let numeroo = [1,2,3,4,5,6]
    let pares = agruparEmPares(numeroo)
    console.log(pares)

    let num = 1
    let soma = 0
    while (num <= 10) {
        soma += num
        num++
    }
    console.log("A soma de 1a 10 é:", soma)


    let numm = 1
    
    while (numm <= 20) {
        if (numm % 2 === 0) {
            console.log(numm)
        }
        numm++
    }

    let somaa = 0
    let nuum

    while (nuum !== 0) {
        nuum = parseInt(prompt("Digite um numero(0 para sair):"))
        somaa += nuum
    }

console.log("A soma total é:", somaa)
