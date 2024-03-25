/**crie uma funcao que receba um array e retorne o primeiro e o ultimo elemento desse array como um novo array ex:
 * receberPrimeiroeUltimoElemento([7,14,"ola"]) //retornara [7, "ola"]
 * receberPrimeiroeUltimoElemento([-100, "aplicativo", 16]) //retornara [-100, 16]
 */

const receberPrimeiroeUltimoElemento = array => {
    const newArray = []
    newArray.push(array[0])
    for(let i = 0; i <= array.length; i++) {
        if (i === (array.length-1)){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

const receberPrimeiroeUltimoElemento2 = array => {
    const newArray = []
    newArray.push(array[0], array[array.length-1])

    console.log(newArray)
}




receberPrimeiroeUltimoElemento([7,14,"ola"]) //retornara [7, "ola"]
receberPrimeiroeUltimoElemento2([-100, "aplicativo", 16]) //retornara [-100, 16]