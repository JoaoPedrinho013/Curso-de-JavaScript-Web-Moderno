/*Crie uma funcao que receba um array de produtos e retorne o total das despesas
ex
despesasTotais([
    {nome: "jornal online", categoria: "informacao", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornara 239.99
////////////////////////////////////////////////////////////////////
despesasTotais([
    {nome: "galaxy s20", categoria: "Eletronicos", preco:3599.99},
    {nome: "MacBook Pro", categoria: "Eletronicos", preco: 30999.90}
]) // retornara 34599.89 */


const despesasTotais = array => {
    let somador = 0
    array.filter(function(itens){
        somador += itens.preco
    })
    console.log(somador)
}




despesasTotais([
    {nome: "jornal online", categoria: "informacao", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornara 239.99
////////////////////////////////////////////////////////////////////
despesasTotais([
    {nome: "galaxy s20", categoria: "Eletronicos", preco:3599.99},
    {nome: "MacBook Pro", categoria: "Eletronicos", preco: 30999.90}
]) // retornara 34599.89