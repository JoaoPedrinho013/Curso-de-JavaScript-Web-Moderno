const produtos =  [
    {nome: 'Notebook', preco: 2599, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(produto) {
    //return false // retorna nenhum
    // return true // retorna todos
    // return produto.preco > 2000 // retorna so os preco maior de 2k
    //return produto.fragil === false // retorna so o que nao e fragil
    return produto.fragil === true // retorna os fragils
}))
console.log("------------------- MINI DESAFIO -------------------")

console.log(produtos.filter(function(produto){
    return produto.fragil === true
}).filter(function(prod){
    return prod.preco > 500
}))

console.log("------------------- MINI DESAFIO COM ARROW FUNCTION -------------------")
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))