// 19 Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.


const ePar = lista => {
    const pares = []
    for (indice in lista) {

        if (lista[indice] % 2 == 0) {
            pares.push(lista[indice])
        }
    }
    console.log(`O array [${lista.join(', ')}] tem só esses numeros Pares [${pares.join(', ')}]` )
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
ePar(array)