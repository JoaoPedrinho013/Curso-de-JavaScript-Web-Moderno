// Crie um arquivo jogo.js que define classes como Jogador, Inimigo, e Jogo.
// Use this para acessar propriedades e métodos dentro das classes.
// Exporte as classes e crie um jogo em outro arquivo.


class Jogador {
    constructor(nome, numero) {
        this.nome = nome
        this.numero = numero
    }

}

class Inimigo {
    constructor(nome, numero) {
        this.nome = nome
        this.numero = numero
    }
}

class Jogo {
    verificarNumeros(jogador, inimigo) {
        if( jogador.numero > inimigo.numero) {
            console.log(`${jogador.nome} tem o número ${jogador.numero}, maior que ${inimigo.nome} com o número ${inimigo.numero}.`)
        } else if (jogador.numero < inimigo.numero) {
            console.log(`${inimigo.nome} tem o número ${inimigo.numero}, maior que ${jogador.nome} com o número ${jogador.numero}.`)
        } else {
            console.log(`${jogador.nome} e ${inimigo.nome} têm o mesmo número ${jogador.numero} =D.`)
        }
    }
}


module.exports = {
    Jogador,
    Inimigo, 
    Jogo
}