// Crie um arquivo pessoa.js que define uma classe Pessoa com propriedades como nome e idade.
// A classe deve ter um método saudar que usa this para acessar o nome da pessoa.
// Exporte a classe e use-a em outro arquivo para criar e saudar uma pessoa.

class Pessoa {
    constructor(nome="---",idade=13) {
        this.nome = nome
        this.idade = idade
    }
    saudar() {
        console.log(`Bom dia, Meu nome é ${this.nome}.`)
    }
}

module.exports = Pessoa