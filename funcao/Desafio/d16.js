/**16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */


function Calculadora(num1=1, operador='' ,num2=1) {

    

    switch(operador){
        case '+':
            console.log(`O numero ${num1} + ${num2} = ${num1 + num2}`)
            break
        case '-':
            console.log(`O numero ${num1} - ${num2} = ${num1 - num2}`)
            break
        case '*':
            console.log(`O numero ${num1} * ${num2} = ${num1 * num2}`)
            break
        case '/':
            console.log(`O numero ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`)
            break
        default:
            console.log(`Essa operação ${operador} ainda não consigo efetuar =(`)
            break

    }
}

Calculadora(10, '+', 3)
Calculadora(10, '-', 3)
Calculadora(10, '*', 3)
Calculadora(10, '/', 3)
Calculadora(10, '//', 3)