// Crie um arquivo processamentoDados.js que exporta uma função processarDados que usa o lodash para executar uma série de operações em um array de objetos, como ordenar, agrupar, e filtrar.
// Importe e use essa função em outro arquivo para processar dados complexos.


const _ = require('lodash')

this.processar_dados= dados => {
    const ordenados = _.sortBy(dados, 'nome')
    const filtrados = _.filter(ordenados, obj => obj.alpha == true)
    const agrupados = _.groupBy(filtrados, 'tipo')

    return agrupados
}

this.processarDados = arrayObjeto => _.groupBy(_.filter(_.sortBy(arrayObjeto, 'nome'), 'alpha'), 'tipo')