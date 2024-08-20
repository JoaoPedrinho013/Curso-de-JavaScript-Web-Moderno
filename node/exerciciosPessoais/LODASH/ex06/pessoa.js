// Crie um arquivo pessoa.js que define uma classe Pessoa com métodos como saudar e obterIniciais, onde this é usado para acessar as propriedades da pessoa, e o lodash é usado para manipular strings (por exemplo, para obter iniciais).
// Exporte a classe e use-a em outro arquivo para criar uma pessoa e utilizar seus métodos.
const _ = require('lodash')
class Pessoa {
    constructor() {
        this.nome = nome
        this.idade = idade
    }
    saudar() {
        return `Bom dia, Meu nome é ${this.nome}.`
    }

    obter_iniciais() {
        return _.map(_.split(this.nome, ' '), letra => letra.charAt(0).toUpperCase()).join('.')
    }
}

module.exports = Pessoa