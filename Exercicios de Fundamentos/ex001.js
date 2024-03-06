/**Crie uma funcao que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a funcao) e com ponto de exclamacao "!" no final. */

const cumprimentar = nome => {
   // console.log(`Olá, ${nome}!`)
    console.log('Olá, ' + nome + '!')
}

const cumprimentar2 = nome => console.log('Olá, ' + nome + '!')

cumprimentar('João')
cumprimentar2('Pedro')