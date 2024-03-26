/** Criar uma função que receba um array de números e retorne o menor número dessa array. 
 
menorNumero([10,5,35,65]) //retornará 5
menorNumero([5,-15,50,3]) //retornará -15
*/

const menorNumero = array => {
    let menor = 0
    for(indice in array) {
        if(indice == 0){
            menor = array[indice]
        }else if (array[indice] < menor) {
            menor = array[indice]
        }
    }
    console.log(`Da lista ${array} o menor numero é o ${menor}`)
}

menorNumero([10,5,35,65]) //retornará 5
menorNumero([5,-15,50,3]) //retornará -15