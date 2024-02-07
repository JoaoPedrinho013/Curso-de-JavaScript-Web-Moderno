//22 Desenvolva uma função que receba um array de números e retorne a soma de todos os números positivos.

const SomaDeArray = (array, somador)=> {

    for (let indice = 0; indice < array.length; indice++) {
        if (array[indice] > 0) {
            somador += array[indice]
        }
    }

    console.log(`Dessa lista de numeros [${array.join(', ')}] somando somente os positivos fica ${somador}`)
}


SomaDeArray([-1, -3, 4, 5, -1, -3, 4, 5], 0)








