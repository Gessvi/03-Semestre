document.getElementById('Adicionar').addEventListener('click',function () {
    const itemInput = document.getElementById('itemInput')
    const novoItem = document.createElement('li')
    novoItem.innerText = itemInput.value
    document.getElementById('lista').appendChild(novoItem)
    itemInput.value=""//Limpar o campo de entrada
})