function somar(a,b) {
    return a + b
}

let resultado = somar(5,3)
console.log(`Resultado: ${resultado}`)

//Contar vogais
function contarVogais(texto){
    let contador = 0
    texto = texto.toLowerCase(); //Converte o texto para maiusculas, facilitar na conta
   
   
    for(let i = 0; i < texto.length; i++){
       if('aeiou'.includes(texto[i])) //Verifica se o caracter atual é uma vogal
   {
       contador++ 
   }}
   return contador
   }
   
   let resultadoVogais = contarVogais('Ola mundo')
   
   console.log(resultadoVogais); //Saida:4

//Objetos

   const carro = {
        marca:'Ford', //Atributo 'Marca' do objeto
        modelo:'Fiesta', //Atributo 'Modelo' de objeto
        cor:'Vermelho', //Atributo 'Cor' de objeto
        ano:2020, //Atributo 'Ano' do objeto
        ligar:function () { //Metodo 'Ligar' do objeto | Os metodos são funcões
            console.log('O carro está Ligado.')
        }
   }

   //Acessando os atributos do objeto
   console.log(carro.marca) //Exibir:Ford
   console.log(carro.modelo) //Exibir:Fiesta
   console.log(carro.cor) //Exibir:Vermelho
   console.log(carro.ano) //Exibir:202

   //Chamando o metodo do objeto
   carro.ligar() //Exibir:O carro está ligado

//carro.marca.nome Acessar o nome da marca e a cor
//Pode atualziar a prorpiedade sempre que quiser
//carro.cor='amarelo'
//carro['cor']='vermelho'
//Pode adicionar novas propriedades ao objeto
//carro.modelo'Fiesta'
//Pode-se excluir uma propriedade com delete.carro.marca
//console.log(`${this.marca}${this.modelo}ligado!`)


//Atv 012
const pessoa = {
    nome:'joao',
    idade:30,
    cidade: 'Sao Paulo',
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cidade)

//Atv 03
const livro = {}
livro.titulo = "O Alquimista"
livro.autor = "Paulo Coelho"
livro.ano = 1988

console.log(livro)

//Atv 04 COPIA
const original = {
    nome: "Ana",
    idade: 29,
}
//Clonar o objeto
const copia = {...original}
//Modificar a COPIA
copia.idade = 30

console.log(original); //Saida("Nome: Ana, Idade: 29")
console.log(copia); //Saida("Nome: Ana, Idade: 30")

//Função construtora para a criação objetos 'pessoas'

function Pessoas(nome,idade) {
    this.nome = nome
    this.idade = idade
    this.apresentar = function() {
        console.log(`Ola, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }  
}
//Criando uma nova instancia de Pessoas
const pessoa1 = new Pessoas('Alice', 30)
const pessoa2 = new Pessoas('Ana', 25)

//Chamando o metodo apresentar
pessoa1.apresentar() //Exibir "Ola, meu nome é Alice e eu tenho 30 anos"
pessoa2.apresentar() //Exibir "Ola, meu nome é Ana e eu tenho 25 anos"

