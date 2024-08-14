// Crie um arquivo contador.js que define uma classe Contador com um método incrementar.
// Utilize this para rastrear o número de instâncias da classe criadas.
// Importe e use a classe em outro arquivo para testar o contador.

class Contador {
    static totalInstancias = 0

    constructor() {
        Contador.totalInstancias += 1
    }

    static incrementar() {
        return Contador.totalInstancias
    }
}

module.exports = Contador

