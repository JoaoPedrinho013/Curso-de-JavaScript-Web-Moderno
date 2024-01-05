// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(10, 3)

// armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 10))

// retorno implicito

const subtracao = (a, b) => a - b

console.log(subtracao(16, 3))

const imprimir = a => console.log(a.toUpperCase())
imprimir('Olá, Mundo!')