
/** Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 
Obs: Considere que todas as palavras só tão separadas por um espaço

contarPalavras("Sou uma frase") // retornará 3 
contarPalavras("Me divirto aprendendo a programar") // retornará 5 */

const contarPalavras = frase => {
    const formatado = frase.split(" ")
    console.log(formatado.length)
}

contarPalavras("Sou uma frase") // retornará 
contarPalavras("Me divirto aprendendo a programar") // retornará 5 