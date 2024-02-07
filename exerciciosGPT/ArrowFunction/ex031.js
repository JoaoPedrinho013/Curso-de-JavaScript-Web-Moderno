/**31. Escreva uma função que receba dois números e retorne o mínimo múltiplo comum (MMC) entre eles. */
const MDC = (num3,num4) => {
    while (num4 !== 0) {
        const numTemporario = num3
        num3 = num4
        num4 = numTemporario % num4
    }
    return num3
}

//const MMC = (num1, num2) => Math.abs(num1 * num2) / MDC(num1, num2)

const MMC = (num1, num2) => {
    const mmc = Math.abs(num1 * num2) / MDC(num1, num2)
    return console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`)
}

MMC(12, 15)