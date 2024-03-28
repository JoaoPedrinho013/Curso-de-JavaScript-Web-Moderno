/** Desenvolva uma função que recebe um objeto como parãmetro e retorne um outro que corresponde ao objeto recebido como parâmetro, porém com as chaves e valores invertidas, conforme exemplo a seguir:
 
inverter({a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c" }
*/

const inverter = obj => {
    let objetoInvertido = {}

    for(indice in obj) {
    let valor = obj[indice]
    objetoInvertido[valor] = indice
}
    console.log(objetoInvertido)
}

inverter({a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c" }