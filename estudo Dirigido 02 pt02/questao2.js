function multiplicarpor(array, multiplicador) {
    return array.map(function (numero) {

        return numero * multiplicador;

    });
}

let numeros = [1, 2, 3, 4, 5, 10, 20, 32, 40,1002, 1320, 1326];

let resultado = multiplicarpor(numeros, 5);

console.log(resultado);