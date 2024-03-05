// VI NO CHAT GPT: AQUI ELE MEXEU NA RAIZ DO APROVADOS QUE É UM ARRAY E CRIOU UMA FUNCAO NOVA CHAMADA FOREACH2 MEXEU NO PROTOTYPE´


//const aprovados = ['Pedro', 'Richard', 'Caio', 'Carlos']
//aprovados.forEach2 = function(callback) {
//    for (let i = 0; i < this.length; i++) {
//        callback(this[i], i, this)
//    }
//}
//aprovados.forEach2(function(nome, indice) {
//   console.log(`${indice+1}) ${nome}`)
//})



// PROFESSOR

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['Pedro', 'Richard', 'Caio', 'Carlos']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})