const texto = document.getElementById('texto');
        
document.getElementById('mostrar').addEventListener('click', function () {
    texto.style.display = 'block';
});

document.getElementById('ocultar').addEventListener('click', function () {
    texto.style.display = 'none';
});
