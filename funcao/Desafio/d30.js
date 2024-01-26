// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let maior = 0
let menor = 0
let contador = 0
for (indice in lista) {
    if (contador === 0) {
        maior = lista[indice]
        menor = lista[indice]
    }
    else {
        if (menor > lista[indice]) {
            menor = lista[indice]
        } else if (maior < lista[indice]) {
            maior = lista[indice]
        }
    }
    contador++
}
console.log(`O vetor tem esses numeros: ${lista}`)
console.log("Maior número:", maior)
console.log("Menor número:", menor)