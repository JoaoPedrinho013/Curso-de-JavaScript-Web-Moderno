// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calculos(n1=1, n2=1) {
    console.log(`A Soma de ${n1} + ${n2} = ${n1+n2}`)
    console.log(`A Subtração de ${n1} - ${n2} = ${n1-n2}`)
    console.log(`A Multiplicação de ${n1} * ${n2} = ${n1*n2}`)
    const divisao = n1/n2
    console.log(`A Divisão de ${n1} /  ${n2} = ${divisao.toFixed(2)}`)
}

calculos(10, 3)