// Crie um arquivo manipulaString.js que exporta funções para manipular strings, como reverterString, capitalizar, e contarVogais.
// Importe e use essas funções em outro arquivo.

const { capitalize } = require("lodash")

module.exports = {

    reverter_string(string){
       const string_lista = string.split("")
       const revertendo_string = string_lista.reverse()
       const string_reverse = revertendo_string.join("")
       return console.log(string_reverse)
    },

    capitalziar(string){
        return console.log(capitalize(string))
        // return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    },

    contar_vogais(string){
        let lista_string = string.toLowerCase().split('')
        let contador = 0
        let vogais = []
        for(var indice = 0; indice < lista_string.length; indice++){
            if(lista_string[indice] == 'a' || lista_string[indice] == 'e' || lista_string[indice] == 'i' || lista_string[indice] == 'o' || lista_string[indice] == 'u') {
                vogais.push(lista_string[indice])
                contador += 1
            }
        }
        console.log(`Tem ${contador} vogais e são ${vogais}`)
    }
}






