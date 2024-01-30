/**Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

const vetor = [3, -3, 2, -4, 5, -3, 2, 3, -3, -9,-3]

let negativo = 0
let positivo = 0

for(indice in vetor){

    if(vetor[indice] < 0){
        negativo++
    } else {
        positivo ++
    }
}
console.log(`No vetor [${vetor}] temos ${negativo} numeros negativos e ${positivo} numeros positivos =D`)
