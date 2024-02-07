/**24 Crie uma função arrow que receba um array de strings e retorne o total de caracteres dessas strings. */

const quantasLetrasPorPalavras = array => {

    for (indice in array) {
        console.log(`O array: [${array[indice]}] e tem ${array[indice].length} caracteres`)
    }

}

quantasLetrasPorPalavras(['Olá, Mundo!', 'Teste-1', 'Teste-2'])

console.log('----------------------- =D -----------------------')
const quantasLetrasEmTudo = array => {
    let caracteres = 0
    for (indice in array) {
        for (indice2 in array[indice]) {
            caracteres++
        }
    }
    return console.log(`O array: [${array.join(', ')}] e tem ${caracteres} caracteres`)

}

quantasLetrasEmTudo(['Olá, Mundo!', 'Teste-3', 'Teste-4'])