// Crie um arquivo verificarPropriedades.js que exporta uma função verificarPropriedadeEmObjetos que usa o lodash para verificar se uma determinada propriedade existe em todos os objetos de um array.
//Importe essa função em outro arquivo e teste-a com diferentes objetos.

const _ = require('lodash')

this.verificar_propriedade_em_objetos = (array, propriedade) => _.every(array, obj => _.has(obj, propriedade))

