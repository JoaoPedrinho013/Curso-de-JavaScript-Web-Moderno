/**) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const lista = [1, 2, 3, 4, 5, 6, 7]
let soma = 0
for (indice in lista) {
    soma += lista[indice]
}
const media = soma / lista.length
const listaFormatados = lista.join(', ')
console.log(`Os valores = [${listaFormatados}]`)
console.log(`Tem a media de ${media.toFixed(1)}`)