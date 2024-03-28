/**Desenvolva uma funcao que recebe um caractere e uma string como parametros e retorne a quantidade de vezes q o caractere se repete na string. A funcao devera ser case-sensitive ou seja ira diferenciar maiusculas de minusculas ex:
 * contarCaractere("r", "A sorte favorece os audazes") // retornara 2
 * contarCaractere("c", "Conhece-te a ti mesmo") // retornara 1
 */


const contarCaractere = (caractere, frase) => {
    let contador = 0
    for (let letra of frase) {
        if(letra === caractere){
            contador ++
        }
      }
    console.log(contador)
}
    
    


contarCaractere("r", "A sorte favorece os audazes") // retornara 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornara 1