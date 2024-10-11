const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.00 }
]
app.get('/produtos', (req,res, next) => {
    //pegar o corpo da req 
    const produto = req.body
    //criar na lista produtos
    produtos.push(produto)
    res.send(produtos)
    next()
})

app.post('/produtos', (req,res,next) => {
    //ler a lista
    res.send(produtos)
    next()
})

app.put('/produtos/:id', (req,res,next) => {
    const {id} = req.params
    const {nome, preco} = req.body
    const produto = produtos.find(p => p.id === parseInt(id))

    if(!produto){
        res.status(404).json({Error: "Produto não encontrado!"})
    }
    if(nome){
        produto.nome = nome
    }
    if(preco){
        produto.preco = preco
    } 
    res.json(produtos)
    next()
})

app.delete('/produtos/:id', (req, res,next) => {
    const { id } = req.params;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(id));

    if (produtoIndex === -1) {
        return res.status(404).json({ Error: "Produto não encontrado!" });
    }

    const produtoRemovido = produtos.splice(produtoIndex, 1);

    console.log(produtoRemovido);
    res.send({
        mensagem: 'Produto excluído com sucesso.',
        produto: produtoRemovido[0]  // Produto removido é retornado
    });
    next()
});



// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
