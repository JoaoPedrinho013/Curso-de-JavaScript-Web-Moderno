/**29 Escreva uma arrow function que receba um número e retorne true se ele for um quadrado perfeito, false caso contrário. */

const isQuadradoPerfeito = numero => {
    if (numero < 0) {
        return false
    }

    return console.log(Math.sqrt(numero) === Math.floor(Math.sqrt(numero)))
}


isQuadradoPerfeito(25)
isQuadradoPerfeito(2)