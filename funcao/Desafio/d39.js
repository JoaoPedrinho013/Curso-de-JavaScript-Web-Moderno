/**Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const vetor1 = [1, 3, 5, 7]
const vetor2 = [2, 4, 6, 8]

const viceVersa = (array1, array2) => {
    console.log("Antes da troca:")
    console.log("array1:", array1)
    console.log("array2:", array2)

    for (indice in array1) {
        [array1[indice], array2[indice]] = [array2[indice], array1[indice]]
    }

    console.log("\nApós a troca:")
    console.log("array1:", array1)
    console.log("array2:", array2)
}

viceVersa(vetor1, vetor2)

