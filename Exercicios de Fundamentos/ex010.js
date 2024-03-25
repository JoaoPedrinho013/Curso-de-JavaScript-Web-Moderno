/**Elabore uma funcao que recebe um numero como parametro e retorne uma string com "+" na quantidade especificada no parametro
 * 
 * simboloMais(2) // retorna "++"
 */



const simboloMais = numero => {
    let resultado = ''
    for(let i = 1; i <= numero; i++) {
        resultado += "+"
    }
    console.log(resultado)
}

simboloMais(2)
simboloMais(5)