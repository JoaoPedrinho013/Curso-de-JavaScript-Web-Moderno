/**  Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o pârametro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo..."
Exeplo:
 inverso(true) retornara false
 inverso("6") retornara "booleano ou número esperados, mas o parametro é do tipo string"
 inverso(-2000) // retornara 2000
 inverso("programação") // retornara "booleano ou números esperado, mas o parametro é do tipo string" */


 const inverso = (valor) => {
    if (typeof valor === 'number') {
        return console.log(-valor)
    } if (typeof valor === 'boolean'){
        return console.log(!valor)
    } 
    return console.log(`booleano ou números esperado, mas o parametro é do tipo ${typeof valor}`)
}
inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")