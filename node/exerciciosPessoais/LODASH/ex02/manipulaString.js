// Crie um arquivo manipulaStrings.js que exporta funções como capitalizar, camelCase, e kebabCase usando métodos do lodash.
// Importe essas funções em outro arquivo e aplique-as em diferentes strings.

const { capitalize, camelCase, kebabCase } = require("lodash")



this.capitalizar = (string) => {
    return capitalize(string)
}


this.juntar_maiuscula = (string) => {
    return camelCase(string) 
}


this.juntar_com_hifen = (string) => {
    return kebabCase(string) 
}
