//17 Crie uma função arrow que receba um número e retorne uma string indicando se é positivo, negativo ou zero.
console.log('Usando Switch')
const PosNegZero = numero => {
    switch (numero) {
        case 0:
            console.log('O numero é zero!')

        case numero < 0:
            console.log('O numero é negativo abaixo de zero!')
        case numero > 0:
            console.log('O numero é positivo acima de zero!')
        
            
    }
}

PosNegZero(5)
PosNegZero(0)
PosNegZero(-5)
console.log('------------------------------------------------------------')

console.log('Usando IF')
const PosNegZero2 = numero => {
    if(numero < 0){
        console.log(`O numero ${numero} é abaixo de zero, portanto e negativo`)
    } else if (numero > 0) {
        console.log(`O numero ${numero} é acima de zero, portanto e positivo`)
    } else {
        console.log(`O numero ${numero} é zero!!!`)
    }
}

PosNegZero2(5)
PosNegZero2(0)
PosNegZero2(-5)