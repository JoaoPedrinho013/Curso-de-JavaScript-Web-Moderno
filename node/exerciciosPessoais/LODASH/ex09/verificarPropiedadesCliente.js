const combinar = require('./verificarPropiedades')

const ini_kanto =  [
    {
        nome: 'Charmander',
        tipo: 'Fogo',
        alpha: true
    },
    {
        nome: 'Squirtle',
        tipo: 'Agua',
        alpha: true
    },
    {
        nome: 'Bulbassaur',
        tipo: 'Planta',
        alpha: true
    }
]
const ini_johto =  [
    {
        nome: 'Cyndaquil',
        tipo: 'Fogo',
        alpha: true
    },
    {
        nome: 'Totodile',
        tipo: 'Agua',
        alpha: true
    },
    {
        nome: 'Chikorita',
        tipo: 'Planta',
        
    }
]

const teste = combinar.verificar_propriedade_em_objetos(ini_kanto, 'alpha')
const teste_2 = combinar.verificar_propriedade_em_objetos(ini_johto, 'alpha')

console.log(`Os iniciais de kanto são todos alphas? ${teste}`)
console.log(`Os iniciais de johto são todos alphas? ${teste_2}`)
