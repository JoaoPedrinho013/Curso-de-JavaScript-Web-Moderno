/** Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6 */

const segundoMaior = array => {

    array.sort((a, b) => b - a)
    console.log(array)
    if (array.length >= 2) {
        console.log(array[1])
    } else {
        console.log(array[0])
    }
}

segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
