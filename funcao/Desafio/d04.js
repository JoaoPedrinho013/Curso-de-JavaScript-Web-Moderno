// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.


function divisaoEsobra(dividendo=1, divisor=1) {
    console.log(`A divisão Inteira de ${dividendo} e ${divisor} é igual a = ${Math.floor(dividendo/divisor)}`)

    console.log(`O resto da divisão de ${dividendo} e ${divisor} é igual a = ${dividendo%divisor}`)
}

divisaoEsobra(13, 2)
