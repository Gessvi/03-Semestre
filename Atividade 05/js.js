document.getElementById('togger').addEventListener('click', function () {
    const texto = document.getElementById('texto')
    if (texto.style.display === 'none') {
        texto.style.display = 'block'
    }else{
        texto.style.display = 'none'
    }
})