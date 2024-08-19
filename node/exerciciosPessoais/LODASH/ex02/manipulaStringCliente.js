const  manipular  = require('./manipulaString.js')


const string = "Olá, Mundo!"

const teste_1 = manipular.capitalizar(string)
const teste_2 = manipular.juntar_maiuscula(string)
const teste_3 = manipular.juntar_com_hifen(string)

console.log([teste_1, teste_2, teste_3])