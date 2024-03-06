/**Escreva uma funcao que receba dois parametros. o primeiro parametro é o elemento que repetira, enquanto que o segundo sera o numero de vezes que havera repeticao. Um array sera retornado
 * 
 * repetir("codigo", 2) // retorna ['codigo', 'codigo']
 * repetir(7, 3) // retorna [7, 7, 7]
 */

const repetir = (elemento, repetir) => {
    const newArray = []
    for(let indice = 0; indice < repetir; indice++){
        newArray.push(elemento)
    }
    console.log(newArray)
}



repetir("Código", 2) // retorna ['codigo', 'codigo']
repetir(7, 3) // retorna [7, 7, 7]