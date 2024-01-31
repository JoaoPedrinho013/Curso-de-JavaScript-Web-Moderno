/**) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
 */

function aritmetica(A1, N, R) {
    let soma = 0
    let lista = []
    for (let indice = 0; indice <= N; indice++){
        let termo = A1 + indice * R
        lista.push(termo)
        soma+=termo
    }
    const listaFormatada = lista.join(', ')
    console.log(`Numeros da PA:[${lista}] e a soma da PA:${soma}`)
}
aritmetica(2, 5, 3)

const geometrica = (a1, n, r) => {
    let todosTermos = []
    let somaDeTodosTermos = 0

    for (let indice = 0; indice < n; indice++) {
        let termo = a1 * Math.pow(r, indice)
        todosTermos.push(termo)
        somaDeTodosTermos += termo
    }
    console.log(`Numeros da PG [${todosTermos}], e a soma de todos valores é ${somaDeTodosTermos}`)
}


geometrica(2, 5, 3)
