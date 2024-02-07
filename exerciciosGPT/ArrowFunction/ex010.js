// 10 Desenvolva uma arrow function que receba dois valores e retorne o resto da divisão do primeiro pelo segundo.

const restoDivisao = (primeiro, segundo) => {
    let resto = primeiro % segundo
    return console.log(`O resto da divisao de ${primeiro} / ${segundo} = ${resto}`)
}

restoDivisao(5, 3)
