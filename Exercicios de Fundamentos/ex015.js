/** Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.
 
Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero.
receberSomenteOsparesDeIndicesPares([1,2,3,4]) //retornará []
receberSomenteOsparesDeIndicesPares([10,70,22,43]) //retornará [10,22]
*/

const receberSomenteOsparesDeIndicesPares = (numeros) => {
    const newarray = []
    for(let i = 0; i < numeros.length; i++) {
        // Verifica se o índice é par e o número nesse índice é par
        if(i % 2 === 0 && numeros[i] % 2 === 0) {
            newarray.push(numeros[i])
        }
    }
    console.log(newarray)
}

receberSomenteOsparesDeIndicesPares([1,2,3,4]) // Deverá retornar []
receberSomenteOsparesDeIndicesPares([10,70,22,43]) // Deverá retornar [10,22]