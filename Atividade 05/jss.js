const mensagem = document.getElementById('mensagem')
const botao = document.getElementById('mostrarMensagem')

botao.addEventListener('click', function () {
    setTimeout(() => {
        mensagem.textContent = 'Seja Bem - Vindo!'
    },3000)//3000 Milisegundos = 3 Segundos
})