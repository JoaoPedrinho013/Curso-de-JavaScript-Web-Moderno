const operacoesArray = require('./operacoesArray.js')

const Lista_de_amigos = ['Caio', 'Loro', 'Kadu', 'Caio Irmão do Caio']

console.log(`Lista antes de mexer: ${Lista_de_amigos}`)

operacoesArray.adcionar(Lista_de_amigos, 'Gege') 
operacoesArray.remover(Lista_de_amigos, 1)

console.log(`Lista depois de mexer: ${Lista_de_amigos}`)

console.log(operacoesArray.buscar(Lista_de_amigos, 0))


