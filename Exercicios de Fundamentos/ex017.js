/** Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 
somarNumeros([10,10,10]) // retornará 30
somarNumeros([15,15,15,15]) // retornará 60
*/

const somarNumeros = array => {
    let somador = 0
    for(let i = 0; i <= array.length -1 ; i++) {
        somador += array[i]
    }
    console.log(somador)
}

somarNumeros([10,10,10]) // retornará 30
somarNumeros([15,15,15,15]) // retornará 60