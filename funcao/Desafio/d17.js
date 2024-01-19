/**17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function AumentoSalarial(plano='', salário=1){
    switch(plano.toUpperCase()){
        case 'A':
            console.log(`Parabéns seu plano é o ${plano.toUpperCase()} e seu sálario foi de R$${salário.toFixed(2)} para R$${(salário * 1.10).toFixed(2)}`)
            break
        case 'B':
            console.log(`Parabéns seu plano é o ${plano.toUpperCase()} e seu sálario foi de R$${salário.toFixed(2)} para R$${(salário * 1.15).toFixed(2)}`)
            break
        case 'C':
            console.log(`Parabéns seu plano é o ${plano.toUpperCase()} e seu sálario foi de R$${salário.toFixed(2)} para R$${(salário * 1.20).toFixed(2)}`)
            break
        default:
            console.log(`Infelizmente não temos o plano ${plano.toUpperCase()} disponivel!`)
    }
}
AumentoSalarial('a', 1200)
AumentoSalarial('b', 1200)
AumentoSalarial('c', 1200)
AumentoSalarial('d', 1200)
