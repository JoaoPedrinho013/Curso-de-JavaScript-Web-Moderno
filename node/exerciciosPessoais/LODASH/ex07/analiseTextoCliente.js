const analise = require('./analiseTexto.js')

const frase = 'Amo pão com ovo e queijo'

const teste = analise.contar_palavras(frase)
const teste2 = analise.contar_caracteres(frase)
const teste3 = analise.encontrar_palavra_mais_longa(frase)

console.log(teste)
console.log(teste2)
console.log(teste3)