// Crie um arquivo contador.js que exporta uma função contarElementos que usa o lodash para contar quantas vezes cada elemento aparece em um array.
// Importe e use essa função em outro arquivo para contar elementos em diferentes arrays.

const _ = require('lodash')

this.contar_elementos = lista => _.countBy(lista, 'tipo')