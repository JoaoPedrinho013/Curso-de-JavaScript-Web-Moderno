// Crie um arquivo analiseTexto.js que exporta funções como contarPalavras, contarCaracteres, e encontrarPalavraMaisLonga usando o lodash.
// Importe e use essas funções em outro arquivo para analisar textos diferentes.

const _ = require('lodash')

module.exports = {
    contar_palavras(frase) {
        const mula =  _.split(frase, ' ').length
        return `A frase tem ${mula} palavras.`
    },

    contar_caracteres(frase) {
        const mula = _.replace(frase, /\s/g, '').length
        const mula2 = frase.replace(/\s/g, '').length
        return `A frase tem ${mula} caracteres.`
        return `A frase tem ${mula2} caracteres.`

    },

    encontrar_palavra_mais_longa(frase) {
        const lista_de_palavras = _.split(frase, ' ')
        const mula = _.maxBy(lista_de_palavras, 'length')
        return  `A palavra mais longa da frase é "${mula}".`
    }

}