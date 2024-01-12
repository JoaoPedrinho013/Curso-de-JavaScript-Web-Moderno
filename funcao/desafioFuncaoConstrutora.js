//class Pessoa {
//    constructor(nome) {
//      this.nome = nome
//    }
//    falar() {
//        console.log(`Meu nome é ${this.nome}`)
//   }
//}
//const p1 = new Pessoa('Pedro')
//p1.falar()


// Transformar isso acima para uma funcao constutora

function funcaoConstrutora(nome) {
    this.nome = nome
    this.noConsole = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const falar = new funcaoConstrutora('Pedro')
falar.noConsole()

