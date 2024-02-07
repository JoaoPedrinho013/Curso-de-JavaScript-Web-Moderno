// 9 Escreva uma função arrow que receba um número e retorne true se ele for positivo e false se for negativo.

const positivoOUnegativo = (numero) => {
    if (numero > 0) return true
    if (numero <= 0) return false
}

console.log(positivoOUnegativo(0))
console.log(positivoOUnegativo(5))
console.log(positivoOUnegativo(-5))