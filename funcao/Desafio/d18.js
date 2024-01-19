/**18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function extenso(num=0) {
    switch (num){
        case 0:
            console.log(`O numero ${num} por extenso fica Zero`)
        case 1:
            console.log(`O numero ${num} por extenso fica Um`)
        case 2:
            console.log(`O numero ${num} por extenso fica Dois`)
        case 3:
            console.log(`O numero ${num} por extenso fica Tres`)
        case 4:
            console.log(`O numero ${num} por extenso fica Quatro`)
        case 5:
            console.log(`O numero ${num} por extenso fica Cinco`)
        case 6:
            console.log(`O numero ${num} por extenso fica Seis`)
        case 7:
            console.log(`O numero ${num} por extenso fica Sete`)
        case 8:
            console.log(`O numero ${num} por extenso fica Oito`)
        case 9:
            console.log(`O numero ${num} por extenso fica Nove`)
        case 10:
            console.log(`O numero ${num} por extenso fica Dez`)
    }
}

