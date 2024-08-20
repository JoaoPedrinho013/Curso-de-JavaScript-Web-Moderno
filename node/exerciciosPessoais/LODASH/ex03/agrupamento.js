// Crie um arquivo agrupamento.js que exporta uma função agruparPorCategoria que usa o lodash para agrupar objetos de um array com base em uma propriedade, como categoria.
// Em outro arquivo, crie um array de objetos e use a função para agrupá-los.
const _ = require("lodash")

this.agrupar_por_categoria = array => _.groupBy(array, 'categoria')