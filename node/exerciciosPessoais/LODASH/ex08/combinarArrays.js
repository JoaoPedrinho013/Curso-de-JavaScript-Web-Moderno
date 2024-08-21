// Crie um arquivo combinarArrays.js que exporta uma função combinarArraysSemDuplicados que usa o lodash para combinar dois arrays removendo duplicados.
// Importe essa função em outro arquivo e teste-a com diferentes arrays.


const _ = require('lodash')

module.exports = {
    combinar_arrays_sem_duplicados(...arrays) {
        const novo_aray = []
        const array_modificado = _.uniq(arrays)
        for (index in array_modificado) {
            novo_aray.push(array_modificado[index].join(''))
        }
        return novo_aray
    }
}