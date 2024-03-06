/**Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. Considere 1 ano como 365 */


const pessoa = idade => {
    const dias = idade * 365
    return `Você tem ${dias} desde que nasceu!`
}

console.log(pessoa(23))