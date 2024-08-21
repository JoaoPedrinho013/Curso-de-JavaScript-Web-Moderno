const p_d = require('./processamentoDados')


const pokemons =  [
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
    }, 
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

const teste = p_d.processar_dados(pokemons)
const teste2 = p_d.processarDados(pokemons)
console.log(teste2)