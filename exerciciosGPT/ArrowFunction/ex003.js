// 3 Escreva uma arrow function que receba três números como parâmetros e retorne a média deles.

const media = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3
}

const mediaDe3 = media(9, 4, 7).toFixed(1)

console.log(`A media das 3 notas faladas acima é = ${mediaDe3}`)