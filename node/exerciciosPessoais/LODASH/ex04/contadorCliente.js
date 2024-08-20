const contador = require("./contador")

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

const teste = contador.contar_elementos(banco_de_dados)

console.log(teste)