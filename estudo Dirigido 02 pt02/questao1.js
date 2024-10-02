
function todossaopares(array) {
    return array.every(function (numero) {
        return numero % 2 === 0;
    });
}

let numero = [2,4,6,8,10];

console.log(numero);