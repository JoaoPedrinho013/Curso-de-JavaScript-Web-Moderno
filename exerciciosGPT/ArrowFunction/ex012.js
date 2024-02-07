// 12 Desenvolva uma arrow function que receba um número inteiro e retorne true se ele for primo, false caso contrário.

const primo = numero => {
    if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0){
        return true
    } else {
        return false
    }
}


console.log(primo(9))
console.log(primo(521))