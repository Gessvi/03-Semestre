const estudante = {
    nome:'Lucas',
    idade:22
}

//Verificar se a propriedade 'nome' existe no objeto
if ('nome' in estudante) {
    console.log("A propriedade 'nome' existe no objeto")
}

//Verificar se a propriedade 'curso' existe no objeto
if ('curso' in estudante) {
    console.log("A propriedade 'curso' não existe no objeto")
}

//Mesclar objetos

const estudantes  = {
    nome: 'Lucas',
    idade: '22'
};

//Mesclar objetos

const usuario1 = {
    nome: 'Ana',
    idade: 27
}

const usuario2 = {
    cidade: 'Rio de Janeiro',
    pais: 'Brasil'
};

const usuarioCompleto = {...usuario1,usuario2};

console.log(usuarioCompleto);

//objetosaninhados

const empresa = {
    nome: 'Tech Solutions',
    endereco: {
        rua:'Avenida Paulista',
        numero:1000,
        cidade:'São Paulo'
    },
    mostrarEndereco: function() { return this.endereco.rua +','+this.endereco.numero +'-'+ this.endereco.cidade}
};

console.log(empresa.nome);
console.log (empresa.mostrarEndereco());

//Manipulação de um objeto com arrays como propriedades

const aluno = {
    nome:'Pedro',
    idade:20,
    notas:[7,8.5,9,10], 
    //Método para calcular a média das notas
    calcularMedia:function() {
        const soma = this.notas.reduce((acumulador,nota)=>acumulador+nota,0);
        return soma/this.notas.length;
    }
};

console.log(aluno.nome);
console.log(aluno.calcularMedia());

class Pessoas {
    constructor (nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
    dizerOla(){
        return 'Olá meu nome é '+this.nome+' e eu tenho '+this.idade+' anos';
    }
}

const pessoa3 = new Pessoas('João',30);
const pessoa4 = new Pessoas('Maria',25);

console.log(pessoa3.dizerOla());
console.log(pessoa4.dizerOla());

class Carro {
    constructor (marca,modelo) {
        this.marca=marca;
        this.modelo=modelo;
    }
    descrever() {
        return 'Este carro é um '+this.marca+' ,'+this.modelo+'.';
    }
}

const meuCarro = new Carro ('Toyota','Corolla');
console.log(meuCarro.descrever());

//classe com métodos estatáticos

class Matematica {
    static somar(a,b) {
        return a+b;
    }
    static subtrair (a,b) {
        return a-b;
    }
}

console.log(Matematica.somar(10,5));
console.log(Matematica.subtrair(10,5));