/**Crie uma funcao que receba dois numeros e retorne se o primeiro é maior ou igual o segundo */

const maiorOuigual = (primeiro, segundo) => {
    if(typeof primeiro !== 'number' || typeof segundo !== 'number'){
        return console.log(false)
    }
    if (primeiro >= segundo) {
        return console.log(true)
    } else {
        return console.log(false)
    }
}


maiorOuigual(5, 1)
maiorOuigual(1, 5)
maiorOuigual(1, 1)
maiorOuigual(1, '1')