//16 Escreva uma arrow function que receba um objeto com informações de uma pessoa (nome, idade, sexo) e retorne uma string no formato "Nome: [nome], Idade: [idade], Sexo: [sexo]".

const transformacao = (obj) => {
    
    console.log(`"Nome: [${obj.nome}], Idade: [${obj.idade}], Sexo: [${obj.sexo}]"`)
 
}

const objeto = {
    nome: 'Pedro',
    idade: 24,
    sexo: 'M'
}

transformacao(objeto)