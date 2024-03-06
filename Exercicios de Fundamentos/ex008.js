/*Desenvolva uma função que recebe dois números inteiros não negativos(mairoes ou igual a zero e realize a multiplicação deles. Porém, utilize o operador de multiplicação)
multiplicar(5, 5) retorna 25*/

const multiplicar = (valor1, valor2) => {
    if(valor1 < 0 || valor2 < 0) {
        return console.log("Não multiplico numeros negativos!")
    } else {
        let somador = 0
        for(let indice = 0; indice < valor2; indice++){
            somador += valor1
        }
        return console.log(`O valor ${valor1} x ${valor2} = ${somador}`)
    }

}

multiplicar(5, 5)
multiplicar(5, 0)