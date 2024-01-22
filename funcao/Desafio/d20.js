/**20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

let cedula = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0 } 

function cedulas(valor) {
    console.log(`Olá, Você pediu para sacar R$${valor.toFixed(2).replace('.', ',')}`)
    while (valor !== 0) {
        if (valor >= 100) {
            cedula[100]++
            valor -= 100

        } else if (valor >= 50) {
            cedula[50]++
            valor = valor - 50

        } else if (valor >= 10) {
            cedula[10]++
            valor = valor - 10

        } else if (valor >= 5) {
            cedula[5]++
            valor = valor - 5

        } else if (valor >= 1) {
            cedula[1]++
            valor = valor - 1

        }
    }
    
    for (let nota in cedula) {
        if (cedula[nota] !== 0) {
            console.log(`${cedula[nota]} nota(s) de R$ ${parseInt(nota).toFixed(2).replace('.', ',')}`)
        }
    }
    parseInt(nota)
    
}
cedulas(196)