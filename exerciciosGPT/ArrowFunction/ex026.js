/**26 Escreva uma função que receba um número e retorne um array com todos os seus divisores. */

const Divisores = numero => {
    const divisores = []

    for(let number=1; number <= numero; number++){
        if (numero % number == 0){
            divisores.push(number)
        }
    }
    console.log(`Você digitou o numero: ${numero}, e seus divisores são: [${divisores.join(', ')}]`)
}

Divisores(22)
Divisores(2222222227)