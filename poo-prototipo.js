console.log("Teste de prototipos de Object com js");  

const pessoa = {
        idade: 18
    }

    const renan = {
        nome: 'Renan',
        idade: 30,
        __proto__: pessoa
    }

    console.log(renan.idade)
    
   //metodo 2================ 
    
function Pessoa(nome) {
        this.nome = nome
    }

    Pessoa.prototype.falarSeuNome = function () {
        console.log(`Meu nome é ${this.nome}`)
    }

    const renan1 = new Pessoa('renan1')
    renan1.falarSeuNome()