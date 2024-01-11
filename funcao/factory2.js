function criarProduto(nome = 'Sem nome', preco = 0) {
    const precoComDesconto = preco - ((10 / 100) * preco)
    return {
        nomeCliente: nome,  // Alteração aqui
        preco: `R$${preco.toFixed(2)}`,
        desconto: `Você teve 10% de desconto e vai pagar R$${precoComDesconto.toFixed(2)}`
    }
}

console.log(criarProduto('Caio', 1.5))


console.log('-----------------------------------------')
console.log('PROFESSOR')
// versao professor

function criarProduto2(nome2, preco2) {
    return {
        nome2,
        preco2,
        desconto: 0.1
    }
}

console.log(criarProduto2('Notebook', 2199.49))
console.log(criarProduto2('iPad', 1199.49))