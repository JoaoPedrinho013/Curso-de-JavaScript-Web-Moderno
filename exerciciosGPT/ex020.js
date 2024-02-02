// 20 Crie uma arrow function que receba um número e retorne um array com todos os números primos até o número informado.

const primoAte = numero => {
    const primos = []

    for(let num = 2; num < numero + 1; num++){
        let confirmacao = true
        for(let i = 2; i <= Math.sqrt(num); i++) {
            
            if (num % i ==0){
                confirmacao = false
                break
            }
            
        }
        if (confirmacao) {
            primos.push(num)
        }
    }
    
    return console.log(`Números primos até o numero ${numero}: ${primos.join(', ')}.`)
}   

primoAte(521)





