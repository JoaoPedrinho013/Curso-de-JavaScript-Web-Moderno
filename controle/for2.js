const notas = [6.7, 6.5, 7.5, 6.5, 4.4]

for (let i in notas) {
    console.log(`nota ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}