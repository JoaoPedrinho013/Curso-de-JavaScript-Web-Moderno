/** Numa  aplicação web de investimento financeiro da qual você faz parte da parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário
 
Com o intuito de realizar esse cáculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
calcularMedia([0,10]) // retornará 5
calcularMedia([1,2,3,4,5]) // retornará 3 */


const calcularMedia = array => {
    let somador = 0
    for(let i = 0; i <= array.length -1 ; i++) {
        somador += array[i]
    }
    console.log(somador/(array.length))
}

calcularMedia([0,10]) // retornará 5
calcularMedia([1,2,3,4,5]) // retornará 3