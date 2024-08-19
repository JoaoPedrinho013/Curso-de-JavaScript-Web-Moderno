// Crie um arquivo operacoesArray.js que exporta funções para manipular arrays, como adicionarElemento, removerElemento, e buscarElemento.
// Importe e use essas funções em um outro arquivo.

module.exports = {
    adcionar(array, elemento){
        array.push(elemento)
    },

    remover(array, elemento){
        array.splice(elemento, 1)
    },

    buscar(array, elemento){
        return array[elemento]
    }
}