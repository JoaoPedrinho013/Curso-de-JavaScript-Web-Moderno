const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())



const produtos = [
    { id: 0, nome: 'Produto 1', preco: 10.00 },
    { id: 1, nome: 'Produto 2', preco: 20.00 },
    { id: 2, nome: 'Produto 3', preco: 30.00 },
]

app.delete('/produtos/:id', (req, res) => {
    const {id} = req.params


    const produto = produtos.find(p => p.id === parseInt(id))

    if(!produto){
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }

    const produtoRemovido = produtos.splice(produto, 1);
        console.log(produtos)
        
    res.send({
        mensagem: 'Produto excluído com sucesso.',
        produto: produtoRemovido
  })
})

    





app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
});
