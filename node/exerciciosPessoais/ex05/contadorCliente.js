const Contador = require('./contador.js')

const contador1 = new Contador()
const contador2 = new Contador()
const contador3 = new Contador()

console.log(`Número total de instâncias criadas: ${Contador.incrementar()}`)