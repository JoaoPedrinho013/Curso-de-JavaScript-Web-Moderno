const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Caio', nota: 9.2, bolsista: true},
    { nome: 'Lorex', nota: 9.8, bolsista: false},
    { nome: 'Carlos', nota: 8.7, bolsista: true}
]

/*const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {

})*/

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)