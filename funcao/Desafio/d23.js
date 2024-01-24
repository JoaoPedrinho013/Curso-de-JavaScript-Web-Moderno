/**Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function resultado(nota1,nota2,nota3) {
    const media = ((nota1*4) + (nota2 * 3) + (nota3 * 3)) / 10
    
    if (media >= 5) {
        console.log(`Parabéns você esta com a média em ${media.toFixed(1)} pontos e foi APROVADO!!!`)
    } else {
        console.log(`Sua média foi de ${media.toFixed(1)} e você não passou dessa vez!`)
    }

}

resultado(7, 3, 5)
resultado(3, 6, 3)
resultado(-13,2,2)