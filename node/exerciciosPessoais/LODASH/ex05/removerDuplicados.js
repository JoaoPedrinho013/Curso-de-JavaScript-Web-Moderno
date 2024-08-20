// Crie um arquivo removerDuplicados.js que exporta uma função removerDuplicados que usa o lodash para remover duplicados de um array.
//Importe essa função em outro arquivo e teste-a com diferentes arrays.

const _ = require('lodash')

this.remover_duplicados_objetos = lista => _.uniqBy(lista, 'nome')
this.remover_duplicados_array = lista => _.uniq(lista)