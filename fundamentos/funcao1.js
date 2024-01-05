// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(10, 3)
imprimirSoma(10)
imprimirSoma(10, 3, 312, 32, 32, 1, 3)
imprimirSoma()

//funcao com retorno

function soma (a, b=1){
    return a + b
}

console.log(soma(10, 3))
console.log(soma(12))
console.log(soma())