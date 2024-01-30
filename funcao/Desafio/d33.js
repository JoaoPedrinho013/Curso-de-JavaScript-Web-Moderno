/**
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostree o resultado no console. Todos os lementos do vetor resultado deverão aparecer no console.
 */



const vetorInteiro = [1, 2, 3, 4]
const vetorString = ["a", "b", "c", "d"]
const vetorDouble = [1.1, 2.2, 3.3, 4.4]


console.log(vetorInteiro.concat(vetorString, vetorDouble))
console.log(vetorString.concat(vetorDouble, vetorInteiro))

