// 7 Desenvolva uma função que receba dois números e retorne o maior deles.

const maior = (numero1, numero2) => {
    if (numero1 > numero2) {
        return console.log(`O maior é o ${numero1} o primeiro parametro passado`)
    } else {
        return console.log(`O maior é o ${numero2} o segundo parametro passado`)
    }
}

maior(10, 15)
maior(20, 15)