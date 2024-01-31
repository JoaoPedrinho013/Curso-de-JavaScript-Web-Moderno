// 6 Escreva uma arrow function que receba um valor em reais e retorne o equivalente em dólares, considerando uma taxa de câmbio fixa.

const Cambista = (dinheiro) => {
    const taxa = 0.05 * dinheiro

    return dinheiro / 4.95 + taxa
}

const dolar = Cambista(1000)

console.log(`O valor em Dollar é $${dolar.toFixed(2)}`)