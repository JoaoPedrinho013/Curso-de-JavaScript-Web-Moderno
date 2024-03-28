/**Desenvolva uma funcao que receba uma string como parametro e retorne essa string somente com as consoantes ou seja sem as vogais ex
 * 
 * removerVogais("Cod3r") // retornara "cd3r"
 * removerVogais("Fundamentos") // retornara "fndmnts"

*/


const removerVogais = string => {
    let frase = ""
    for (caractere of string) {
        if(!['a', 'e', 'i', 'o', 'u'].includes(caractere.toLowerCase())){
            frase += caractere
        }
    }
    console.log(frase)
}


removerVogais("Cod3r") // retornara "cd3r"
removerVogais("Fundamentos") // retornara "fndmnts"
