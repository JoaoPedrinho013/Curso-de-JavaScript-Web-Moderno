// 11 Crie uma função arrow que receba um array de números e retorne o menor número.

const menorDaLista = (lista) => {
    let menor = 0
    for(indice in lista) {
        if(indice == 0){
            menor = lista[indice]
        }else if (lista[indice] < menor) {
            menor = lista[indice]
        }
    }
    console.log(`Da lista ${lista} o menor numero é o ${menor}`)
}


const array = [4, 3, 6, 2, 1, 10]
menorDaLista(array)