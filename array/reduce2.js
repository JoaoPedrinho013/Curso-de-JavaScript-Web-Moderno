const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Caio', nota: 9.2, bolsista: true },
    { nome: 'Lorex', nota: 9.8, bolsista: false },
    { nome: 'Carlos', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const resultado = alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => {
    return acumulador && atual
}, true)
console.log(resultado)


// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(aluno => aluno.bolsista).filter(bolsista => bolsista).reduce((acumulador, atual) => acumulador || atual, false)

console.log(algumBolsista)

// Desafio 2 mostrando os nomes dos que é bolsistas

const bolsistas = alunos.filter(aluno => aluno.bolsista).map(aluno => aluno.nome)
console.log(bolsistas)

// Desafio 1 Professor: Todos os alunos são bolsisrta?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))

// Desafio 2 Professor: Algum aluno é bolsista?
const algumBolsista2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista2))