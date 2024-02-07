// 23 Escreva uma arrow function que receba um número e retorne true se ele for um número triangular, false caso contrário. (Um número triangular é um número que pode ser representado na forma de um triângulo equilátero.)

const numeroTriangular = numero => {
    
    if (((1 + 8 * numero)**0.5) ** 2 == (1 + 8 * numero) && (((1 + 8 * numero)**0.5) - 1) % 2 == 0) {
        return true
    }else{
        return false
    }
}

console.log(numeroTriangular(15))
console.log(numeroTriangular(11))





console.log('---------------- retornando direto 1 linha de cod ----------------')





const numeroTriangular2 = numero => ((1 + 8 * numero) ** 0.5) ** 2 === (1 + 8 * numero) && (((1 + 8 * numero) ** 0.5) - 1) % 2 === 0


console.log(numeroTriangular2(15))
console.log(numeroTriangular2(11))
