const agrupar = require("./agrupamento.js")

const lista = [
    {nome: "Iphone13", preco: "55.00", categoria: "portatil"},
    {nome: "Ipad", preco: "13.500", categoria: "portatil"},
    {nome: "Computador", preco: "7.895", categoria: "nao_portatil"},
    {nome: "Carro", preco: "355.500", categoria: "nao_portatil"},
    {nome: "Moto", preco: "15.500", categoria: "nao_portatil"},
    {nome: "GameBoy", preco: "3.500", categoria: "portatil"}
]

let teste = agrupar.agrupar_por_categoria(lista, "portatil")

console.log(teste)