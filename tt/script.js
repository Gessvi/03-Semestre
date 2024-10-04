const produtos = [
    { id: 1, nome: 'Feijão', preco: 4.75 },
    { id: 2, nome: 'Arroz', preco: 2.99 },
    { id: 3, nome: 'Farinha', preco: 2.99 },
    { id: 4, nome: 'Açúcar', preco: 1.99 },
    { id: 5, nome: 'Café', preco: 2.50 },
    { id: 6, nome: 'Sal', preco: 0.99 },
    { id: 7, nome: 'Biscoito', preco: 1.99 },
    { id: 8, nome: 'Pão de Forma', preco: 2.99 },
    { id: 9, nome: 'Tapioca', preco: 1.99 },
    { id: 10, nome: 'Pão de Forma Integral', preco: 1.99 },
    { id: 11, nome: 'Suco em Caixa', preco: 1.99 },
    { id: 12, nome: 'Suco em Pó', preco: 1.99 },
];

const produtoss = [
    { id: 13, nome: 'Margarina', preco: 4.75 },
    { id: 14, nome: 'Manteiga', preco: 2.99 },
    { id: 15, nome: 'Queijo Lanche', preco: 2.99 },
    { id: 16, nome: 'Queijo Mussarela', preco: 1.99 },
    { id: 17, nome: 'Queijo Branco', preco: 2.50 },
    { id: 18, nome: 'Queijo', preco: 0.99 },
    { id: 19, nome: 'Presunto', preco: 1.99 },
    { id: 20, nome: 'Mortadela', preco: 2.99 },
    { id: 21, nome: 'Calabresa', preco: 1.99 },
    { id: 22, nome: 'Carne do Sol', preco: 1.99 },
    { id: 23, nome: 'Bacon', preco: 1.99 },
    { id: 24, nome: 'Costela', preco: 1.99 },
];

const produtoos = [
    { id: 25, nome: 'Fio Dental', preco: 4.75 },
    { id: 26, nome: 'Escova de Dente', preco: 2.99 },
    { id: 27, nome: 'Amaciante', preco: 2.99 },
    { id: 28, nome: 'Esponja de Banho', preco: 1.99 },
    { id: 29, nome: 'Sabão de Coco', preco: 2.50 },
    { id: 30, nome: 'Pedra Sanitária', preco: 0.99 },
    { id: 31, nome: 'Detergente', preco: 1.99 },
    { id: 32, nome: 'Sabonete em Barra', preco: 2.99 },
    { id: 33, nome: 'Sabonete Líquido', preco: 1.99 },
    { id: 34, nome: 'Desinfetante', preco: 1.99 },
    { id: 35, nome: 'Álcool 70% | Líquido', preco: 1.99 },
    { id: 36, nome: 'Álcool 70% | Gel', preco: 1.99 },
];

let carrinho = [];

function exibirProdutos() {
    const produtosContainer = document.querySelector('.produtos');
    const produtossContainer = document.querySelector('.produtoss');
    const produtoosContainer = document.querySelector('.produtoos');

    // Limpa as listas antes de adicionar
    produtosContainer.innerHTML = '';
    produtossContainer.innerHTML = '';
    produtoosContainer.innerHTML = '';

    // Adiciona produtos de alimentos
    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtosContainer.appendChild(div);
    });

    // Adiciona produtos de frios
    produtoss.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtossContainer.appendChild(div);
    });

    // Adiciona produtos de limpeza
    produtoos.forEach(produto => {
        const div = document.createElement('div');
        div.className = 'produto';
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        produtoosContainer.appendChild(div);
    });
}

function adicionarAoCarrinho(produtoId) {
    const produto = [...produtos, ...produtoss, ...produtoos].find(p => p.id === produtoId);
    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    atualizarCarrinho();
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.querySelector('.itens-carrinho');
    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-carrinho';
        div.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        itensCarrinho.appendChild(div);
        total += item.preco * item.quantidade;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', exibirProdutos);
