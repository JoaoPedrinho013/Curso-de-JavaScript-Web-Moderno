//8 Crie uma arrow function que calcule e retorne o fatorial de um número.

const fatorial = (numero) => {
    if (numero < 0) {
        return console.log(`O Fatorial nao existe com numeros negativos`)
    } else if (numero === 0 || numero === 1) {
        return console.log(`O numero ${numero}! é = 1`)
    } else {
        let resultado = 1
        let formula = "1 x "
        for (let fat = 2; fat <= numero; fat++) {
            resultado *= fat
            formula += `${fat}${fat === numero ? '' : ' x '}`
        }
        return console.log(`O numero ${numero}! é ${formula} = ${resultado}`)
    }
}

fatorial(5)




