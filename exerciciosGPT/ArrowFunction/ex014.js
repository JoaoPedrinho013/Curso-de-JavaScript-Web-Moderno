// 14 Crie uma arrow function que receba dois arrays e retorne um novo array que contenha os elementos em comum entre os dois arrays.

const emComum = (lista1, lista2) => {
    const array3 = []
    for(indice1 in lista1){
        for(indice2 in lista2){
            if(lista1[indice1] == lista2[indice2]){
                array3.push(lista1[indice1])
            }
        }
    }
    console.log(array3)
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = [1, 3, 4, 7, 9]

emComum(array1, array2)