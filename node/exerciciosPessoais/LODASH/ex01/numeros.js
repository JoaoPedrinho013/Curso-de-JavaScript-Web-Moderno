// Crie um arquivo numeros.js que exporta uma função filtrarEOrdenar que usa o lodash para filtrar números maiores que um valor específico e depois ordená-los.
// Importe e use essa função em outro arquivo, fornecendo uma lista de números.

const _ = require('lodash')

const mula = []

this.filtrar_e_ordenar = (lista, numero )=> {
    _.filter(lista, function(num) { 
        if(num >= numero) {
            mula.push(num)
        }
    })

    console.log(_.orderBy(mula))
}



