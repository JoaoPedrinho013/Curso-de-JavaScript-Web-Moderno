/**Elabore uma funcao que recebe dois parametros: o pimeiro é um array de numeros e o segundo é um numero que especifica uma quantidade de digitos. Essa funcao devera retornar somente aqueles numeros do array que tem a quantidade de digitos indicada pelo segundo parametro
 * ex
 * filtrarQuantidadeDeDigitos([38, 2, 365,10,125, 11], 2) // retornara [38, 10, 11]
 * filtrarQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornara [5, 9, 1]
 */



const filtrarQuantidadeDeDigitos = (array, num) => {
    console.log(array.filter(numero => {
        const quantidadeDigitos = numero.toString().length
        return quantidadeDigitos === num
      }))
    
}
filtrarQuantidadeDeDigitos([38, 2, 365,10,125, 11], 2) // retornara [38, 10, 11]