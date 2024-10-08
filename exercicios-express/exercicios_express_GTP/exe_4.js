const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res) => {
    res.json(req.body)
 })

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const produto = req.body.find(p => p.id === id)
    if(produto){
        res.json(produto)
    }else{
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }
})


app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})
