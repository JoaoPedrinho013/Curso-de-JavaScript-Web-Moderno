/**Crie uma funcao que receba um array de elementos e retorne um array somente com os numeros presentes no 
 * array recebido como parametro
 * 
 * ex:
 * filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
 * filtrarNumeros(["a", "c"]) // retornara [1, 20]
*/

const filtrarNumeros = array => {
    const newArray = []
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof array[i] === "number") {
                newArray.push(array[i])
        }
    }
    console.log(newArray)
}

filtrarNumeros(["javascript", 1, "3", "web", 20]) // retornara [1, 20]
filtrarNumeros(["a", "c"]) // retornara []
