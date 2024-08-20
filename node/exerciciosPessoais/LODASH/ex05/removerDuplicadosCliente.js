const remover = require('./removerDuplicados')

const banco_de_dados = [
    {
        nome: 'Pikachu',
        tipo: 'Elétrico'
    },
    {
        nome: 'Jolteon',
        tipo: 'Elétrico'
    },
    {
        nome: 'Zapdos',
        tipo: 'Elétrico'
    },
    {
        nome: 'Zapdos',
        tipo: 'Elétrico'
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo'
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo'
    },
    {
        nome: 'Entei',
        tipo: 'Fogo'
    },
    {
        nome: 'Lapras',
        tipo: 'Agua'
    },
    {
        nome: 'Peliper',
        tipo: 'Agua'
    }
]
const banco_de_dados2 = [

    'Pikachu',
    'Jolteon',
    'Zapdos',
    'Zapdos',
    'Charmander',
    'Charmander',
    'Entei',
    'Lapras',
    'Peliper',

]

const teste = remover.remover_duplicados_objetos(banco_de_dados)
const teste2 = remover.remover_duplicados_array(banco_de_dados2)
console.log(teste)
console.log(teste2)