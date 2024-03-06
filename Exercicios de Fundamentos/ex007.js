/**Crie uma funcao que receba 4 numeros como parametro(numero, minimo, maximo, inclusivo) e retorne se o parametro numero ( o primeiro) esta entre o minimo e o maximo. Quando o parametro, o inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou maximo. caso o parametro inclusivo nao seja informado, seu valor padrao devera ser false, portanto, a logica sera exclusiva, nao considerando se o numero é igual a minimo ou a maximo
 * Exemplos:
 * estaEntre(10, 50, 100) // retornara true
 * estaEntre(16, 100, 160) // retornara false
 * estaEntre(3, 3, 150) // retornara false
 * estaEntre(3, 3, 150, true) // retornara true
 */


const estaEntre = (numero, minimo, maximo, inclusivo=false) => {
    if (inclusivo) {
        return console.log(numero >= minimo && numero <= maximo)
      } else {
        return console.log(numero > minimo && numero < maximo)
      }
    
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)
console.log('---------------------------------------------------------------------')

const estaEntre2 = (numero, minimo, maximo, inclusivo=false) => console.log(inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo)

estaEntre2(10, 50, 100)
estaEntre2(16, 100, 160)
estaEntre2(3, 3, 150)
estaEntre2(3, 3, 150, true)
 