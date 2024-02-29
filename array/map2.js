const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Rertornar um array apenas com os precos

let resultado = carrinho.map(elemento => JSON.parse(elemento).preco
)

console.log(resultado)

// professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)