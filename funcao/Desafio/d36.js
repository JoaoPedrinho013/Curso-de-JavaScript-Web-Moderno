/**6) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

let vetor1 = [2, 4, 6, 8]
let vetor2 = []

function multiplicando(vetor1, numero) {
    for (indice in vetor1) {
        vetor2.push(vetor1[indice] * numero)
    }
    console.log(vetor2)
}
multiplicando(vetor1, 3)

vetor2 = []

function multiplicando2(vetor1, numero) {
    for (indice in vetor1) {
        if (vetor1[indice] > 5) {
            vetor2.push(vetor1[indice] * numero)
        }

    }
    console.log(vetor2)
}
multiplicando2(vetor1, 3)