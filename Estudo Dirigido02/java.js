let notas = [];
let media = 0;

function mostrarValor() {
    const valor = document.getElementById('inputIn').value;
    const nota = parseFloat(valor);

    if (!isNaN(nota) && notas.length < 3) {
        notas.push(nota);
        document.getElementById('inputIn').value = ''; // Limpa o campo de entrada

        if (notas.length === 3) {
            media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;

            if (media >= 7) {
                document.getElementById('media').innerText = 'Aprovado! || Média: ' + media.toFixed(2);
            } else if (media >= 4) {
                document.getElementById('media').innerText = 'Reprovado, com direito a recuperação || Média: ' + media.toFixed(2);
            } else {
                document.getElementById('media').innerText = 'Reprovado, sem direito a recuperação || Média: ' + media.toFixed(2);
            }

            // Reinicia o processo
            notas = [];
        }
    } else if (notas.length >= 3) {
        alert('Já foram inseridas 3 notas.');
    } else {
        alert('Por favor, insira um número válido.');
    }
}
