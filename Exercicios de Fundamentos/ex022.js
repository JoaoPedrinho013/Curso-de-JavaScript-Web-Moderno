/**desenvolva uma funcao que receba como parametro um numero de 1 a 10. Internamente na funcao, sera gerado um numero aleatorio de 1 a 10. a funcao devera retornar se o parametro de entrada foi igual ao numero sorteado internamente. se o valor fornecido foi o sorteado, retorne "parabens, o numero sorteado foi o X".se nao for igual retorne "que pena! o numero sorteado foi o X" ex
 * funcaoDaSorte(10) //retornara "parabens, o numero sorteado foi o 10"
 * funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 3"
 * funcaoDaSorte(5) //retornara "que pena! o numero sorteado foi o 1"
 */


// CRIAR UMA FUNCAO COM PARAMETRO DE 1 A 10

const funcaoDaSorte = numero => {
    
    // GERAR UM NUMERO ALEATORIO DE 1 A 10
    const sorteado =  Math.floor(Math.random() * 10) + 1
    
    // O PARAMETRO É === AO NUMERO GERADO?
    // SE SIM, RETORNE X SE NAO RETORNE X
    if (sorteado === numero) {
        console.log(`Parabens, o numero sorteado foi o ${sorteado}`)
    } else {
        console.log(`Que pena! O numero sorteado foi o ${sorteado}`)
    }
    
}
funcaoDaSorte(10) 
funcaoDaSorte(7) 
funcaoDaSorte(6) 

