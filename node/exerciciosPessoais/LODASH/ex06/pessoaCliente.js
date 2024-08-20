const Pessoa = require('./pessoa')

const newPessoa = new Pessoa('João Pedro')
const saudar = newPessoa.saudar()
const obter_iniciais = newPessoa.obter_iniciais()


console.log(saudar)
console.log(obter_iniciais)