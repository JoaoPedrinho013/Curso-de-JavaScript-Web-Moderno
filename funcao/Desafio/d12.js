/**12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(numero){
    if (numero === 0 || numero ===1){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
const num = 10

console.log(`Fatorando o valor ${num} temos: ${fatorial(num)}`)